/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ({

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.using = using;
/** @jsx Reactish.createElement */

function using(Reactish) {
  class Cell extends Reactish.Component {
    render() {
      var _props = this.props,
          text = _props.text,
          delay = _props.delay;

      wait(delay);
      return Reactish.createElement(
        "td",
        null,
        text
      );
    }
  }

  class Demo extends Reactish.Component {
    constructor(props) {
      super(props);
      this.state = {
        elapsed: 0, // the number shown on each Cell
        size: 6, // the size of a row
        period: 1000, // the time (in ms) between updates
        delay: 3 // the delay (in ms) for the render of each Cell
      };
      this.changeDelay = this.changeDelay.bind(this);
      this.changePeriod = this.changePeriod.bind(this);
      this.tick = this.tick.bind(this);
      this.tick();
    }
    tick() {
      var _this = this;

      setTimeout(function () {
        _this.setState({ elapsed: _this.state.elapsed + 1 });
        _this.tick();
      }, this.state.period);
    }
    changeDelay(e) {
      this.setState({ delay: +e.target.value });
    }
    changePeriod(e) {
      this.setState({ period: +e.target.value });
    }
    render() {
      var _state = this.state,
          elapsed = _state.elapsed,
          size = _state.size,
          delay = _state.delay,
          period = _state.period;

      var text = elapsed % 10;
      var array = Array(size).fill();
      var row = array.map(function (x, key) {
        return Reactish.createElement(Cell, { key: key, text: text, delay: delay });
      });
      var rows = array.map(function (x, key) {
        return Reactish.createElement(
          "tr",
          { key: key },
          row
        );
      });
      return Reactish.createElement(
        "div",
        { style: { display: "flex" } },
        Reactish.createElement(
          "table",
          null,
          Reactish.createElement(
            "tbody",
            null,
            rows
          )
        ),
        Reactish.createElement(
          "div",
          null,
          Reactish.createElement(
            "p",
            null,
            "The table refreshes every ",
            Reactish.createElement(
              "b",
              null,
              Math.round(period)
            ),
            "ms"
          ),
          Reactish.createElement("input", {
            id: "period-range",
            type: "range",
            min: "200",
            max: "1000",
            step: "any",
            value: period,
            onChange: this.changePeriod
          }),
          Reactish.createElement(
            "p",
            null,
            "The render of each cell takes ",
            Reactish.createElement(
              "b",
              null,
              delay.toFixed(2)
            ),
            "ms"
          ),
          Reactish.createElement("input", {
            id: "delay-range",
            type: "range",
            min: "0",
            max: "10",
            step: "any",
            value: delay,
            onChange: this.changeDelay
          }),
          Reactish.createElement(
            "p",
            null,
            "So, sync rendering the full table will keep the main thread busy for ",
            Reactish.createElement(
              "b",
              null,
              (delay * size * size).toFixed(2)
            ),
            "ms"
          )
        )
      );
    }
  }

  return Demo;
}

function wait(ms) {
  var start = performance.now();
  while (performance.now() - start < ms) {}
}

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  var frames = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 150;
  var colWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "2px";

  var container = document.createElement("div");
  container.style.position = "fixed";
  container.style.right = "10px";
  container.style.top = "0";
  container.style.zIndex = "99999";
  for (var _i = 0; _i < frames; _i++) {
    var fc = document.createElement("div");
    fc.style.background = "red";
    fc.style.width = colWidth;
    fc.style.display = "inline-block";
    fc.style.verticalAlign = "top";
    fc.style.opacity = "0.8";
    container.appendChild(fc);
    fc.style.height = "16px";
  }
  var last = performance.now();
  var i = 0;
  function refresh() {
    var now = performance.now();
    var diff = now - last;
    last = now;
    container.childNodes[i % frames].style.background = "red";
    i++;
    container.childNodes[i % frames].style.background = "black";
    container.childNodes[i % frames].style.height = diff + "px";
    requestAnimationFrame(refresh);
  }
  requestAnimationFrame(refresh);
  document.body.appendChild(container);
})();

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _didact = __webpack_require__(36);

var _didact2 = _interopRequireDefault(_didact);

var _demo = __webpack_require__(15);

__webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx didact.createElement */

var Demo = (0, _demo.using)({
  createElement: _didact2.default.createElement,
  Component: _didact2.default.Component,
  render: _didact2.default.render
});

_didact2.default.render([_didact2.default.createElement(
  "h3",
  { key: "1" },
  "This section is updated using",
  " ",
  _didact2.default.createElement(
    "a",
    { href: "https://github.com/hexacta/didact" },
    "Didact Fiber"
  )
), _didact2.default.createElement(Demo, { key: "2" }), _didact2.default.createElement(
  "footer",
  { key: "3" },
  "Now try it using ",
  _didact2.default.createElement(
    "a",
    { href: "react-sync.html" },
    "React sync rendering"
  ),
  " or",
  " ",
  _didact2.default.createElement(
    "a",
    { href: "react-async.html" },
    "React async rendering"
  )
)], document.getElementById("root"));

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
const TEXT_ELEMENT = "TEXT ELEMENT";

function createElement(type, config, ...args) {
  const props = Object.assign({}, config);
  const hasChildren = args.length > 0;
  const rawChildren = hasChildren ? [].concat(...args) : [];
  props.children = rawChildren
    .filter(c => c != null && c !== false)
    .map(c => c instanceof Object ? c : createTextElement(c));
  return { type, props };
}

function createTextElement(value) {
  return createElement(TEXT_ELEMENT, { nodeValue: value });
}

const isEvent = name => name.startsWith("on");
const isAttribute = name =>
  !isEvent(name) && name != "children" && name != "style";
const isNew = (prev, next) => key => prev[key] !== next[key];
const isGone = (prev, next) => key => !(key in next);

function updateDomProperties(dom, prevProps, nextProps) {
  // Remove event listeners
  Object.keys(prevProps)
    .filter(isEvent)
    .filter(key => !(key in nextProps) || isNew(prevProps, nextProps)(key))
    .forEach(name => {
      const eventType = name.toLowerCase().substring(2);
      dom.removeEventListener(eventType, prevProps[name]);
    });

  // Remove attributes
  Object.keys(prevProps)
    .filter(isAttribute)
    .filter(isGone(prevProps, nextProps))
    .forEach(name => {
      dom[name] = null;
    });

  // Set attributes
  Object.keys(nextProps)
    .filter(isAttribute)
    .filter(isNew(prevProps, nextProps))
    .forEach(name => {
      dom[name] = nextProps[name];
    });

  // Set style
  prevProps.style = prevProps.style || {};
  nextProps.style = nextProps.style || {};
  Object.keys(nextProps.style)
    .filter(isNew(prevProps.style, nextProps.style))
    .forEach(key => {
      dom.style[key] = nextProps.style[key];
    });
  Object.keys(prevProps.style)
    .filter(isGone(prevProps.style, nextProps.style))
    .forEach(key => {
      dom.style[key] = "";
    });

  // Add event listeners
  Object.keys(nextProps)
    .filter(isEvent)
    .filter(isNew(prevProps, nextProps))
    .forEach(name => {
      const eventType = name.toLowerCase().substring(2);
      dom.addEventListener(eventType, nextProps[name]);
    });
}

function createDomElement(fiber) {
  const isTextElement = fiber.type === TEXT_ELEMENT;
  const dom = isTextElement
    ? document.createTextNode("")
    : document.createElement(fiber.type);
  updateDomProperties(dom, [], fiber.props);
  return dom;
}

// Fiber tags
const HOST_COMPONENT = "host";
const CLASS_COMPONENT = "class";
const HOST_ROOT = "root";

// Effect tags
const PLACEMENT = 1;
const DELETION = 2;
const UPDATE = 3;

const ENOUGH_TIME = 1;

// Global state
const updateQueue = [];
let nextUnitOfWork = null;
let pendingCommit = null;

function render(elements, containerDom) {
  updateQueue.push({
    from: HOST_ROOT,
    dom: containerDom,
    newProps: { children: elements }
  });
  requestIdleCallback(performWork);
}

function scheduleUpdate(instance, partialState) {
  updateQueue.push({
    from: CLASS_COMPONENT,
    instance: instance,
    partialState: partialState
  });
  requestIdleCallback(performWork);
}

function performWork(deadline) {
  workLoop(deadline);
  if (nextUnitOfWork || updateQueue.length > 0) {
    requestIdleCallback(performWork);
  }
}

function workLoop(deadline) {
  if (!nextUnitOfWork) {
    resetNextUnitOfWork();
  }
  while (nextUnitOfWork && deadline.timeRemaining() > ENOUGH_TIME) {
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
    update.instance.__fiber.partialState = update.partialState;
  }

  const root =
    update.from == HOST_ROOT
      ? update.dom._rootContainerFiber
      : getRoot(update.instance.__fiber);

  nextUnitOfWork = {
    tag: HOST_ROOT,
    stateNode: update.dom || root.stateNode,
    props: update.newProps || root.props,
    alternate: root
  };
}

function getRoot(fiber) {
  let node = fiber;
  while (node.parent) {
    node = node.parent;
  }
  return node;
}

function performUnitOfWork(wipFiber) {
  beginWork(wipFiber);
  if (wipFiber.child) {
    return wipFiber.child;
  }

  // No child, we call completeWork until we find a sibling
  let uow = wipFiber;
  while (uow) {
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
  if (!wipFiber.stateNode) {
    wipFiber.stateNode = createDomElement(wipFiber);
  }

  const newChildElements = wipFiber.props.children;
  reconcileChildrenArray(wipFiber, newChildElements);
}

function updateClassComponent(wipFiber) {
  let instance = wipFiber.stateNode;
  if (instance == null) {
    // Call class constructor
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

function arrify(val) {
  return val == null ? [] : Array.isArray(val) ? val : [val];
}

function reconcileChildrenArray(wipFiber, newChildElements) {
  const elements = arrify(newChildElements);

  let index = 0;
  let oldFiber = wipFiber.alternate ? wipFiber.alternate.child : null;
  let newFiber = null;
  while (index < elements.length || oldFiber != null) {
    const prevFiber = newFiber;
    const element = index < elements.length && elements[index];
    const sameType = oldFiber && element && element.type == oldFiber.type;

    if (sameType) {
      newFiber = {
        type: oldFiber.type,
        tag: oldFiber.tag,
        stateNode: oldFiber.stateNode,
        props: element.props,
        parent: wipFiber,
        alternate: oldFiber,
        partialState: oldFiber.partialState,
        effectTag: UPDATE
      };
    }

    if (element && !sameType) {
      newFiber = {
        type: element.type,
        tag:
          typeof element.type === "string" ? HOST_COMPONENT : CLASS_COMPONENT,
        props: element.props,
        parent: wipFiber,
        effectTag: PLACEMENT
      };
    }

    if (oldFiber && !sameType) {
      oldFiber.effectTag = DELETION;
      wipFiber.effects = wipFiber.effects || [];
      wipFiber.effects.push(oldFiber);
    }

    if (oldFiber) {
      oldFiber = oldFiber.sibling;
    }

    if (index == 0) {
      wipFiber.child = newFiber;
    } else if (prevFiber && element) {
      prevFiber.sibling = newFiber;
    }

    index++;
  }
}

function cloneChildFibers(parentFiber) {
  const oldFiber = parentFiber.alternate;
  if (!oldFiber.child) {
    return;
  }

  let oldChild = oldFiber.child;
  let prevChild = null;
  while (oldChild) {
    const newChild = {
      type: oldChild.type,
      tag: oldChild.tag,
      stateNode: oldChild.stateNode,
      props: oldChild.props,
      partialState: oldChild.partialState,
      alternate: oldChild,
      parent: parentFiber
    };
    if (prevChild) {
      prevChild.sibling = newChild;
    } else {
      parentFiber.child = newChild;
    }
    prevChild = newChild;
    oldChild = oldChild.sibling;
  }
}

function completeWork(fiber) {
  if (fiber.tag == CLASS_COMPONENT) {
    fiber.stateNode.__fiber = fiber;
  }

  if (fiber.parent) {
    const childEffects = fiber.effects || [];
    const thisEffect = fiber.effectTag != null ? [fiber] : [];
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
  if (fiber.tag == HOST_ROOT) {
    return;
  }

  let domParentFiber = fiber.parent;
  while (domParentFiber.tag == CLASS_COMPONENT) {
    domParentFiber = domParentFiber.parent;
  }
  const domParent = domParentFiber.stateNode;

  if (fiber.effectTag == PLACEMENT && fiber.tag == HOST_COMPONENT) {
    domParent.appendChild(fiber.stateNode);
  } else if (fiber.effectTag == UPDATE) {
    updateDomProperties(fiber.stateNode, fiber.alternate.props, fiber.props);
  } else if (fiber.effectTag == DELETION) {
    commitDeletion(fiber, domParent);
  }
}

function commitDeletion(fiber, domParent) {
  let node = fiber;
  while (true) {
    if (node.tag == CLASS_COMPONENT) {
      node = node.child;
      continue;
    }
    domParent.removeChild(node.stateNode);
    while (node != fiber && !node.sibling) {
      node = node.parent;
    }
    if (node == fiber) {
      return;
    }
    node = node.sibling;
  }
}

class Component {
  constructor(props) {
    this.props = props || {};
    this.state = this.state || {};
  }

  setState(partialState) {
    scheduleUpdate(this, partialState);
  }
}

function createInstance(fiber) {
  const instance = new fiber.type(fiber.props);
  instance.__fiber = fiber;
  return instance;
}

var didact = {
  createElement,
  Component,
  render
};

/* harmony default export */ __webpack_exports__["default"] = (didact);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTliMmVhYjI5OGU0NGQ3ZTc4NTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlbW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWVkaW5nLXRocmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlkYWN0LWRlbW8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RpZGFjdC9kaXN0L2RpZGFjdC5lcy5qcyJdLCJuYW1lcyI6WyJ1c2luZyIsIlJlYWN0aXNoIiwiQ2VsbCIsIkNvbXBvbmVudCIsInJlbmRlciIsInByb3BzIiwidGV4dCIsImRlbGF5Iiwid2FpdCIsIkRlbW8iLCJjb25zdHJ1Y3RvciIsInN0YXRlIiwiZWxhcHNlZCIsInNpemUiLCJwZXJpb2QiLCJjaGFuZ2VEZWxheSIsImJpbmQiLCJjaGFuZ2VQZXJpb2QiLCJ0aWNrIiwic2V0VGltZW91dCIsInNldFN0YXRlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYXJyYXkiLCJBcnJheSIsImZpbGwiLCJyb3ciLCJtYXAiLCJ4Iiwia2V5Iiwicm93cyIsImRpc3BsYXkiLCJNYXRoIiwicm91bmQiLCJ0b0ZpeGVkIiwibXMiLCJzdGFydCIsInBlcmZvcm1hbmNlIiwibm93IiwiZnJhbWVzIiwiY29sV2lkdGgiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsInBvc2l0aW9uIiwicmlnaHQiLCJ0b3AiLCJ6SW5kZXgiLCJpIiwiZmMiLCJiYWNrZ3JvdW5kIiwid2lkdGgiLCJ2ZXJ0aWNhbEFsaWduIiwib3BhY2l0eSIsImFwcGVuZENoaWxkIiwiaGVpZ2h0IiwibGFzdCIsInJlZnJlc2giLCJkaWZmIiwiY2hpbGROb2RlcyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJvZHkiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNEMiLCJmaWxlIjoiZGlkYWN0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDM1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxOWIyZWFiMjk4ZTQ0ZDdlNzg1NiIsIi8qKiBAanN4IFJlYWN0aXNoLmNyZWF0ZUVsZW1lbnQgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHVzaW5nKFJlYWN0aXNoKSB7XG4gIGNsYXNzIENlbGwgZXh0ZW5kcyBSZWFjdGlzaC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHsgdGV4dCwgZGVsYXkgfSA9IHRoaXMucHJvcHM7XG4gICAgICB3YWl0KGRlbGF5KTtcbiAgICAgIHJldHVybiA8dGQ+e3RleHR9PC90ZD47XG4gICAgfVxuICB9XG5cbiAgY2xhc3MgRGVtbyBleHRlbmRzIFJlYWN0aXNoLkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIGVsYXBzZWQ6IDAsIC8vIHRoZSBudW1iZXIgc2hvd24gb24gZWFjaCBDZWxsXG4gICAgICAgIHNpemU6IDYsIC8vIHRoZSBzaXplIG9mIGEgcm93XG4gICAgICAgIHBlcmlvZDogMTAwMCwgLy8gdGhlIHRpbWUgKGluIG1zKSBiZXR3ZWVuIHVwZGF0ZXNcbiAgICAgICAgZGVsYXk6IDMgLy8gdGhlIGRlbGF5IChpbiBtcykgZm9yIHRoZSByZW5kZXIgb2YgZWFjaCBDZWxsXG4gICAgICB9O1xuICAgICAgdGhpcy5jaGFuZ2VEZWxheSA9IHRoaXMuY2hhbmdlRGVsYXkuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuY2hhbmdlUGVyaW9kID0gdGhpcy5jaGFuZ2VQZXJpb2QuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMudGljayA9IHRoaXMudGljay5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy50aWNrKCk7XG4gICAgfVxuICAgIHRpY2soKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVsYXBzZWQ6IHRoaXMuc3RhdGUuZWxhcHNlZCArIDEgfSk7XG4gICAgICAgIHRoaXMudGljaygpO1xuICAgICAgfSwgdGhpcy5zdGF0ZS5wZXJpb2QpO1xuICAgIH1cbiAgICBjaGFuZ2VEZWxheShlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZGVsYXk6ICtlLnRhcmdldC52YWx1ZSB9KTtcbiAgICB9XG4gICAgY2hhbmdlUGVyaW9kKGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwZXJpb2Q6ICtlLnRhcmdldC52YWx1ZSB9KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyBlbGFwc2VkLCBzaXplLCBkZWxheSwgcGVyaW9kIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgY29uc3QgdGV4dCA9IGVsYXBzZWQgJSAxMDtcbiAgICAgIGNvbnN0IGFycmF5ID0gQXJyYXkoc2l6ZSkuZmlsbCgpO1xuICAgICAgY29uc3Qgcm93ID0gYXJyYXkubWFwKCh4LCBrZXkpID0+IDxDZWxsIHsuLi57IGtleSwgdGV4dCwgZGVsYXkgfX0gLz4pO1xuICAgICAgY29uc3Qgcm93cyA9IGFycmF5Lm1hcCgoeCwga2V5KSA9PiA8dHIga2V5PXtrZXl9Pntyb3d9PC90cj4pO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICA8dGJvZHk+e3Jvd3N9PC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgVGhlIHRhYmxlIHJlZnJlc2hlcyBldmVyeSA8Yj57TWF0aC5yb3VuZChwZXJpb2QpfTwvYj5tc1xuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGlkPVwicGVyaW9kLXJhbmdlXCJcbiAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgbWluPVwiMjAwXCJcbiAgICAgICAgICAgICAgbWF4PVwiMTAwMFwiXG4gICAgICAgICAgICAgIHN0ZXA9XCJhbnlcIlxuICAgICAgICAgICAgICB2YWx1ZT17cGVyaW9kfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VQZXJpb2R9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFRoZSByZW5kZXIgb2YgZWFjaCBjZWxsIHRha2VzIDxiPntkZWxheS50b0ZpeGVkKDIpfTwvYj5tc1xuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGlkPVwiZGVsYXktcmFuZ2VcIlxuICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICAgICAgbWF4PVwiMTBcIlxuICAgICAgICAgICAgICBzdGVwPVwiYW55XCJcbiAgICAgICAgICAgICAgdmFsdWU9e2RlbGF5fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VEZWxheX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgU28sIHN5bmMgcmVuZGVyaW5nIHRoZSBmdWxsIHRhYmxlIHdpbGwga2VlcCB0aGUgbWFpbiB0aHJlYWQgYnVzeVxuICAgICAgICAgICAgICBmb3IgPGI+eyhkZWxheSAqIHNpemUgKiBzaXplKS50b0ZpeGVkKDIpfTwvYj5tc1xuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIERlbW87XG59XG5cbmZ1bmN0aW9uIHdhaXQobXMpIHtcbiAgY29uc3Qgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgd2hpbGUgKHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnQgPCBtcyk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGVtby5qcyIsIihmdW5jdGlvbihmcmFtZXMgPSAxNTAsIGNvbFdpZHRoID0gXCIycHhcIikge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gIGNvbnRhaW5lci5zdHlsZS5yaWdodCA9IFwiMTBweFwiO1xuICBjb250YWluZXIuc3R5bGUudG9wID0gXCIwXCI7XG4gIGNvbnRhaW5lci5zdHlsZS56SW5kZXggPSBcIjk5OTk5XCI7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZnJhbWVzOyBpKyspIHtcbiAgICBjb25zdCBmYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZmMuc3R5bGUuYmFja2dyb3VuZCA9IFwicmVkXCI7XG4gICAgZmMuc3R5bGUud2lkdGggPSBjb2xXaWR0aDtcbiAgICBmYy5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICBmYy5zdHlsZS52ZXJ0aWNhbEFsaWduID0gXCJ0b3BcIjtcbiAgICBmYy5zdHlsZS5vcGFjaXR5ID0gXCIwLjhcIjtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZmMpO1xuICAgIGZjLnN0eWxlLmhlaWdodCA9IFwiMTZweFwiO1xuICB9XG4gIGxldCBsYXN0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gIGxldCBpID0gMDtcbiAgZnVuY3Rpb24gcmVmcmVzaCgpIHtcbiAgICBjb25zdCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICBjb25zdCBkaWZmID0gbm93IC0gbGFzdDtcbiAgICBsYXN0ID0gbm93O1xuICAgIGNvbnRhaW5lci5jaGlsZE5vZGVzW2kgJSBmcmFtZXNdLnN0eWxlLmJhY2tncm91bmQgPSBcInJlZFwiO1xuICAgIGkrKztcbiAgICBjb250YWluZXIuY2hpbGROb2Rlc1tpICUgZnJhbWVzXS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJibGFja1wiO1xuICAgIGNvbnRhaW5lci5jaGlsZE5vZGVzW2kgJSBmcmFtZXNdLnN0eWxlLmhlaWdodCA9IGRpZmYgKyBcInB4XCI7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlZnJlc2gpO1xuICB9XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZWZyZXNoKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibGVlZGluZy10aHJlYWQuanMiLCJpbXBvcnQgZGlkYWN0IGZyb20gXCJkaWRhY3RcIjtcbmltcG9ydCB7IHVzaW5nIH0gZnJvbSBcIi4vZGVtb1wiO1xuaW1wb3J0IFwiLi9ibGVlZGluZy10aHJlYWRcIjtcblxuLyoqIEBqc3ggZGlkYWN0LmNyZWF0ZUVsZW1lbnQgKi9cblxuY29uc3QgRGVtbyA9IHVzaW5nKHtcbiAgY3JlYXRlRWxlbWVudDogZGlkYWN0LmNyZWF0ZUVsZW1lbnQsXG4gIENvbXBvbmVudDogZGlkYWN0LkNvbXBvbmVudCxcbiAgcmVuZGVyOiBkaWRhY3QucmVuZGVyXG59KTtcblxuZGlkYWN0LnJlbmRlcihcbiAgW1xuICAgIDxoMyBrZXk9XCIxXCI+XG4gICAgICBUaGlzIHNlY3Rpb24gaXMgdXBkYXRlZCB1c2luZ3tcIiBcIn1cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vaGV4YWN0YS9kaWRhY3RcIj5EaWRhY3QgRmliZXI8L2E+XG4gICAgPC9oMz4sXG4gICAgPERlbW8ga2V5PVwiMlwiIC8+LFxuICAgIDxmb290ZXIga2V5PVwiM1wiPlxuICAgICAgTm93IHRyeSBpdCB1c2luZyA8YSBocmVmPVwicmVhY3Qtc3luYy5odG1sXCI+UmVhY3Qgc3luYyByZW5kZXJpbmc8L2E+IG9ye1wiIFwifVxuICAgICAgPGEgaHJlZj1cInJlYWN0LWFzeW5jLmh0bWxcIj5SZWFjdCBhc3luYyByZW5kZXJpbmc8L2E+XG4gICAgPC9mb290ZXI+XG4gIF0sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKVxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaWRhY3QtZGVtby5qcyIsImNvbnN0IFRFWFRfRUxFTUVOVCA9IFwiVEVYVCBFTEVNRU5UXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCAuLi5hcmdzKSB7XG4gIGNvbnN0IHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnKTtcbiAgY29uc3QgaGFzQ2hpbGRyZW4gPSBhcmdzLmxlbmd0aCA+IDA7XG4gIGNvbnN0IHJhd0NoaWxkcmVuID0gaGFzQ2hpbGRyZW4gPyBbXS5jb25jYXQoLi4uYXJncykgOiBbXTtcbiAgcHJvcHMuY2hpbGRyZW4gPSByYXdDaGlsZHJlblxuICAgIC5maWx0ZXIoYyA9PiBjICE9IG51bGwgJiYgYyAhPT0gZmFsc2UpXG4gICAgLm1hcChjID0+IGMgaW5zdGFuY2VvZiBPYmplY3QgPyBjIDogY3JlYXRlVGV4dEVsZW1lbnQoYykpO1xuICByZXR1cm4geyB0eXBlLCBwcm9wcyB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0RWxlbWVudCh2YWx1ZSkge1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChURVhUX0VMRU1FTlQsIHsgbm9kZVZhbHVlOiB2YWx1ZSB9KTtcbn1cblxuY29uc3QgaXNFdmVudCA9IG5hbWUgPT4gbmFtZS5zdGFydHNXaXRoKFwib25cIik7XG5jb25zdCBpc0F0dHJpYnV0ZSA9IG5hbWUgPT5cbiAgIWlzRXZlbnQobmFtZSkgJiYgbmFtZSAhPSBcImNoaWxkcmVuXCIgJiYgbmFtZSAhPSBcInN0eWxlXCI7XG5jb25zdCBpc05ldyA9IChwcmV2LCBuZXh0KSA9PiBrZXkgPT4gcHJldltrZXldICE9PSBuZXh0W2tleV07XG5jb25zdCBpc0dvbmUgPSAocHJldiwgbmV4dCkgPT4ga2V5ID0+ICEoa2V5IGluIG5leHQpO1xuXG5mdW5jdGlvbiB1cGRhdGVEb21Qcm9wZXJ0aWVzKGRvbSwgcHJldlByb3BzLCBuZXh0UHJvcHMpIHtcbiAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVyc1xuICBPYmplY3Qua2V5cyhwcmV2UHJvcHMpXG4gICAgLmZpbHRlcihpc0V2ZW50KVxuICAgIC5maWx0ZXIoa2V5ID0+ICEoa2V5IGluIG5leHRQcm9wcykgfHwgaXNOZXcocHJldlByb3BzLCBuZXh0UHJvcHMpKGtleSkpXG4gICAgLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICBjb25zdCBldmVudFR5cGUgPSBuYW1lLnRvTG93ZXJDYXNlKCkuc3Vic3RyaW5nKDIpO1xuICAgICAgZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBwcmV2UHJvcHNbbmFtZV0pO1xuICAgIH0pO1xuXG4gIC8vIFJlbW92ZSBhdHRyaWJ1dGVzXG4gIE9iamVjdC5rZXlzKHByZXZQcm9wcylcbiAgICAuZmlsdGVyKGlzQXR0cmlidXRlKVxuICAgIC5maWx0ZXIoaXNHb25lKHByZXZQcm9wcywgbmV4dFByb3BzKSlcbiAgICAuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIGRvbVtuYW1lXSA9IG51bGw7XG4gICAgfSk7XG5cbiAgLy8gU2V0IGF0dHJpYnV0ZXNcbiAgT2JqZWN0LmtleXMobmV4dFByb3BzKVxuICAgIC5maWx0ZXIoaXNBdHRyaWJ1dGUpXG4gICAgLmZpbHRlcihpc05ldyhwcmV2UHJvcHMsIG5leHRQcm9wcykpXG4gICAgLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICBkb21bbmFtZV0gPSBuZXh0UHJvcHNbbmFtZV07XG4gICAgfSk7XG5cbiAgLy8gU2V0IHN0eWxlXG4gIHByZXZQcm9wcy5zdHlsZSA9IHByZXZQcm9wcy5zdHlsZSB8fCB7fTtcbiAgbmV4dFByb3BzLnN0eWxlID0gbmV4dFByb3BzLnN0eWxlIHx8IHt9O1xuICBPYmplY3Qua2V5cyhuZXh0UHJvcHMuc3R5bGUpXG4gICAgLmZpbHRlcihpc05ldyhwcmV2UHJvcHMuc3R5bGUsIG5leHRQcm9wcy5zdHlsZSkpXG4gICAgLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGRvbS5zdHlsZVtrZXldID0gbmV4dFByb3BzLnN0eWxlW2tleV07XG4gICAgfSk7XG4gIE9iamVjdC5rZXlzKHByZXZQcm9wcy5zdHlsZSlcbiAgICAuZmlsdGVyKGlzR29uZShwcmV2UHJvcHMuc3R5bGUsIG5leHRQcm9wcy5zdHlsZSkpXG4gICAgLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGRvbS5zdHlsZVtrZXldID0gXCJcIjtcbiAgICB9KTtcblxuICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzXG4gIE9iamVjdC5rZXlzKG5leHRQcm9wcylcbiAgICAuZmlsdGVyKGlzRXZlbnQpXG4gICAgLmZpbHRlcihpc05ldyhwcmV2UHJvcHMsIG5leHRQcm9wcykpXG4gICAgLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICBjb25zdCBldmVudFR5cGUgPSBuYW1lLnRvTG93ZXJDYXNlKCkuc3Vic3RyaW5nKDIpO1xuICAgICAgZG9tLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBuZXh0UHJvcHNbbmFtZV0pO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEb21FbGVtZW50KGZpYmVyKSB7XG4gIGNvbnN0IGlzVGV4dEVsZW1lbnQgPSBmaWJlci50eXBlID09PSBURVhUX0VMRU1FTlQ7XG4gIGNvbnN0IGRvbSA9IGlzVGV4dEVsZW1lbnRcbiAgICA/IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpXG4gICAgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGZpYmVyLnR5cGUpO1xuICB1cGRhdGVEb21Qcm9wZXJ0aWVzKGRvbSwgW10sIGZpYmVyLnByb3BzKTtcbiAgcmV0dXJuIGRvbTtcbn1cblxuLy8gRmliZXIgdGFnc1xuY29uc3QgSE9TVF9DT01QT05FTlQgPSBcImhvc3RcIjtcbmNvbnN0IENMQVNTX0NPTVBPTkVOVCA9IFwiY2xhc3NcIjtcbmNvbnN0IEhPU1RfUk9PVCA9IFwicm9vdFwiO1xuXG4vLyBFZmZlY3QgdGFnc1xuY29uc3QgUExBQ0VNRU5UID0gMTtcbmNvbnN0IERFTEVUSU9OID0gMjtcbmNvbnN0IFVQREFURSA9IDM7XG5cbmNvbnN0IEVOT1VHSF9USU1FID0gMTtcblxuLy8gR2xvYmFsIHN0YXRlXG5jb25zdCB1cGRhdGVRdWV1ZSA9IFtdO1xubGV0IG5leHRVbml0T2ZXb3JrID0gbnVsbDtcbmxldCBwZW5kaW5nQ29tbWl0ID0gbnVsbDtcblxuZnVuY3Rpb24gcmVuZGVyKGVsZW1lbnRzLCBjb250YWluZXJEb20pIHtcbiAgdXBkYXRlUXVldWUucHVzaCh7XG4gICAgZnJvbTogSE9TVF9ST09ULFxuICAgIGRvbTogY29udGFpbmVyRG9tLFxuICAgIG5ld1Byb3BzOiB7IGNoaWxkcmVuOiBlbGVtZW50cyB9XG4gIH0pO1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrKHBlcmZvcm1Xb3JrKTtcbn1cblxuZnVuY3Rpb24gc2NoZWR1bGVVcGRhdGUoaW5zdGFuY2UsIHBhcnRpYWxTdGF0ZSkge1xuICB1cGRhdGVRdWV1ZS5wdXNoKHtcbiAgICBmcm9tOiBDTEFTU19DT01QT05FTlQsXG4gICAgaW5zdGFuY2U6IGluc3RhbmNlLFxuICAgIHBhcnRpYWxTdGF0ZTogcGFydGlhbFN0YXRlXG4gIH0pO1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrKHBlcmZvcm1Xb3JrKTtcbn1cblxuZnVuY3Rpb24gcGVyZm9ybVdvcmsoZGVhZGxpbmUpIHtcbiAgd29ya0xvb3AoZGVhZGxpbmUpO1xuICBpZiAobmV4dFVuaXRPZldvcmsgfHwgdXBkYXRlUXVldWUubGVuZ3RoID4gMCkge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2socGVyZm9ybVdvcmspO1xuICB9XG59XG5cbmZ1bmN0aW9uIHdvcmtMb29wKGRlYWRsaW5lKSB7XG4gIGlmICghbmV4dFVuaXRPZldvcmspIHtcbiAgICByZXNldE5leHRVbml0T2ZXb3JrKCk7XG4gIH1cbiAgd2hpbGUgKG5leHRVbml0T2ZXb3JrICYmIGRlYWRsaW5lLnRpbWVSZW1haW5pbmcoKSA+IEVOT1VHSF9USU1FKSB7XG4gICAgbmV4dFVuaXRPZldvcmsgPSBwZXJmb3JtVW5pdE9mV29yayhuZXh0VW5pdE9mV29yayk7XG4gIH1cbiAgaWYgKHBlbmRpbmdDb21taXQpIHtcbiAgICBjb21taXRBbGxXb3JrKHBlbmRpbmdDb21taXQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc2V0TmV4dFVuaXRPZldvcmsoKSB7XG4gIGNvbnN0IHVwZGF0ZSA9IHVwZGF0ZVF1ZXVlLnNoaWZ0KCk7XG4gIGlmICghdXBkYXRlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gQ29weSB0aGUgc2V0U3RhdGUgcGFyYW1ldGVyIGZyb20gdGhlIHVwZGF0ZSBwYXlsb2FkIHRvIHRoZSBjb3JyZXNwb25kaW5nIGZpYmVyXG4gIGlmICh1cGRhdGUucGFydGlhbFN0YXRlKSB7XG4gICAgdXBkYXRlLmluc3RhbmNlLl9fZmliZXIucGFydGlhbFN0YXRlID0gdXBkYXRlLnBhcnRpYWxTdGF0ZTtcbiAgfVxuXG4gIGNvbnN0IHJvb3QgPVxuICAgIHVwZGF0ZS5mcm9tID09IEhPU1RfUk9PVFxuICAgICAgPyB1cGRhdGUuZG9tLl9yb290Q29udGFpbmVyRmliZXJcbiAgICAgIDogZ2V0Um9vdCh1cGRhdGUuaW5zdGFuY2UuX19maWJlcik7XG5cbiAgbmV4dFVuaXRPZldvcmsgPSB7XG4gICAgdGFnOiBIT1NUX1JPT1QsXG4gICAgc3RhdGVOb2RlOiB1cGRhdGUuZG9tIHx8IHJvb3Quc3RhdGVOb2RlLFxuICAgIHByb3BzOiB1cGRhdGUubmV3UHJvcHMgfHwgcm9vdC5wcm9wcyxcbiAgICBhbHRlcm5hdGU6IHJvb3RcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0Um9vdChmaWJlcikge1xuICBsZXQgbm9kZSA9IGZpYmVyO1xuICB3aGlsZSAobm9kZS5wYXJlbnQpIHtcbiAgICBub2RlID0gbm9kZS5wYXJlbnQ7XG4gIH1cbiAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIHBlcmZvcm1Vbml0T2ZXb3JrKHdpcEZpYmVyKSB7XG4gIGJlZ2luV29yayh3aXBGaWJlcik7XG4gIGlmICh3aXBGaWJlci5jaGlsZCkge1xuICAgIHJldHVybiB3aXBGaWJlci5jaGlsZDtcbiAgfVxuXG4gIC8vIE5vIGNoaWxkLCB3ZSBjYWxsIGNvbXBsZXRlV29yayB1bnRpbCB3ZSBmaW5kIGEgc2libGluZ1xuICBsZXQgdW93ID0gd2lwRmliZXI7XG4gIHdoaWxlICh1b3cpIHtcbiAgICBjb21wbGV0ZVdvcmsodW93KTtcbiAgICBpZiAodW93LnNpYmxpbmcpIHtcbiAgICAgIC8vIFNpYmxpbmcgbmVlZHMgdG8gYmVnaW5Xb3JrXG4gICAgICByZXR1cm4gdW93LnNpYmxpbmc7XG4gICAgfVxuICAgIHVvdyA9IHVvdy5wYXJlbnQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gYmVnaW5Xb3JrKHdpcEZpYmVyKSB7XG4gIGlmICh3aXBGaWJlci50YWcgPT0gQ0xBU1NfQ09NUE9ORU5UKSB7XG4gICAgdXBkYXRlQ2xhc3NDb21wb25lbnQod2lwRmliZXIpO1xuICB9IGVsc2Uge1xuICAgIHVwZGF0ZUhvc3RDb21wb25lbnQod2lwRmliZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUhvc3RDb21wb25lbnQod2lwRmliZXIpIHtcbiAgaWYgKCF3aXBGaWJlci5zdGF0ZU5vZGUpIHtcbiAgICB3aXBGaWJlci5zdGF0ZU5vZGUgPSBjcmVhdGVEb21FbGVtZW50KHdpcEZpYmVyKTtcbiAgfVxuXG4gIGNvbnN0IG5ld0NoaWxkRWxlbWVudHMgPSB3aXBGaWJlci5wcm9wcy5jaGlsZHJlbjtcbiAgcmVjb25jaWxlQ2hpbGRyZW5BcnJheSh3aXBGaWJlciwgbmV3Q2hpbGRFbGVtZW50cyk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNsYXNzQ29tcG9uZW50KHdpcEZpYmVyKSB7XG4gIGxldCBpbnN0YW5jZSA9IHdpcEZpYmVyLnN0YXRlTm9kZTtcbiAgaWYgKGluc3RhbmNlID09IG51bGwpIHtcbiAgICAvLyBDYWxsIGNsYXNzIGNvbnN0cnVjdG9yXG4gICAgaW5zdGFuY2UgPSB3aXBGaWJlci5zdGF0ZU5vZGUgPSBjcmVhdGVJbnN0YW5jZSh3aXBGaWJlcik7XG4gIH0gZWxzZSBpZiAod2lwRmliZXIucHJvcHMgPT0gaW5zdGFuY2UucHJvcHMgJiYgIXdpcEZpYmVyLnBhcnRpYWxTdGF0ZSkge1xuICAgIC8vIE5vIG5lZWQgdG8gcmVuZGVyLCBjbG9uZSBjaGlsZHJlbiBmcm9tIGxhc3QgdGltZVxuICAgIGNsb25lQ2hpbGRGaWJlcnMod2lwRmliZXIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGluc3RhbmNlLnByb3BzID0gd2lwRmliZXIucHJvcHM7XG4gIGluc3RhbmNlLnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgaW5zdGFuY2Uuc3RhdGUsIHdpcEZpYmVyLnBhcnRpYWxTdGF0ZSk7XG4gIHdpcEZpYmVyLnBhcnRpYWxTdGF0ZSA9IG51bGw7XG5cbiAgY29uc3QgbmV3Q2hpbGRFbGVtZW50cyA9IHdpcEZpYmVyLnN0YXRlTm9kZS5yZW5kZXIoKTtcbiAgcmVjb25jaWxlQ2hpbGRyZW5BcnJheSh3aXBGaWJlciwgbmV3Q2hpbGRFbGVtZW50cyk7XG59XG5cbmZ1bmN0aW9uIGFycmlmeSh2YWwpIHtcbiAgcmV0dXJuIHZhbCA9PSBudWxsID8gW10gOiBBcnJheS5pc0FycmF5KHZhbCkgPyB2YWwgOiBbdmFsXTtcbn1cblxuZnVuY3Rpb24gcmVjb25jaWxlQ2hpbGRyZW5BcnJheSh3aXBGaWJlciwgbmV3Q2hpbGRFbGVtZW50cykge1xuICBjb25zdCBlbGVtZW50cyA9IGFycmlmeShuZXdDaGlsZEVsZW1lbnRzKTtcblxuICBsZXQgaW5kZXggPSAwO1xuICBsZXQgb2xkRmliZXIgPSB3aXBGaWJlci5hbHRlcm5hdGUgPyB3aXBGaWJlci5hbHRlcm5hdGUuY2hpbGQgOiBudWxsO1xuICBsZXQgbmV3RmliZXIgPSBudWxsO1xuICB3aGlsZSAoaW5kZXggPCBlbGVtZW50cy5sZW5ndGggfHwgb2xkRmliZXIgIT0gbnVsbCkge1xuICAgIGNvbnN0IHByZXZGaWJlciA9IG5ld0ZpYmVyO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBpbmRleCA8IGVsZW1lbnRzLmxlbmd0aCAmJiBlbGVtZW50c1tpbmRleF07XG4gICAgY29uc3Qgc2FtZVR5cGUgPSBvbGRGaWJlciAmJiBlbGVtZW50ICYmIGVsZW1lbnQudHlwZSA9PSBvbGRGaWJlci50eXBlO1xuXG4gICAgaWYgKHNhbWVUeXBlKSB7XG4gICAgICBuZXdGaWJlciA9IHtcbiAgICAgICAgdHlwZTogb2xkRmliZXIudHlwZSxcbiAgICAgICAgdGFnOiBvbGRGaWJlci50YWcsXG4gICAgICAgIHN0YXRlTm9kZTogb2xkRmliZXIuc3RhdGVOb2RlLFxuICAgICAgICBwcm9wczogZWxlbWVudC5wcm9wcyxcbiAgICAgICAgcGFyZW50OiB3aXBGaWJlcixcbiAgICAgICAgYWx0ZXJuYXRlOiBvbGRGaWJlcixcbiAgICAgICAgcGFydGlhbFN0YXRlOiBvbGRGaWJlci5wYXJ0aWFsU3RhdGUsXG4gICAgICAgIGVmZmVjdFRhZzogVVBEQVRFXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50ICYmICFzYW1lVHlwZSkge1xuICAgICAgbmV3RmliZXIgPSB7XG4gICAgICAgIHR5cGU6IGVsZW1lbnQudHlwZSxcbiAgICAgICAgdGFnOlxuICAgICAgICAgIHR5cGVvZiBlbGVtZW50LnR5cGUgPT09IFwic3RyaW5nXCIgPyBIT1NUX0NPTVBPTkVOVCA6IENMQVNTX0NPTVBPTkVOVCxcbiAgICAgICAgcHJvcHM6IGVsZW1lbnQucHJvcHMsXG4gICAgICAgIHBhcmVudDogd2lwRmliZXIsXG4gICAgICAgIGVmZmVjdFRhZzogUExBQ0VNRU5UXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChvbGRGaWJlciAmJiAhc2FtZVR5cGUpIHtcbiAgICAgIG9sZEZpYmVyLmVmZmVjdFRhZyA9IERFTEVUSU9OO1xuICAgICAgd2lwRmliZXIuZWZmZWN0cyA9IHdpcEZpYmVyLmVmZmVjdHMgfHwgW107XG4gICAgICB3aXBGaWJlci5lZmZlY3RzLnB1c2gob2xkRmliZXIpO1xuICAgIH1cblxuICAgIGlmIChvbGRGaWJlcikge1xuICAgICAgb2xkRmliZXIgPSBvbGRGaWJlci5zaWJsaW5nO1xuICAgIH1cblxuICAgIGlmIChpbmRleCA9PSAwKSB7XG4gICAgICB3aXBGaWJlci5jaGlsZCA9IG5ld0ZpYmVyO1xuICAgIH0gZWxzZSBpZiAocHJldkZpYmVyICYmIGVsZW1lbnQpIHtcbiAgICAgIHByZXZGaWJlci5zaWJsaW5nID0gbmV3RmliZXI7XG4gICAgfVxuXG4gICAgaW5kZXgrKztcbiAgfVxufVxuXG5mdW5jdGlvbiBjbG9uZUNoaWxkRmliZXJzKHBhcmVudEZpYmVyKSB7XG4gIGNvbnN0IG9sZEZpYmVyID0gcGFyZW50RmliZXIuYWx0ZXJuYXRlO1xuICBpZiAoIW9sZEZpYmVyLmNoaWxkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IG9sZENoaWxkID0gb2xkRmliZXIuY2hpbGQ7XG4gIGxldCBwcmV2Q2hpbGQgPSBudWxsO1xuICB3aGlsZSAob2xkQ2hpbGQpIHtcbiAgICBjb25zdCBuZXdDaGlsZCA9IHtcbiAgICAgIHR5cGU6IG9sZENoaWxkLnR5cGUsXG4gICAgICB0YWc6IG9sZENoaWxkLnRhZyxcbiAgICAgIHN0YXRlTm9kZTogb2xkQ2hpbGQuc3RhdGVOb2RlLFxuICAgICAgcHJvcHM6IG9sZENoaWxkLnByb3BzLFxuICAgICAgcGFydGlhbFN0YXRlOiBvbGRDaGlsZC5wYXJ0aWFsU3RhdGUsXG4gICAgICBhbHRlcm5hdGU6IG9sZENoaWxkLFxuICAgICAgcGFyZW50OiBwYXJlbnRGaWJlclxuICAgIH07XG4gICAgaWYgKHByZXZDaGlsZCkge1xuICAgICAgcHJldkNoaWxkLnNpYmxpbmcgPSBuZXdDaGlsZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50RmliZXIuY2hpbGQgPSBuZXdDaGlsZDtcbiAgICB9XG4gICAgcHJldkNoaWxkID0gbmV3Q2hpbGQ7XG4gICAgb2xkQ2hpbGQgPSBvbGRDaGlsZC5zaWJsaW5nO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlV29yayhmaWJlcikge1xuICBpZiAoZmliZXIudGFnID09IENMQVNTX0NPTVBPTkVOVCkge1xuICAgIGZpYmVyLnN0YXRlTm9kZS5fX2ZpYmVyID0gZmliZXI7XG4gIH1cblxuICBpZiAoZmliZXIucGFyZW50KSB7XG4gICAgY29uc3QgY2hpbGRFZmZlY3RzID0gZmliZXIuZWZmZWN0cyB8fCBbXTtcbiAgICBjb25zdCB0aGlzRWZmZWN0ID0gZmliZXIuZWZmZWN0VGFnICE9IG51bGwgPyBbZmliZXJdIDogW107XG4gICAgY29uc3QgcGFyZW50RWZmZWN0cyA9IGZpYmVyLnBhcmVudC5lZmZlY3RzIHx8IFtdO1xuICAgIGZpYmVyLnBhcmVudC5lZmZlY3RzID0gcGFyZW50RWZmZWN0cy5jb25jYXQoY2hpbGRFZmZlY3RzLCB0aGlzRWZmZWN0KTtcbiAgfSBlbHNlIHtcbiAgICBwZW5kaW5nQ29tbWl0ID0gZmliZXI7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29tbWl0QWxsV29yayhmaWJlcikge1xuICBmaWJlci5lZmZlY3RzLmZvckVhY2goZiA9PiB7XG4gICAgY29tbWl0V29yayhmKTtcbiAgfSk7XG4gIGZpYmVyLnN0YXRlTm9kZS5fcm9vdENvbnRhaW5lckZpYmVyID0gZmliZXI7XG4gIG5leHRVbml0T2ZXb3JrID0gbnVsbDtcbiAgcGVuZGluZ0NvbW1pdCA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIGNvbW1pdFdvcmsoZmliZXIpIHtcbiAgaWYgKGZpYmVyLnRhZyA9PSBIT1NUX1JPT1QpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgZG9tUGFyZW50RmliZXIgPSBmaWJlci5wYXJlbnQ7XG4gIHdoaWxlIChkb21QYXJlbnRGaWJlci50YWcgPT0gQ0xBU1NfQ09NUE9ORU5UKSB7XG4gICAgZG9tUGFyZW50RmliZXIgPSBkb21QYXJlbnRGaWJlci5wYXJlbnQ7XG4gIH1cbiAgY29uc3QgZG9tUGFyZW50ID0gZG9tUGFyZW50RmliZXIuc3RhdGVOb2RlO1xuXG4gIGlmIChmaWJlci5lZmZlY3RUYWcgPT0gUExBQ0VNRU5UICYmIGZpYmVyLnRhZyA9PSBIT1NUX0NPTVBPTkVOVCkge1xuICAgIGRvbVBhcmVudC5hcHBlbmRDaGlsZChmaWJlci5zdGF0ZU5vZGUpO1xuICB9IGVsc2UgaWYgKGZpYmVyLmVmZmVjdFRhZyA9PSBVUERBVEUpIHtcbiAgICB1cGRhdGVEb21Qcm9wZXJ0aWVzKGZpYmVyLnN0YXRlTm9kZSwgZmliZXIuYWx0ZXJuYXRlLnByb3BzLCBmaWJlci5wcm9wcyk7XG4gIH0gZWxzZSBpZiAoZmliZXIuZWZmZWN0VGFnID09IERFTEVUSU9OKSB7XG4gICAgY29tbWl0RGVsZXRpb24oZmliZXIsIGRvbVBhcmVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29tbWl0RGVsZXRpb24oZmliZXIsIGRvbVBhcmVudCkge1xuICBsZXQgbm9kZSA9IGZpYmVyO1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIGlmIChub2RlLnRhZyA9PSBDTEFTU19DT01QT05FTlQpIHtcbiAgICAgIG5vZGUgPSBub2RlLmNoaWxkO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGRvbVBhcmVudC5yZW1vdmVDaGlsZChub2RlLnN0YXRlTm9kZSk7XG4gICAgd2hpbGUgKG5vZGUgIT0gZmliZXIgJiYgIW5vZGUuc2libGluZykge1xuICAgICAgbm9kZSA9IG5vZGUucGFyZW50O1xuICAgIH1cbiAgICBpZiAobm9kZSA9PSBmaWJlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBub2RlID0gbm9kZS5zaWJsaW5nO1xuICB9XG59XG5cbmNsYXNzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzIHx8IHt9O1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLnN0YXRlIHx8IHt9O1xuICB9XG5cbiAgc2V0U3RhdGUocGFydGlhbFN0YXRlKSB7XG4gICAgc2NoZWR1bGVVcGRhdGUodGhpcywgcGFydGlhbFN0YXRlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShmaWJlcikge1xuICBjb25zdCBpbnN0YW5jZSA9IG5ldyBmaWJlci50eXBlKGZpYmVyLnByb3BzKTtcbiAgaW5zdGFuY2UuX19maWJlciA9IGZpYmVyO1xuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbnZhciBkaWRhY3QgPSB7XG4gIGNyZWF0ZUVsZW1lbnQsXG4gIENvbXBvbmVudCxcbiAgcmVuZGVyXG59O1xuXG5leHBvcnQgeyBjcmVhdGVFbGVtZW50LCBDb21wb25lbnQsIHJlbmRlciB9O2V4cG9ydCBkZWZhdWx0IGRpZGFjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RpZGFjdC9kaXN0L2RpZGFjdC5lcy5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAyIl0sInNvdXJjZVJvb3QiOiIifQ==