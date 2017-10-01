import { updateDomProperties } from "./dom-utils";
import { TEXT_ELEMENT } from "./element";
import { createInstance } from "./component";

const PLACEMENT = 1;
const DELETION = 2;
const UPDATE = 3;

// kinds
const HOST_COMPONENT = "host";
const CLASS_COMPONENT = "class";
const HOST_ROOT = "root";

const timeHeuristicForUnitOfWork = 1;

let nextUnitOfWork = null;
let updateQueue = [];
let pendingCommit = null;

export function render(elements, containerDom) {
  // console.log("Queue render", updateQueue.length);
  updateQueue.push({
    kind: HOST_ROOT,
    stateNode: containerDom,
    pendingProps: { children: arrify(elements) }
  });
  requestIdleCallback(performWork);
}

export function scheduleUpdate(fiber, partialState) {
  // console.log("Queue update", updateQueue.length);
  updateQueue.push({
    kind: CLASS_COMPONENT,
    fiber: fiber,
    partialState: partialState
  });
  requestIdleCallback(performWork);
}

function performWork(deadline) {
  workLoop(deadline);
  if (nextUnitOfWork != null || updateQueue.length > 0) {
    requestIdleCallback(performWork);
  }
}

function workLoop(deadline) {
  if (nextUnitOfWork == null) {
    resetNextUnitOfWork();
  }

  while (
    nextUnitOfWork != null &&
    deadline.timeRemaining() > timeHeuristicForUnitOfWork
  ) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
  }

  if (pendingCommit) {
    commitAllWork(pendingCommit);
  }
}

function resetNextUnitOfWork() {
  if (!nextUnitOfWork && updateQueue.length) {
    const update = updateQueue.shift();
    if (update.kind === HOST_ROOT) {
      nextUnitOfWork = {
        stateNode: update.stateNode,
        kind: HOST_ROOT,
        pendingProps: update.pendingProps,
        alternate: update.stateNode._rootContainerFiber
      };
    } else {
      let node = update.fiber;
      update.fiber.partialState = update.partialState;
      while (node.parent != null) {
        node = node.parent;
      }
      nextUnitOfWork = {
        stateNode: node.stateNode,
        kind: HOST_ROOT,
        pendingProps: node.pendingProps,
        alternate: node
      };
    }
  }
}

function performUnitOfWork(fiber) {
  beginWork(fiber);
  if (fiber.child != null) {
    return fiber.child;
  } else {
    let uow = fiber;
    while (uow != null) {
      completeWork(uow);
      if (uow.sibling) {
        return uow.sibling;
      } else {
        uow = uow.parent;
      }
    }
  }
}

function beginWork(parentFiber) {
  let elements = [];
  if (parentFiber.kind == CLASS_COMPONENT) {
    if (parentFiber.stateNode == null) {
      parentFiber.stateNode = createInstance(parentFiber);
      elements = parentFiber.stateNode.render();
    } else {
      const instance = parentFiber.stateNode;
      const shouldUpdate =
        parentFiber.pendingProps != instance.props || parentFiber.partialState;
      if (shouldUpdate) {
        instance.props = parentFiber.pendingProps;
        const partialState = getStateFromUpdate(
          instance,
          parentFiber.partialState
        );
        instance.state = Object.assign({}, instance.state, partialState);
        elements = parentFiber.stateNode.render();
        parentFiber.partialState = null;
      } else {
        // No need to render, reuse children from last time
        cloneChildFibers(parentFiber);
        return;
      }
    }
  } else {
    elements = parentFiber.pendingProps.children;
  }
  elements = arrify(elements);

  //reconcileChildrenArray
  let index = 0;
  let oldFiber = parentFiber.alternate ? parentFiber.alternate.child : null;
  let newFiber = null;
  while (index < elements.length || oldFiber != null) {
    if (
      index < elements.length &&
      oldFiber != null &&
      elements[index].type == oldFiber.type
    ) {
      const element = elements[index];
      const prevFiber = newFiber;
      newFiber = {
        type: element.type,
        kind: oldFiber.kind,
        stateNode: oldFiber.stateNode,
        pendingProps: element.props,
        parent: parentFiber,
        alternate: oldFiber,
        partialState: oldFiber.partialState
      };
      if (index == 0) {
        parentFiber.child = newFiber;
      } else {
        prevFiber.sibling = newFiber;
      }
      index++;
      oldFiber = oldFiber.sibling;
      continue;
    }

    if (index < elements.length) {
      const element = elements[index];
      const prevFiber = newFiber;
      newFiber = {
        type: element.type,
        kind:
          typeof element.type === "string" ? HOST_COMPONENT : CLASS_COMPONENT,
        pendingProps: element.props,
        parent: parentFiber
      };
      if (index == 0) {
        parentFiber.child = newFiber;
      } else {
        prevFiber.sibling = newFiber;
      }
      index++;
    }

    if (oldFiber != null) {
      oldFiber.effect = DELETION;
      parentFiber.effects = parentFiber.effects || [];
      parentFiber.effects.push(oldFiber);
      oldFiber = oldFiber.sibling;
    }
  }
}

function cloneChildFibers(parentFiber) {
  const oldFiber = parentFiber.alternate;
  if (oldFiber.child == null) {
    return;
  }

  let oldChild = oldFiber.child;
  let prevChild = null;
  while (oldChild != null) {
    const newChild = {
      type: oldChild.type,
      kind: oldChild.kind,
      stateNode: oldChild.stateNode,
      pendingProps: oldChild.pendingProps,
      partialState: oldChild.partialState,
      alternate: oldChild,
      parent: parentFiber
    };
    if (!prevChild) {
      parentFiber.child = newChild;
    } else {
      prevChild.sibling = newChild;
    }
    prevChild = newChild;
    oldChild = oldChild.sibling;
  }
}

function completeWork(fiber) {
  switch (fiber.kind) {
    case HOST_COMPONENT:
      if (fiber.alternate) {
        fiber.effect = UPDATE;
      } else {
        fiber.effect = PLACEMENT;
        const isTextElement = fiber.type === TEXT_ELEMENT;
        const dom = isTextElement
          ? document.createTextNode("")
          : document.createElement(fiber.type);
        updateDomProperties(dom, [], fiber.pendingProps);
        fiber.stateNode = dom;
      }
      break;
    case CLASS_COMPONENT:
      fiber.stateNode.__fiber = fiber;
      break;
  }
  if (fiber.parent) {
    const childEffects = fiber.effects || [];
    const thisEffect = fiber.effect != null ? [fiber] : [];
    const parentEffects = fiber.parent.effects || [];
    fiber.parent.effects = parentEffects.concat(childEffects, thisEffect);
  } else {
    pendingCommit = fiber;
  }
}

function commitAllWork(fiber) {
  fiber.effects.forEach(f => {
    commitWork(f);
  });
  fiber.stateNode._rootContainerFiber = fiber;
  nextUnitOfWork = null;
  pendingCommit = null;
}

function commitWork(fiber) {
  if (fiber.kind != HOST_ROOT) {
    let domParentFiber = fiber.parent;
    while (domParentFiber.kind == CLASS_COMPONENT) {
      domParentFiber = domParentFiber.parent;
    }
    switch (fiber.effect) {
      case UPDATE:
        // console.log("update", fiber.stateNode);
        updateDomProperties(
          fiber.stateNode,
          fiber.alternate.pendingProps,
          fiber.pendingProps
        );
        break;
      case PLACEMENT:
        if (fiber.kind == HOST_COMPONENT) {
          domParentFiber.stateNode.appendChild(fiber.stateNode);
        }
        // console.log("place", fiber.stateNode);
        break;
      case DELETION:
        // console.log("delete", fiber.stateNode);
        let node = fiber;
        while (true) {
          if (node.kind == CLASS_COMPONENT) {
            node = node.child;
            continue;
          }

          domParentFiber.stateNode.removeChild(node.stateNode);

          while (node != fiber && node.sibling == null) {
            node = node.parent;
          }

          if (node == fiber) {
            break;
          }

          node = node.sibling;
        }
        break;
    }
  }
}

function getStateFromUpdate(instance, partialState) {
  if (partialState == null) {
    return {};
  }
  if (typeof partialState === "function") {
    const updateFn = partialState;
    return updateFn.call(instance, instance.state);
  } else {
    return partialState;
  }
}

function arrify(val) {
  if (val === null || val === undefined) {
    return [];
  }

  return Array.isArray(val) ? val : [val];
}
