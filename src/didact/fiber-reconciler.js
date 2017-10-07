import { updateDomProperties } from "./dom-utils";
import { TEXT_ELEMENT } from "./element";
import { createInstance } from "./component";

// Fiber tags
const HOST_COMPONENT = "host";
const CLASS_COMPONENT = "class";
const HOST_ROOT = "root";

// Effect tags
const PLACEMENT = 1;
const DELETION = 2;
const UPDATE = 3;

const ENOUGH_TIME = 1;

// Global state:
const updateQueue = [];
let nextUnitOfWork = null;
let pendingCommit = null;

export function render(elements, containerDom) {
  updateQueue.push({
    from: HOST_ROOT,
    dom: containerDom,
    newProps: { children: arrify(elements) }
  });
  requestIdleCallback(performWork);
}

export function scheduleUpdate(fiber, partialState) {
  updateQueue.push({
    from: CLASS_COMPONENT,
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
  if (!nextUnitOfWork) {
    resetNextUnitOfWork();
  }

  while (nextUnitOfWork != null && deadline.timeRemaining() > ENOUGH_TIME) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
  }

  if (pendingCommit) {
    commitAllWork(pendingCommit);
  }
}

function resetNextUnitOfWork() {
  const update = updateQueue.shift();

  if (!update) {
    return;
  }

  // Copy the setState parameter from the update payload to the corresponding fiber
  if (update.partialState) {
    update.fiber.partialState = update.partialState;
  }

  const root =
    update.from == HOST_ROOT
      ? update.dom._rootContainerFiber
      : getRoot(update.fiber);

  nextUnitOfWork = {
    tag: HOST_ROOT,
    stateNode: update.dom || root.stateNode,
    props: update.newProps || root.props,
    alternate: root
  };
}

function getRoot(fiber) {
  let node = fiber;
  while (node.parent != null) {
    node = node.parent;
  }
  return node;
}

function performUnitOfWork(fiber) {
  beginWork(fiber);
  if (fiber.child != null) {
    return fiber.child;
  }

  // No child, we call completeWork until we find a sibling
  let uow = fiber;
  while (uow != null) {
    completeWork(uow);
    if (uow.sibling) {
      // Sibling needs to beginWork
      return uow.sibling;
    }
    uow = uow.parent;
  }
}

function beginWork(wipFiber) {
  if (wipFiber.tag == CLASS_COMPONENT) {
    updateClassComponent(wipFiber);
  } else {
    updateHostComponent(wipFiber);
  }
}

function updateHostComponent(wipFiber) {
  const newChildElements = wipFiber.props.children;
  reconcileChildrenArray(wipFiber, newChildElements);
}

function updateClassComponent(wipFiber) {
  let instance = wipFiber.stateNode;
  if (instance == null) {
    instance = wipFiber.stateNode = createInstance(wipFiber);
  } else if (wipFiber.props == instance.props && !wipFiber.partialState) {
    // No need to render, clone children from last time
    cloneChildFibers(wipFiber);
    return;
  }

  instance.props = wipFiber.props;
  instance.state = Object.assign({}, instance.state, wipFiber.partialState);
  wipFiber.partialState = null;

  const newChildElements = wipFiber.stateNode.render();
  reconcileChildrenArray(wipFiber, newChildElements);
}

function reconcileChildrenArray(wipFiber, newChildElements) {
  const elements = arrify(newChildElements);

  let index = 0;
  let oldFiber = wipFiber.alternate ? wipFiber.alternate.child : null;
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
        tag: oldFiber.tag,
        stateNode: oldFiber.stateNode,
        props: element.props,
        parent: wipFiber,
        alternate: oldFiber,
        partialState: oldFiber.partialState
      };
      if (index == 0) {
        wipFiber.child = newFiber;
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
        tag:
          typeof element.type === "string" ? HOST_COMPONENT : CLASS_COMPONENT,
        props: element.props,
        parent: wipFiber
      };
      if (index == 0) {
        wipFiber.child = newFiber;
      } else {
        prevFiber.sibling = newFiber;
      }
      index++;
    }

    if (oldFiber != null) {
      oldFiber.effect = DELETION;
      wipFiber.effects = wipFiber.effects || [];
      wipFiber.effects.push(oldFiber);
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
      tag: oldChild.tag,
      stateNode: oldChild.stateNode,
      props: oldChild.props,
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
  switch (fiber.tag) {
    case HOST_COMPONENT:
      if (fiber.alternate) {
        fiber.effect = UPDATE;
      } else {
        fiber.effect = PLACEMENT;
        const isTextElement = fiber.type === TEXT_ELEMENT;
        const dom = isTextElement
          ? document.createTextNode("")
          : document.createElement(fiber.type);
        updateDomProperties(dom, [], fiber.props);
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
  if (fiber.tag != HOST_ROOT) {
    let domParentFiber = fiber.parent;
    while (domParentFiber.tag == CLASS_COMPONENT) {
      domParentFiber = domParentFiber.parent;
    }
    switch (fiber.effect) {
      case UPDATE:
        // console.log("update", fiber.stateNode);
        updateDomProperties(
          fiber.stateNode,
          fiber.alternate.props,
          fiber.props
        );
        break;
      case PLACEMENT:
        if (fiber.tag == HOST_COMPONENT) {
          domParentFiber.stateNode.appendChild(fiber.stateNode);
        }
        // console.log("place", fiber.stateNode);
        break;
      case DELETION:
        // console.log("delete", fiber.stateNode);
        let node = fiber;
        while (true) {
          if (node.tag == CLASS_COMPONENT) {
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

function arrify(val) {
  return val == null ? [] : Array.isArray(val) ? val : [val];
}
