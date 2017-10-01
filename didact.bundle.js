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
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ({

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.using = using;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/** @jsx Reactish.createElement */

function using(Reactish) {
  var Cell = function (_Reactish$Component) {
    _inherits(Cell, _Reactish$Component);

    function Cell() {
      _classCallCheck(this, Cell);

      return _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).apply(this, arguments));
    }

    _createClass(Cell, [{
      key: "render",
      value: function render() {
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
    }]);

    return Cell;
  }(Reactish.Component);

  var Demo = function (_Reactish$Component2) {
    _inherits(Demo, _Reactish$Component2);

    function Demo(props) {
      _classCallCheck(this, Demo);

      var _this2 = _possibleConstructorReturn(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).call(this, props));

      _this2.state = {
        elapsed: 0, // the number shown on each Cell
        size: 6, // the size of a row
        period: 1000, // the time (in ms) between updates
        delay: 3 // the delay (in ms) for the render of each Cell
      };
      _this2.changeDelay = _this2.changeDelay.bind(_this2);
      _this2.changePeriod = _this2.changePeriod.bind(_this2);
      _this2.tick = _this2.tick.bind(_this2);
      _this2.tick();
      return _this2;
    }

    _createClass(Demo, [{
      key: "tick",
      value: function tick() {
        var _this3 = this;

        setTimeout(function () {
          _this3.setState(function (s) {
            return { elapsed: s.elapsed + 1 };
          });
          _this3.tick();
        }, this.state.period);
      }
    }, {
      key: "changeDelay",
      value: function changeDelay(e) {
        this.setState({ delay: +e.target.value });
      }
    }, {
      key: "changePeriod",
      value: function changePeriod(e) {
        this.setState({ period: +e.target.value });
      }
    }, {
      key: "render",
      value: function render() {
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
              "So, rendering the full table keeps the main thread busy for",
              " ",
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
    }]);

    return Demo;
  }(Reactish.Component);

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

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createElement = createElement;
var TEXT_ELEMENT = exports.TEXT_ELEMENT = "TEXT ELEMENT";

function createElement(type, config) {
  var _ref;

  var props = Object.assign({}, config);

  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var hasChildren = args.length > 0;
  var rawChildren = hasChildren ? (_ref = []).concat.apply(_ref, args) : [];
  props.children = rawChildren.filter(function (c) {
    return c != null && c !== false;
  }).map(function (c) {
    return c instanceof Object ? c : createTextElement(c);
  });
  return { type: type, props: props };
}

function createTextElement(value) {
  return createElement(TEXT_ELEMENT, { nodeValue: value });
}

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.createInstance = createInstance;

var _fiberReconciler = __webpack_require__(35);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = exports.Component = function () {
  function Component(props) {
    _classCallCheck(this, Component);

    this.props = props || {};
    this.state = this.state || {};
  }

  _createClass(Component, [{
    key: "setState",
    value: function setState(partialState) {
      (0, _fiberReconciler.scheduleUpdate)(this.__fiber, partialState);
    }
  }]);

  return Component;
}();

function createInstance(fiber) {
  var instance = new fiber.type(fiber.pendingProps);
  instance.__fiber = fiber;
  return instance;
}

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;
exports.scheduleUpdate = scheduleUpdate;

var _domUtils = __webpack_require__(40);

var _element2 = __webpack_require__(33);

var _component = __webpack_require__(34);

var PLACEMENT = 1;
var DELETION = 2;
var UPDATE = 3;

// kinds
var HOST_COMPONENT = "host";
var CLASS_COMPONENT = "class";
var HOST_ROOT = "root";

var timeHeuristicForUnitOfWork = 1;

var nextUnitOfWork = null;
var updateQueue = [];
var pendingCommit = null;

function render(elements, containerDom) {
  // console.log("Queue render", updateQueue.length);
  updateQueue.push({
    kind: HOST_ROOT,
    stateNode: containerDom,
    pendingProps: { children: arrify(elements) }
  });
  requestIdleCallback(performWork);
}

function scheduleUpdate(fiber, partialState) {
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

  while (nextUnitOfWork != null && deadline.timeRemaining() > timeHeuristicForUnitOfWork) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
  }

  if (pendingCommit) {
    commitAllWork(pendingCommit);
  }
}

function resetNextUnitOfWork() {
  if (!nextUnitOfWork && updateQueue.length) {
    var update = updateQueue.shift();
    if (update.kind === HOST_ROOT) {
      nextUnitOfWork = {
        stateNode: update.stateNode,
        kind: HOST_ROOT,
        pendingProps: update.pendingProps,
        alternate: update.stateNode._rootContainerFiber
      };
    } else {
      var node = update.fiber;
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
    var uow = fiber;
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
  var elements = [];
  if (parentFiber.kind == CLASS_COMPONENT) {
    if (parentFiber.stateNode == null) {
      parentFiber.stateNode = (0, _component.createInstance)(parentFiber);
      elements = parentFiber.stateNode.render();
    } else {
      var instance = parentFiber.stateNode;
      var shouldUpdate = parentFiber.pendingProps != instance.props || parentFiber.partialState;
      if (shouldUpdate) {
        instance.props = parentFiber.pendingProps;
        var partialState = getStateFromUpdate(instance, parentFiber.partialState);
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
  var index = 0;
  var oldFiber = parentFiber.alternate ? parentFiber.alternate.child : null;
  var newFiber = null;
  while (index < elements.length || oldFiber != null) {
    if (index < elements.length && oldFiber != null && elements[index].type == oldFiber.type) {
      var element = elements[index];
      var prevFiber = newFiber;
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
      var _element = elements[index];
      var _prevFiber = newFiber;
      newFiber = {
        type: _element.type,
        kind: typeof _element.type === "string" ? HOST_COMPONENT : CLASS_COMPONENT,
        pendingProps: _element.props,
        parent: parentFiber
      };
      if (index == 0) {
        parentFiber.child = newFiber;
      } else {
        _prevFiber.sibling = newFiber;
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
  var oldFiber = parentFiber.alternate;
  if (oldFiber.child == null) {
    return;
  }

  var oldChild = oldFiber.child;
  var prevChild = null;
  while (oldChild != null) {
    var newChild = {
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
        var isTextElement = fiber.type === _element2.TEXT_ELEMENT;
        var dom = isTextElement ? document.createTextNode("") : document.createElement(fiber.type);
        (0, _domUtils.updateDomProperties)(dom, [], fiber.pendingProps);
        fiber.stateNode = dom;
      }
      break;
    case CLASS_COMPONENT:
      fiber.stateNode.__fiber = fiber;
      break;
  }
  if (fiber.parent) {
    var childEffects = fiber.effects || [];
    var thisEffect = fiber.effect != null ? [fiber] : [];
    var parentEffects = fiber.parent.effects || [];
    fiber.parent.effects = parentEffects.concat(childEffects, thisEffect);
  } else {
    pendingCommit = fiber;
  }
}

function commitAllWork(fiber) {
  fiber.effects.forEach(function (f) {
    commitWork(f);
  });
  fiber.stateNode._rootContainerFiber = fiber;
  nextUnitOfWork = null;
  pendingCommit = null;
}

function commitWork(fiber) {
  if (fiber.kind != HOST_ROOT) {
    var domParentFiber = fiber.parent;
    while (domParentFiber.kind == CLASS_COMPONENT) {
      domParentFiber = domParentFiber.parent;
    }
    switch (fiber.effect) {
      case UPDATE:
        // console.log("update", fiber.stateNode);
        (0, _domUtils.updateDomProperties)(fiber.stateNode, fiber.alternate.pendingProps, fiber.pendingProps);
        break;
      case PLACEMENT:
        if (fiber.kind == HOST_COMPONENT) {
          domParentFiber.stateNode.appendChild(fiber.stateNode);
        }
        // console.log("place", fiber.stateNode);
        break;
      case DELETION:
        // console.log("delete", fiber.stateNode);
        var node = fiber;
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
    var updateFn = partialState;
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

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _didact = __webpack_require__(39);

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

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = exports.Component = exports.createElement = undefined;

var _element = __webpack_require__(33);

var _component = __webpack_require__(34);

var _fiberReconciler = __webpack_require__(35);

exports.default = {
  createElement: _element.createElement,
  Component: _component.Component,
  render: _fiberReconciler.render
};
exports.createElement = _element.createElement;
exports.Component = _component.Component;
exports.render = _fiberReconciler.render;

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDomProperties = updateDomProperties;
var isEvent = function isEvent(name) {
  return name.startsWith("on");
};
var isAttribute = function isAttribute(name) {
  return !isEvent(name) && name != "children" && name != "style";
};
var isNew = function isNew(prev, next) {
  return function (key) {
    return prev[key] !== next[key];
  };
};
var isGone = function isGone(prev, next) {
  return function (key) {
    return !(key in next);
  };
};

function updateDomProperties(dom, prevProps, nextProps) {
  // Remove event listeners
  Object.keys(prevProps).filter(isEvent).filter(function (key) {
    return !(key in nextProps) || isNew(prevProps, nextProps)(key);
  }).forEach(function (name) {
    var eventType = name.toLowerCase().substring(2);
    dom.removeEventListener(eventType, prevProps[name]);
  });

  // Remove attributes
  Object.keys(prevProps).filter(isAttribute).filter(isGone(prevProps, nextProps)).forEach(function (name) {
    dom[name] = null;
  });

  // Set attributes
  Object.keys(nextProps).filter(isAttribute).filter(isNew(prevProps, nextProps)).forEach(function (name) {
    // console.log("setting", name);
    dom[name] = nextProps[name];
  });

  // Set style
  prevProps.style = prevProps.style || {};
  nextProps.style = nextProps.style || {};
  Object.keys(nextProps.style).filter(isNew(prevProps.style, nextProps.style)).forEach(function (key) {
    dom.style[key] = nextProps.style[key];
  });
  Object.keys(prevProps.style).filter(isGone(prevProps.style, nextProps.style)).forEach(function (key) {
    dom.style[key] = "";
  });

  // Add event listeners
  Object.keys(nextProps).filter(isEvent).filter(isNew(prevProps, nextProps)).forEach(function (name) {
    var eventType = name.toLowerCase().substring(2);
    dom.addEventListener(eventType, nextProps[name]);
  });
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmEzODBlMTE4ZTc3OWY3MzIwMTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlbW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWVkaW5nLXRocmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlkYWN0L2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpZGFjdC9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpZGFjdC9maWJlci1yZWNvbmNpbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWRhY3QtZGVtby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlkYWN0L2RpZGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlkYWN0L2RvbS11dGlscy5qcyJdLCJuYW1lcyI6WyJ1c2luZyIsIlJlYWN0aXNoIiwiQ2VsbCIsInByb3BzIiwidGV4dCIsImRlbGF5Iiwid2FpdCIsIkNvbXBvbmVudCIsIkRlbW8iLCJzdGF0ZSIsImVsYXBzZWQiLCJzaXplIiwicGVyaW9kIiwiY2hhbmdlRGVsYXkiLCJiaW5kIiwiY2hhbmdlUGVyaW9kIiwidGljayIsInNldFRpbWVvdXQiLCJzZXRTdGF0ZSIsInMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJhcnJheSIsIkFycmF5IiwiZmlsbCIsInJvdyIsIm1hcCIsIngiLCJrZXkiLCJyb3dzIiwiZGlzcGxheSIsIk1hdGgiLCJyb3VuZCIsInRvRml4ZWQiLCJtcyIsInN0YXJ0IiwicGVyZm9ybWFuY2UiLCJub3ciLCJmcmFtZXMiLCJjb2xXaWR0aCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsInpJbmRleCIsImkiLCJmYyIsImJhY2tncm91bmQiLCJ3aWR0aCIsInZlcnRpY2FsQWxpZ24iLCJvcGFjaXR5IiwiYXBwZW5kQ2hpbGQiLCJoZWlnaHQiLCJsYXN0IiwicmVmcmVzaCIsImRpZmYiLCJjaGlsZE5vZGVzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYm9keSIsIlRFWFRfRUxFTUVOVCIsInR5cGUiLCJjb25maWciLCJPYmplY3QiLCJhc3NpZ24iLCJhcmdzIiwiaGFzQ2hpbGRyZW4iLCJsZW5ndGgiLCJyYXdDaGlsZHJlbiIsImNvbmNhdCIsImNoaWxkcmVuIiwiZmlsdGVyIiwiYyIsImNyZWF0ZVRleHRFbGVtZW50Iiwibm9kZVZhbHVlIiwiY3JlYXRlSW5zdGFuY2UiLCJwYXJ0aWFsU3RhdGUiLCJfX2ZpYmVyIiwiZmliZXIiLCJpbnN0YW5jZSIsInBlbmRpbmdQcm9wcyIsInJlbmRlciIsInNjaGVkdWxlVXBkYXRlIiwiUExBQ0VNRU5UIiwiREVMRVRJT04iLCJVUERBVEUiLCJIT1NUX0NPTVBPTkVOVCIsIkNMQVNTX0NPTVBPTkVOVCIsIkhPU1RfUk9PVCIsInRpbWVIZXVyaXN0aWNGb3JVbml0T2ZXb3JrIiwibmV4dFVuaXRPZldvcmsiLCJ1cGRhdGVRdWV1ZSIsInBlbmRpbmdDb21taXQiLCJlbGVtZW50cyIsImNvbnRhaW5lckRvbSIsInB1c2giLCJraW5kIiwic3RhdGVOb2RlIiwiYXJyaWZ5IiwicmVxdWVzdElkbGVDYWxsYmFjayIsInBlcmZvcm1Xb3JrIiwiZGVhZGxpbmUiLCJ3b3JrTG9vcCIsInJlc2V0TmV4dFVuaXRPZldvcmsiLCJ0aW1lUmVtYWluaW5nIiwicGVyZm9ybVVuaXRPZldvcmsiLCJjb21taXRBbGxXb3JrIiwidXBkYXRlIiwic2hpZnQiLCJhbHRlcm5hdGUiLCJfcm9vdENvbnRhaW5lckZpYmVyIiwibm9kZSIsInBhcmVudCIsImJlZ2luV29yayIsImNoaWxkIiwidW93IiwiY29tcGxldGVXb3JrIiwic2libGluZyIsInBhcmVudEZpYmVyIiwic2hvdWxkVXBkYXRlIiwiZ2V0U3RhdGVGcm9tVXBkYXRlIiwiY2xvbmVDaGlsZEZpYmVycyIsImluZGV4Iiwib2xkRmliZXIiLCJuZXdGaWJlciIsImVsZW1lbnQiLCJwcmV2RmliZXIiLCJlZmZlY3QiLCJlZmZlY3RzIiwib2xkQ2hpbGQiLCJwcmV2Q2hpbGQiLCJuZXdDaGlsZCIsImlzVGV4dEVsZW1lbnQiLCJkb20iLCJjcmVhdGVUZXh0Tm9kZSIsImNoaWxkRWZmZWN0cyIsInRoaXNFZmZlY3QiLCJwYXJlbnRFZmZlY3RzIiwiZm9yRWFjaCIsImNvbW1pdFdvcmsiLCJmIiwiZG9tUGFyZW50RmliZXIiLCJyZW1vdmVDaGlsZCIsInVwZGF0ZUZuIiwiY2FsbCIsInZhbCIsInVuZGVmaW5lZCIsImlzQXJyYXkiLCJnZXRFbGVtZW50QnlJZCIsInVwZGF0ZURvbVByb3BlcnRpZXMiLCJpc0V2ZW50IiwibmFtZSIsInN0YXJ0c1dpdGgiLCJpc0F0dHJpYnV0ZSIsImlzTmV3IiwicHJldiIsIm5leHQiLCJpc0dvbmUiLCJwcmV2UHJvcHMiLCJuZXh0UHJvcHMiLCJrZXlzIiwiZXZlbnRUeXBlIiwidG9Mb3dlckNhc2UiLCJzdWJzdHJpbmciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztRQzNEZ0JBLEssR0FBQUEsSzs7Ozs7Ozs7QUFGaEI7O0FBRU8sU0FBU0EsS0FBVCxDQUFlQyxRQUFmLEVBQXlCO0FBQUEsTUFDeEJDLElBRHdCO0FBQUE7O0FBQUE7QUFB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QmYsR0FBaEIsQ0FBakI7QUFDRCxHQUpIO0FBS0FxQyxTQUFPaUcsSUFBUCxDQUFZRixVQUFVckgsS0FBdEIsRUFDRzhCLE1BREgsQ0FDVXNGLE9BQU9DLFVBQVVySCxLQUFqQixFQUF3QnNILFVBQVV0SCxLQUFsQyxDQURWLEVBRUdpRyxPQUZILENBRVcsZUFBTztBQUNkTCxRQUFJNUYsS0FBSixDQUFVZixHQUFWLElBQWlCLEVBQWpCO0FBQ0QsR0FKSDs7QUFNQTtBQUNBcUMsU0FBT2lHLElBQVAsQ0FBWUQsU0FBWixFQUNHeEYsTUFESCxDQUNVK0UsT0FEVixFQUVHL0UsTUFGSCxDQUVVbUYsTUFBTUksU0FBTixFQUFpQkMsU0FBakIsQ0FGVixFQUdHckIsT0FISCxDQUdXLGdCQUFRO0FBQ2YsUUFBTXVCLFlBQVlWLEtBQUtXLFdBQUwsR0FBbUJDLFNBQW5CLENBQTZCLENBQTdCLENBQWxCO0FBQ0E5QixRQUFJZ0MsZ0JBQUosQ0FBcUJKLFNBQXJCLEVBQWdDRixVQUFVUixJQUFWLENBQWhDO0FBQ0QsR0FOSDtBQU9ELEMiLCJmaWxlIjoiZGlkYWN0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDM4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2YTM4MGUxMThlNzc5ZjczMjAxNyIsIi8qKiBAanN4IFJlYWN0aXNoLmNyZWF0ZUVsZW1lbnQgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHVzaW5nKFJlYWN0aXNoKSB7XG4gIGNsYXNzIENlbGwgZXh0ZW5kcyBSZWFjdGlzaC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHsgdGV4dCwgZGVsYXkgfSA9IHRoaXMucHJvcHM7XG4gICAgICB3YWl0KGRlbGF5KTtcbiAgICAgIHJldHVybiA8dGQ+e3RleHR9PC90ZD47XG4gICAgfVxuICB9XG5cbiAgY2xhc3MgRGVtbyBleHRlbmRzIFJlYWN0aXNoLkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIGVsYXBzZWQ6IDAsIC8vIHRoZSBudW1iZXIgc2hvd24gb24gZWFjaCBDZWxsXG4gICAgICAgIHNpemU6IDYsIC8vIHRoZSBzaXplIG9mIGEgcm93XG4gICAgICAgIHBlcmlvZDogMTAwMCwgLy8gdGhlIHRpbWUgKGluIG1zKSBiZXR3ZWVuIHVwZGF0ZXNcbiAgICAgICAgZGVsYXk6IDMgLy8gdGhlIGRlbGF5IChpbiBtcykgZm9yIHRoZSByZW5kZXIgb2YgZWFjaCBDZWxsXG4gICAgICB9O1xuICAgICAgdGhpcy5jaGFuZ2VEZWxheSA9IHRoaXMuY2hhbmdlRGVsYXkuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuY2hhbmdlUGVyaW9kID0gdGhpcy5jaGFuZ2VQZXJpb2QuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMudGljayA9IHRoaXMudGljay5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy50aWNrKCk7XG4gICAgfVxuICAgIHRpY2soKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzID0+ICh7IGVsYXBzZWQ6IHMuZWxhcHNlZCArIDEgfSkpO1xuICAgICAgICB0aGlzLnRpY2soKTtcbiAgICAgIH0sIHRoaXMuc3RhdGUucGVyaW9kKTtcbiAgICB9XG4gICAgY2hhbmdlRGVsYXkoZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRlbGF5OiArZS50YXJnZXQudmFsdWUgfSk7XG4gICAgfVxuICAgIGNoYW5nZVBlcmlvZChlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcGVyaW9kOiArZS50YXJnZXQudmFsdWUgfSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHsgZWxhcHNlZCwgc2l6ZSwgZGVsYXksIHBlcmlvZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGNvbnN0IHRleHQgPSBlbGFwc2VkICUgMTA7XG4gICAgICBjb25zdCBhcnJheSA9IEFycmF5KHNpemUpLmZpbGwoKTtcbiAgICAgIGNvbnN0IHJvdyA9IGFycmF5Lm1hcCgoeCwga2V5KSA9PiA8Q2VsbCB7Li4ueyBrZXksIHRleHQsIGRlbGF5IH19IC8+KTtcbiAgICAgIGNvbnN0IHJvd3MgPSBhcnJheS5tYXAoKHgsIGtleSkgPT4gPHRyIGtleT17a2V5fT57cm93fTwvdHI+KTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgPHRib2R5Pntyb3dzfTwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFRoZSB0YWJsZSByZWZyZXNoZXMgZXZlcnkgPGI+e01hdGgucm91bmQocGVyaW9kKX08L2I+bXNcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBpZD1cInBlcmlvZC1yYW5nZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgIG1pbj1cIjIwMFwiXG4gICAgICAgICAgICAgIG1heD1cIjEwMDBcIlxuICAgICAgICAgICAgICBzdGVwPVwiYW55XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3BlcmlvZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlUGVyaW9kfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBUaGUgcmVuZGVyIG9mIGVhY2ggY2VsbCB0YWtlcyA8Yj57ZGVsYXkudG9GaXhlZCgyKX08L2I+bXNcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBpZD1cImRlbGF5LXJhbmdlXCJcbiAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgICAgIG1heD1cIjEwXCJcbiAgICAgICAgICAgICAgc3RlcD1cImFueVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtkZWxheX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlRGVsYXl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFNvLCByZW5kZXJpbmcgdGhlIGZ1bGwgdGFibGUga2VlcHMgdGhlIG1haW4gdGhyZWFkIGJ1c3kgZm9ye1wiIFwifVxuICAgICAgICAgICAgICA8Yj57KGRlbGF5ICogc2l6ZSAqIHNpemUpLnRvRml4ZWQoMil9PC9iPm1zXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gRGVtbztcbn1cblxuZnVuY3Rpb24gd2FpdChtcykge1xuICBjb25zdCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICB3aGlsZSAocGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydCA8IG1zKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kZW1vLmpzIiwiKGZ1bmN0aW9uKGZyYW1lcyA9IDE1MCwgY29sV2lkdGggPSBcIjJweFwiKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgY29udGFpbmVyLnN0eWxlLnJpZ2h0ID0gXCIxMHB4XCI7XG4gIGNvbnRhaW5lci5zdHlsZS50b3AgPSBcIjBcIjtcbiAgY29udGFpbmVyLnN0eWxlLnpJbmRleCA9IFwiOTk5OTlcIjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcmFtZXM7IGkrKykge1xuICAgIGNvbnN0IGZjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmYy5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZWRcIjtcbiAgICBmYy5zdHlsZS53aWR0aCA9IGNvbFdpZHRoO1xuICAgIGZjLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgIGZjLnN0eWxlLnZlcnRpY2FsQWxpZ24gPSBcInRvcFwiO1xuICAgIGZjLnN0eWxlLm9wYWNpdHkgPSBcIjAuOFwiO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmYyk7XG4gICAgZmMuc3R5bGUuaGVpZ2h0ID0gXCIxNnB4XCI7XG4gIH1cbiAgbGV0IGxhc3QgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgbGV0IGkgPSAwO1xuICBmdW5jdGlvbiByZWZyZXNoKCkge1xuICAgIGNvbnN0IG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIGNvbnN0IGRpZmYgPSBub3cgLSBsYXN0O1xuICAgIGxhc3QgPSBub3c7XG4gICAgY29udGFpbmVyLmNoaWxkTm9kZXNbaSAlIGZyYW1lc10uc3R5bGUuYmFja2dyb3VuZCA9IFwicmVkXCI7XG4gICAgaSsrO1xuICAgIGNvbnRhaW5lci5jaGlsZE5vZGVzW2kgJSBmcmFtZXNdLnN0eWxlLmJhY2tncm91bmQgPSBcImJsYWNrXCI7XG4gICAgY29udGFpbmVyLmNoaWxkTm9kZXNbaSAlIGZyYW1lc10uc3R5bGUuaGVpZ2h0ID0gZGlmZiArIFwicHhcIjtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVmcmVzaCk7XG4gIH1cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlZnJlc2gpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JsZWVkaW5nLXRocmVhZC5qcyIsImV4cG9ydCBjb25zdCBURVhUX0VMRU1FTlQgPSBcIlRFWFQgRUxFTUVOVFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBjb25maWcsIC4uLmFyZ3MpIHtcbiAgY29uc3QgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWcpO1xuICBjb25zdCBoYXNDaGlsZHJlbiA9IGFyZ3MubGVuZ3RoID4gMDtcbiAgY29uc3QgcmF3Q2hpbGRyZW4gPSBoYXNDaGlsZHJlbiA/IFtdLmNvbmNhdCguLi5hcmdzKSA6IFtdO1xuICBwcm9wcy5jaGlsZHJlbiA9IHJhd0NoaWxkcmVuXG4gICAgLmZpbHRlcihjID0+IGMgIT0gbnVsbCAmJiBjICE9PSBmYWxzZSlcbiAgICAubWFwKGMgPT4gYyBpbnN0YW5jZW9mIE9iamVjdCA/IGMgOiBjcmVhdGVUZXh0RWxlbWVudChjKSk7XG4gIHJldHVybiB7IHR5cGUsIHByb3BzIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHRFbGVtZW50KHZhbHVlKSB7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFRFWFRfRUxFTUVOVCwgeyBub2RlVmFsdWU6IHZhbHVlIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpZGFjdC9lbGVtZW50LmpzIiwiaW1wb3J0IHsgc2NoZWR1bGVVcGRhdGUgfSBmcm9tIFwiLi9maWJlci1yZWNvbmNpbGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMucHJvcHMgPSBwcm9wcyB8fCB7fTtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5zdGF0ZSB8fCB7fTtcbiAgfVxuXG4gIHNldFN0YXRlKHBhcnRpYWxTdGF0ZSkge1xuICAgIHNjaGVkdWxlVXBkYXRlKHRoaXMuX19maWJlciwgcGFydGlhbFN0YXRlKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZmliZXIpIHtcbiAgY29uc3QgaW5zdGFuY2UgPSBuZXcgZmliZXIudHlwZShmaWJlci5wZW5kaW5nUHJvcHMpO1xuICBpbnN0YW5jZS5fX2ZpYmVyID0gZmliZXI7XG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaWRhY3QvY29tcG9uZW50LmpzIiwiaW1wb3J0IHsgdXBkYXRlRG9tUHJvcGVydGllcyB9IGZyb20gXCIuL2RvbS11dGlsc1wiO1xuaW1wb3J0IHsgVEVYVF9FTEVNRU5UIH0gZnJvbSBcIi4vZWxlbWVudFwiO1xuaW1wb3J0IHsgY3JlYXRlSW5zdGFuY2UgfSBmcm9tIFwiLi9jb21wb25lbnRcIjtcblxuY29uc3QgUExBQ0VNRU5UID0gMTtcbmNvbnN0IERFTEVUSU9OID0gMjtcbmNvbnN0IFVQREFURSA9IDM7XG5cbi8vIGtpbmRzXG5jb25zdCBIT1NUX0NPTVBPTkVOVCA9IFwiaG9zdFwiO1xuY29uc3QgQ0xBU1NfQ09NUE9ORU5UID0gXCJjbGFzc1wiO1xuY29uc3QgSE9TVF9ST09UID0gXCJyb290XCI7XG5cbmNvbnN0IHRpbWVIZXVyaXN0aWNGb3JVbml0T2ZXb3JrID0gMTtcblxubGV0IG5leHRVbml0T2ZXb3JrID0gbnVsbDtcbmxldCB1cGRhdGVRdWV1ZSA9IFtdO1xubGV0IHBlbmRpbmdDb21taXQgPSBudWxsO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKGVsZW1lbnRzLCBjb250YWluZXJEb20pIHtcbiAgLy8gY29uc29sZS5sb2coXCJRdWV1ZSByZW5kZXJcIiwgdXBkYXRlUXVldWUubGVuZ3RoKTtcbiAgdXBkYXRlUXVldWUucHVzaCh7XG4gICAga2luZDogSE9TVF9ST09ULFxuICAgIHN0YXRlTm9kZTogY29udGFpbmVyRG9tLFxuICAgIHBlbmRpbmdQcm9wczogeyBjaGlsZHJlbjogYXJyaWZ5KGVsZW1lbnRzKSB9XG4gIH0pO1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrKHBlcmZvcm1Xb3JrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlVXBkYXRlKGZpYmVyLCBwYXJ0aWFsU3RhdGUpIHtcbiAgLy8gY29uc29sZS5sb2coXCJRdWV1ZSB1cGRhdGVcIiwgdXBkYXRlUXVldWUubGVuZ3RoKTtcbiAgdXBkYXRlUXVldWUucHVzaCh7XG4gICAga2luZDogQ0xBU1NfQ09NUE9ORU5ULFxuICAgIGZpYmVyOiBmaWJlcixcbiAgICBwYXJ0aWFsU3RhdGU6IHBhcnRpYWxTdGF0ZVxuICB9KTtcbiAgcmVxdWVzdElkbGVDYWxsYmFjayhwZXJmb3JtV29yayk7XG59XG5cbmZ1bmN0aW9uIHBlcmZvcm1Xb3JrKGRlYWRsaW5lKSB7XG4gIHdvcmtMb29wKGRlYWRsaW5lKTtcbiAgaWYgKG5leHRVbml0T2ZXb3JrICE9IG51bGwgfHwgdXBkYXRlUXVldWUubGVuZ3RoID4gMCkge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2socGVyZm9ybVdvcmspO1xuICB9XG59XG5cbmZ1bmN0aW9uIHdvcmtMb29wKGRlYWRsaW5lKSB7XG4gIGlmIChuZXh0VW5pdE9mV29yayA9PSBudWxsKSB7XG4gICAgcmVzZXROZXh0VW5pdE9mV29yaygpO1xuICB9XG5cbiAgd2hpbGUgKFxuICAgIG5leHRVbml0T2ZXb3JrICE9IG51bGwgJiZcbiAgICBkZWFkbGluZS50aW1lUmVtYWluaW5nKCkgPiB0aW1lSGV1cmlzdGljRm9yVW5pdE9mV29ya1xuICApIHtcbiAgICBuZXh0VW5pdE9mV29yayA9IHBlcmZvcm1Vbml0T2ZXb3JrKG5leHRVbml0T2ZXb3JrKTtcbiAgfVxuXG4gIGlmIChwZW5kaW5nQ29tbWl0KSB7XG4gICAgY29tbWl0QWxsV29yayhwZW5kaW5nQ29tbWl0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNldE5leHRVbml0T2ZXb3JrKCkge1xuICBpZiAoIW5leHRVbml0T2ZXb3JrICYmIHVwZGF0ZVF1ZXVlLmxlbmd0aCkge1xuICAgIGNvbnN0IHVwZGF0ZSA9IHVwZGF0ZVF1ZXVlLnNoaWZ0KCk7XG4gICAgaWYgKHVwZGF0ZS5raW5kID09PSBIT1NUX1JPT1QpIHtcbiAgICAgIG5leHRVbml0T2ZXb3JrID0ge1xuICAgICAgICBzdGF0ZU5vZGU6IHVwZGF0ZS5zdGF0ZU5vZGUsXG4gICAgICAgIGtpbmQ6IEhPU1RfUk9PVCxcbiAgICAgICAgcGVuZGluZ1Byb3BzOiB1cGRhdGUucGVuZGluZ1Byb3BzLFxuICAgICAgICBhbHRlcm5hdGU6IHVwZGF0ZS5zdGF0ZU5vZGUuX3Jvb3RDb250YWluZXJGaWJlclxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG5vZGUgPSB1cGRhdGUuZmliZXI7XG4gICAgICB1cGRhdGUuZmliZXIucGFydGlhbFN0YXRlID0gdXBkYXRlLnBhcnRpYWxTdGF0ZTtcbiAgICAgIHdoaWxlIChub2RlLnBhcmVudCAhPSBudWxsKSB7XG4gICAgICAgIG5vZGUgPSBub2RlLnBhcmVudDtcbiAgICAgIH1cbiAgICAgIG5leHRVbml0T2ZXb3JrID0ge1xuICAgICAgICBzdGF0ZU5vZGU6IG5vZGUuc3RhdGVOb2RlLFxuICAgICAgICBraW5kOiBIT1NUX1JPT1QsXG4gICAgICAgIHBlbmRpbmdQcm9wczogbm9kZS5wZW5kaW5nUHJvcHMsXG4gICAgICAgIGFsdGVybmF0ZTogbm9kZVxuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcGVyZm9ybVVuaXRPZldvcmsoZmliZXIpIHtcbiAgYmVnaW5Xb3JrKGZpYmVyKTtcbiAgaWYgKGZpYmVyLmNoaWxkICE9IG51bGwpIHtcbiAgICByZXR1cm4gZmliZXIuY2hpbGQ7XG4gIH0gZWxzZSB7XG4gICAgbGV0IHVvdyA9IGZpYmVyO1xuICAgIHdoaWxlICh1b3cgIT0gbnVsbCkge1xuICAgICAgY29tcGxldGVXb3JrKHVvdyk7XG4gICAgICBpZiAodW93LnNpYmxpbmcpIHtcbiAgICAgICAgcmV0dXJuIHVvdy5zaWJsaW5nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdW93ID0gdW93LnBhcmVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYmVnaW5Xb3JrKHBhcmVudEZpYmVyKSB7XG4gIGxldCBlbGVtZW50cyA9IFtdO1xuICBpZiAocGFyZW50RmliZXIua2luZCA9PSBDTEFTU19DT01QT05FTlQpIHtcbiAgICBpZiAocGFyZW50RmliZXIuc3RhdGVOb2RlID09IG51bGwpIHtcbiAgICAgIHBhcmVudEZpYmVyLnN0YXRlTm9kZSA9IGNyZWF0ZUluc3RhbmNlKHBhcmVudEZpYmVyKTtcbiAgICAgIGVsZW1lbnRzID0gcGFyZW50RmliZXIuc3RhdGVOb2RlLnJlbmRlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHBhcmVudEZpYmVyLnN0YXRlTm9kZTtcbiAgICAgIGNvbnN0IHNob3VsZFVwZGF0ZSA9XG4gICAgICAgIHBhcmVudEZpYmVyLnBlbmRpbmdQcm9wcyAhPSBpbnN0YW5jZS5wcm9wcyB8fCBwYXJlbnRGaWJlci5wYXJ0aWFsU3RhdGU7XG4gICAgICBpZiAoc2hvdWxkVXBkYXRlKSB7XG4gICAgICAgIGluc3RhbmNlLnByb3BzID0gcGFyZW50RmliZXIucGVuZGluZ1Byb3BzO1xuICAgICAgICBjb25zdCBwYXJ0aWFsU3RhdGUgPSBnZXRTdGF0ZUZyb21VcGRhdGUoXG4gICAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgICAgcGFyZW50RmliZXIucGFydGlhbFN0YXRlXG4gICAgICAgICk7XG4gICAgICAgIGluc3RhbmNlLnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgaW5zdGFuY2Uuc3RhdGUsIHBhcnRpYWxTdGF0ZSk7XG4gICAgICAgIGVsZW1lbnRzID0gcGFyZW50RmliZXIuc3RhdGVOb2RlLnJlbmRlcigpO1xuICAgICAgICBwYXJlbnRGaWJlci5wYXJ0aWFsU3RhdGUgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTm8gbmVlZCB0byByZW5kZXIsIHJldXNlIGNoaWxkcmVuIGZyb20gbGFzdCB0aW1lXG4gICAgICAgIGNsb25lQ2hpbGRGaWJlcnMocGFyZW50RmliZXIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGVsZW1lbnRzID0gcGFyZW50RmliZXIucGVuZGluZ1Byb3BzLmNoaWxkcmVuO1xuICB9XG4gIGVsZW1lbnRzID0gYXJyaWZ5KGVsZW1lbnRzKTtcblxuICAvL3JlY29uY2lsZUNoaWxkcmVuQXJyYXlcbiAgbGV0IGluZGV4ID0gMDtcbiAgbGV0IG9sZEZpYmVyID0gcGFyZW50RmliZXIuYWx0ZXJuYXRlID8gcGFyZW50RmliZXIuYWx0ZXJuYXRlLmNoaWxkIDogbnVsbDtcbiAgbGV0IG5ld0ZpYmVyID0gbnVsbDtcbiAgd2hpbGUgKGluZGV4IDwgZWxlbWVudHMubGVuZ3RoIHx8IG9sZEZpYmVyICE9IG51bGwpIHtcbiAgICBpZiAoXG4gICAgICBpbmRleCA8IGVsZW1lbnRzLmxlbmd0aCAmJlxuICAgICAgb2xkRmliZXIgIT0gbnVsbCAmJlxuICAgICAgZWxlbWVudHNbaW5kZXhdLnR5cGUgPT0gb2xkRmliZXIudHlwZVxuICAgICkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2luZGV4XTtcbiAgICAgIGNvbnN0IHByZXZGaWJlciA9IG5ld0ZpYmVyO1xuICAgICAgbmV3RmliZXIgPSB7XG4gICAgICAgIHR5cGU6IGVsZW1lbnQudHlwZSxcbiAgICAgICAga2luZDogb2xkRmliZXIua2luZCxcbiAgICAgICAgc3RhdGVOb2RlOiBvbGRGaWJlci5zdGF0ZU5vZGUsXG4gICAgICAgIHBlbmRpbmdQcm9wczogZWxlbWVudC5wcm9wcyxcbiAgICAgICAgcGFyZW50OiBwYXJlbnRGaWJlcixcbiAgICAgICAgYWx0ZXJuYXRlOiBvbGRGaWJlcixcbiAgICAgICAgcGFydGlhbFN0YXRlOiBvbGRGaWJlci5wYXJ0aWFsU3RhdGVcbiAgICAgIH07XG4gICAgICBpZiAoaW5kZXggPT0gMCkge1xuICAgICAgICBwYXJlbnRGaWJlci5jaGlsZCA9IG5ld0ZpYmVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJldkZpYmVyLnNpYmxpbmcgPSBuZXdGaWJlcjtcbiAgICAgIH1cbiAgICAgIGluZGV4Kys7XG4gICAgICBvbGRGaWJlciA9IG9sZEZpYmVyLnNpYmxpbmc7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPCBlbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpbmRleF07XG4gICAgICBjb25zdCBwcmV2RmliZXIgPSBuZXdGaWJlcjtcbiAgICAgIG5ld0ZpYmVyID0ge1xuICAgICAgICB0eXBlOiBlbGVtZW50LnR5cGUsXG4gICAgICAgIGtpbmQ6XG4gICAgICAgICAgdHlwZW9mIGVsZW1lbnQudHlwZSA9PT0gXCJzdHJpbmdcIiA/IEhPU1RfQ09NUE9ORU5UIDogQ0xBU1NfQ09NUE9ORU5ULFxuICAgICAgICBwZW5kaW5nUHJvcHM6IGVsZW1lbnQucHJvcHMsXG4gICAgICAgIHBhcmVudDogcGFyZW50RmliZXJcbiAgICAgIH07XG4gICAgICBpZiAoaW5kZXggPT0gMCkge1xuICAgICAgICBwYXJlbnRGaWJlci5jaGlsZCA9IG5ld0ZpYmVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJldkZpYmVyLnNpYmxpbmcgPSBuZXdGaWJlcjtcbiAgICAgIH1cbiAgICAgIGluZGV4Kys7XG4gICAgfVxuXG4gICAgaWYgKG9sZEZpYmVyICE9IG51bGwpIHtcbiAgICAgIG9sZEZpYmVyLmVmZmVjdCA9IERFTEVUSU9OO1xuICAgICAgcGFyZW50RmliZXIuZWZmZWN0cyA9IHBhcmVudEZpYmVyLmVmZmVjdHMgfHwgW107XG4gICAgICBwYXJlbnRGaWJlci5lZmZlY3RzLnB1c2gob2xkRmliZXIpO1xuICAgICAgb2xkRmliZXIgPSBvbGRGaWJlci5zaWJsaW5nO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjbG9uZUNoaWxkRmliZXJzKHBhcmVudEZpYmVyKSB7XG4gIGNvbnN0IG9sZEZpYmVyID0gcGFyZW50RmliZXIuYWx0ZXJuYXRlO1xuICBpZiAob2xkRmliZXIuY2hpbGQgPT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBvbGRDaGlsZCA9IG9sZEZpYmVyLmNoaWxkO1xuICBsZXQgcHJldkNoaWxkID0gbnVsbDtcbiAgd2hpbGUgKG9sZENoaWxkICE9IG51bGwpIHtcbiAgICBjb25zdCBuZXdDaGlsZCA9IHtcbiAgICAgIHR5cGU6IG9sZENoaWxkLnR5cGUsXG4gICAgICBraW5kOiBvbGRDaGlsZC5raW5kLFxuICAgICAgc3RhdGVOb2RlOiBvbGRDaGlsZC5zdGF0ZU5vZGUsXG4gICAgICBwZW5kaW5nUHJvcHM6IG9sZENoaWxkLnBlbmRpbmdQcm9wcyxcbiAgICAgIHBhcnRpYWxTdGF0ZTogb2xkQ2hpbGQucGFydGlhbFN0YXRlLFxuICAgICAgYWx0ZXJuYXRlOiBvbGRDaGlsZCxcbiAgICAgIHBhcmVudDogcGFyZW50RmliZXJcbiAgICB9O1xuICAgIGlmICghcHJldkNoaWxkKSB7XG4gICAgICBwYXJlbnRGaWJlci5jaGlsZCA9IG5ld0NoaWxkO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmV2Q2hpbGQuc2libGluZyA9IG5ld0NoaWxkO1xuICAgIH1cbiAgICBwcmV2Q2hpbGQgPSBuZXdDaGlsZDtcbiAgICBvbGRDaGlsZCA9IG9sZENoaWxkLnNpYmxpbmc7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcGxldGVXb3JrKGZpYmVyKSB7XG4gIHN3aXRjaCAoZmliZXIua2luZCkge1xuICAgIGNhc2UgSE9TVF9DT01QT05FTlQ6XG4gICAgICBpZiAoZmliZXIuYWx0ZXJuYXRlKSB7XG4gICAgICAgIGZpYmVyLmVmZmVjdCA9IFVQREFURTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpYmVyLmVmZmVjdCA9IFBMQUNFTUVOVDtcbiAgICAgICAgY29uc3QgaXNUZXh0RWxlbWVudCA9IGZpYmVyLnR5cGUgPT09IFRFWFRfRUxFTUVOVDtcbiAgICAgICAgY29uc3QgZG9tID0gaXNUZXh0RWxlbWVudFxuICAgICAgICAgID8gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIilcbiAgICAgICAgICA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZmliZXIudHlwZSk7XG4gICAgICAgIHVwZGF0ZURvbVByb3BlcnRpZXMoZG9tLCBbXSwgZmliZXIucGVuZGluZ1Byb3BzKTtcbiAgICAgICAgZmliZXIuc3RhdGVOb2RlID0gZG9tO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBDTEFTU19DT01QT05FTlQ6XG4gICAgICBmaWJlci5zdGF0ZU5vZGUuX19maWJlciA9IGZpYmVyO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgaWYgKGZpYmVyLnBhcmVudCkge1xuICAgIGNvbnN0IGNoaWxkRWZmZWN0cyA9IGZpYmVyLmVmZmVjdHMgfHwgW107XG4gICAgY29uc3QgdGhpc0VmZmVjdCA9IGZpYmVyLmVmZmVjdCAhPSBudWxsID8gW2ZpYmVyXSA6IFtdO1xuICAgIGNvbnN0IHBhcmVudEVmZmVjdHMgPSBmaWJlci5wYXJlbnQuZWZmZWN0cyB8fCBbXTtcbiAgICBmaWJlci5wYXJlbnQuZWZmZWN0cyA9IHBhcmVudEVmZmVjdHMuY29uY2F0KGNoaWxkRWZmZWN0cywgdGhpc0VmZmVjdCk7XG4gIH0gZWxzZSB7XG4gICAgcGVuZGluZ0NvbW1pdCA9IGZpYmVyO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbW1pdEFsbFdvcmsoZmliZXIpIHtcbiAgZmliZXIuZWZmZWN0cy5mb3JFYWNoKGYgPT4ge1xuICAgIGNvbW1pdFdvcmsoZik7XG4gIH0pO1xuICBmaWJlci5zdGF0ZU5vZGUuX3Jvb3RDb250YWluZXJGaWJlciA9IGZpYmVyO1xuICBuZXh0VW5pdE9mV29yayA9IG51bGw7XG4gIHBlbmRpbmdDb21taXQgPSBudWxsO1xufVxuXG5mdW5jdGlvbiBjb21taXRXb3JrKGZpYmVyKSB7XG4gIGlmIChmaWJlci5raW5kICE9IEhPU1RfUk9PVCkge1xuICAgIGxldCBkb21QYXJlbnRGaWJlciA9IGZpYmVyLnBhcmVudDtcbiAgICB3aGlsZSAoZG9tUGFyZW50RmliZXIua2luZCA9PSBDTEFTU19DT01QT05FTlQpIHtcbiAgICAgIGRvbVBhcmVudEZpYmVyID0gZG9tUGFyZW50RmliZXIucGFyZW50O1xuICAgIH1cbiAgICBzd2l0Y2ggKGZpYmVyLmVmZmVjdCkge1xuICAgICAgY2FzZSBVUERBVEU6XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidXBkYXRlXCIsIGZpYmVyLnN0YXRlTm9kZSk7XG4gICAgICAgIHVwZGF0ZURvbVByb3BlcnRpZXMoXG4gICAgICAgICAgZmliZXIuc3RhdGVOb2RlLFxuICAgICAgICAgIGZpYmVyLmFsdGVybmF0ZS5wZW5kaW5nUHJvcHMsXG4gICAgICAgICAgZmliZXIucGVuZGluZ1Byb3BzXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBQTEFDRU1FTlQ6XG4gICAgICAgIGlmIChmaWJlci5raW5kID09IEhPU1RfQ09NUE9ORU5UKSB7XG4gICAgICAgICAgZG9tUGFyZW50RmliZXIuc3RhdGVOb2RlLmFwcGVuZENoaWxkKGZpYmVyLnN0YXRlTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJwbGFjZVwiLCBmaWJlci5zdGF0ZU5vZGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgREVMRVRJT046XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGVsZXRlXCIsIGZpYmVyLnN0YXRlTm9kZSk7XG4gICAgICAgIGxldCBub2RlID0gZmliZXI7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgaWYgKG5vZGUua2luZCA9PSBDTEFTU19DT01QT05FTlQpIHtcbiAgICAgICAgICAgIG5vZGUgPSBub2RlLmNoaWxkO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZG9tUGFyZW50RmliZXIuc3RhdGVOb2RlLnJlbW92ZUNoaWxkKG5vZGUuc3RhdGVOb2RlKTtcblxuICAgICAgICAgIHdoaWxlIChub2RlICE9IGZpYmVyICYmIG5vZGUuc2libGluZyA9PSBudWxsKSB7XG4gICAgICAgICAgICBub2RlID0gbm9kZS5wYXJlbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG5vZGUgPT0gZmliZXIpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG5vZGUgPSBub2RlLnNpYmxpbmc7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFN0YXRlRnJvbVVwZGF0ZShpbnN0YW5jZSwgcGFydGlhbFN0YXRlKSB7XG4gIGlmIChwYXJ0aWFsU3RhdGUgPT0gbnVsbCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICBpZiAodHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY29uc3QgdXBkYXRlRm4gPSBwYXJ0aWFsU3RhdGU7XG4gICAgcmV0dXJuIHVwZGF0ZUZuLmNhbGwoaW5zdGFuY2UsIGluc3RhbmNlLnN0YXRlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcGFydGlhbFN0YXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFycmlmeSh2YWwpIHtcbiAgaWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbCkgPyB2YWwgOiBbdmFsXTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaWRhY3QvZmliZXItcmVjb25jaWxlci5qcyIsImltcG9ydCBkaWRhY3QgZnJvbSBcIi4vZGlkYWN0L2RpZGFjdFwiO1xuaW1wb3J0IHsgdXNpbmcgfSBmcm9tIFwiLi9kZW1vXCI7XG5pbXBvcnQgXCIuL2JsZWVkaW5nLXRocmVhZFwiO1xuXG4vKiogQGpzeCBkaWRhY3QuY3JlYXRlRWxlbWVudCAqL1xuXG5jb25zdCBEZW1vID0gdXNpbmcoe1xuICBjcmVhdGVFbGVtZW50OiBkaWRhY3QuY3JlYXRlRWxlbWVudCxcbiAgQ29tcG9uZW50OiBkaWRhY3QuQ29tcG9uZW50LFxuICByZW5kZXI6IGRpZGFjdC5yZW5kZXJcbn0pO1xuXG5kaWRhY3QucmVuZGVyKFxuICBbXG4gICAgPGgzIGtleT1cIjFcIj5cbiAgICAgIFRoaXMgc2VjdGlvbiBpcyB1cGRhdGVkIHVzaW5ne1wiIFwifVxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9oZXhhY3RhL2RpZGFjdFwiPkRpZGFjdCBGaWJlcjwvYT5cbiAgICA8L2gzPixcbiAgICA8RGVtbyBrZXk9XCIyXCIgLz4sXG4gICAgPGZvb3RlciBrZXk9XCIzXCI+XG4gICAgICBOb3cgdHJ5IGl0IHVzaW5nIDxhIGhyZWY9XCJyZWFjdC1zeW5jLmh0bWxcIj5SZWFjdCBzeW5jIHJlbmRlcmluZzwvYT4gb3J7XCIgXCJ9XG4gICAgICA8YSBocmVmPVwicmVhY3QtYXN5bmMuaHRtbFwiPlJlYWN0IGFzeW5jIHJlbmRlcmluZzwvYT5cbiAgICA8L2Zvb3Rlcj5cbiAgXSxcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpZGFjdC1kZW1vLmpzIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudFwiO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vZmliZXItcmVjb25jaWxlclwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZUVsZW1lbnQsXG4gIENvbXBvbmVudCxcbiAgcmVuZGVyXG59O1xuXG5leHBvcnQgeyBjcmVhdGVFbGVtZW50LCBDb21wb25lbnQsIHJlbmRlciB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpZGFjdC9kaWRhY3QuanMiLCJjb25zdCBpc0V2ZW50ID0gbmFtZSA9PiBuYW1lLnN0YXJ0c1dpdGgoXCJvblwiKTtcbmNvbnN0IGlzQXR0cmlidXRlID0gbmFtZSA9PlxuICAhaXNFdmVudChuYW1lKSAmJiBuYW1lICE9IFwiY2hpbGRyZW5cIiAmJiBuYW1lICE9IFwic3R5bGVcIjtcbmNvbnN0IGlzTmV3ID0gKHByZXYsIG5leHQpID0+IGtleSA9PiBwcmV2W2tleV0gIT09IG5leHRba2V5XTtcbmNvbnN0IGlzR29uZSA9IChwcmV2LCBuZXh0KSA9PiBrZXkgPT4gIShrZXkgaW4gbmV4dCk7XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVEb21Qcm9wZXJ0aWVzKGRvbSwgcHJldlByb3BzLCBuZXh0UHJvcHMpIHtcbiAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVyc1xuICBPYmplY3Qua2V5cyhwcmV2UHJvcHMpXG4gICAgLmZpbHRlcihpc0V2ZW50KVxuICAgIC5maWx0ZXIoa2V5ID0+ICEoa2V5IGluIG5leHRQcm9wcykgfHwgaXNOZXcocHJldlByb3BzLCBuZXh0UHJvcHMpKGtleSkpXG4gICAgLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICBjb25zdCBldmVudFR5cGUgPSBuYW1lLnRvTG93ZXJDYXNlKCkuc3Vic3RyaW5nKDIpO1xuICAgICAgZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBwcmV2UHJvcHNbbmFtZV0pO1xuICAgIH0pO1xuXG4gIC8vIFJlbW92ZSBhdHRyaWJ1dGVzXG4gIE9iamVjdC5rZXlzKHByZXZQcm9wcylcbiAgICAuZmlsdGVyKGlzQXR0cmlidXRlKVxuICAgIC5maWx0ZXIoaXNHb25lKHByZXZQcm9wcywgbmV4dFByb3BzKSlcbiAgICAuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIGRvbVtuYW1lXSA9IG51bGw7XG4gICAgfSk7XG5cbiAgLy8gU2V0IGF0dHJpYnV0ZXNcbiAgT2JqZWN0LmtleXMobmV4dFByb3BzKVxuICAgIC5maWx0ZXIoaXNBdHRyaWJ1dGUpXG4gICAgLmZpbHRlcihpc05ldyhwcmV2UHJvcHMsIG5leHRQcm9wcykpXG4gICAgLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcInNldHRpbmdcIiwgbmFtZSk7XG4gICAgICBkb21bbmFtZV0gPSBuZXh0UHJvcHNbbmFtZV07XG4gICAgfSk7XG5cbiAgLy8gU2V0IHN0eWxlXG4gIHByZXZQcm9wcy5zdHlsZSA9IHByZXZQcm9wcy5zdHlsZSB8fCB7fTtcbiAgbmV4dFByb3BzLnN0eWxlID0gbmV4dFByb3BzLnN0eWxlIHx8IHt9O1xuICBPYmplY3Qua2V5cyhuZXh0UHJvcHMuc3R5bGUpXG4gICAgLmZpbHRlcihpc05ldyhwcmV2UHJvcHMuc3R5bGUsIG5leHRQcm9wcy5zdHlsZSkpXG4gICAgLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGRvbS5zdHlsZVtrZXldID0gbmV4dFByb3BzLnN0eWxlW2tleV07XG4gICAgfSk7XG4gIE9iamVjdC5rZXlzKHByZXZQcm9wcy5zdHlsZSlcbiAgICAuZmlsdGVyKGlzR29uZShwcmV2UHJvcHMuc3R5bGUsIG5leHRQcm9wcy5zdHlsZSkpXG4gICAgLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGRvbS5zdHlsZVtrZXldID0gXCJcIjtcbiAgICB9KTtcblxuICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzXG4gIE9iamVjdC5rZXlzKG5leHRQcm9wcylcbiAgICAuZmlsdGVyKGlzRXZlbnQpXG4gICAgLmZpbHRlcihpc05ldyhwcmV2UHJvcHMsIG5leHRQcm9wcykpXG4gICAgLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICBjb25zdCBldmVudFR5cGUgPSBuYW1lLnRvTG93ZXJDYXNlKCkuc3Vic3RyaW5nKDIpO1xuICAgICAgZG9tLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBuZXh0UHJvcHNbbmFtZV0pO1xuICAgIH0pO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpZGFjdC9kb20tdXRpbHMuanMiXSwic291cmNlUm9vdCI6IiJ9