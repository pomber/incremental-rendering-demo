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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTE4ZWExYWIzZDkxNTE3ZDYwMzciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlbW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JsZWVkaW5nLXRocmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlkYWN0L2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpZGFjdC9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpZGFjdC9maWJlci1yZWNvbmNpbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWRhY3QtZGVtby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlkYWN0L2RpZGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlkYWN0L2RvbS11dGlscy5qcyJdLCJuYW1lcyI6WyJ1c2luZyIsIlJlYWN0aXNoIiwiQ2VsbCIsInByb3BzIiwidGV4dCIsImRlbGF5Iiwid2FpdCIsIkNvbXBvbmVudCIsIkRlbW8iLCJzdGF0ZSIsImVsYXBzZWQiLCJzaXplIiwicGVyaW9kIiwiY2hhbmdlRGVsYXkiLCJiaW5kIiwiY2hhbmdlUGVyaW9kIiwidGljayIsInNldFRpbWVvdXQiLCJzZXRTdGF0ZSIsInMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJhcnJheSIsIkFycmF5IiwiZmlsbCIsInJvdyIsIm1hcCIsIngiLCJrZXkiLCJyb3dzIiwiZGlzcGxheSIsIk1hdGgiLCJyb3VuZCIsInRvRml4ZWQiLCJtcyIsInN0YXJ0IiwicGVyZm9ybWFuY2UiLCJub3ciLCJmcmFtZXMiLCJjb2xXaWR0aCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsInpJbmRleCIsImkiLCJmYyIsImJhY2tncm91bmQiLCJ3aWR0aCIsInZlcnRpY2FsQWxpZ24iLCJvcGFjaXR5IiwiYXBwZW5kQ2hpbGQiLCJoZWlnaHQiLCJsYXN0IiwicmVmcmVzaCIsImRpZmYiLCJjaGlsZE5vZGVzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYm9keSIsIlRFWFRfRUxFTUVOVCIsInR5cGUiLCJjb25maWciLCJPYmplY3QiLCJhc3NpZ24iLCJhcmdzIiwiaGFzQ2hpbGRyZW4iLCJsZW5ndGgiLCJyYXdDaGlsZHJlbiIsImNvbmNhdCIsImNoaWxkcmVuIiwiZmlsdGVyIiwiYyIsImNyZWF0ZVRleHRFbGVtZW50Iiwibm9kZVZhbHVlIiwiY3JlYXRlSW5zdGFuY2UiLCJwYXJ0aWFsU3RhdGUiLCJfX2ZpYmVyIiwiZmliZXIiLCJpbnN0YW5jZSIsInBlbmRpbmdQcm9wcyIsInJlbmRlciIsInNjaGVkdWxlVXBkYXRlIiwiUExBQ0VNRU5UIiwiREVMRVRJT04iLCJVUERBVEUiLCJIT1NUX0NPTVBPTkVOVCIsIkNMQVNTX0NPTVBPTkVOVCIsIkhPU1RfUk9PVCIsInRpbWVIZXVyaXN0aWNGb3JVbml0T2ZXb3JrIiwibmV4dFVuaXRPZldvcmsiLCJ1cGRhdGVRdWV1ZSIsInBlbmRpbmdDb21taXQiLCJlbGVtZW50cyIsImNvbnRhaW5lckRvbSIsInB1c2giLCJraW5kIiwic3RhdGVOb2RlIiwiYXJyaWZ5IiwicmVxdWVzdElkbGVDYWxsYmFjayIsInBlcmZvcm1Xb3JrIiwiZGVhZGxpbmUiLCJ3b3JrTG9vcCIsInJlc2V0TmV4dFVuaXRPZldvcmsiLCJ0aW1lUmVtYWluaW5nIiwicGVyZm9ybVVuaXRPZldvcmsiLCJjb21taXRBbGxXb3JrIiwidXBkYXRlIiwic2hpZnQiLCJhbHRlcm5hdGUiLCJfcm9vdENvbnRhaW5lckZpYmVyIiwibm9kZSIsInBhcmVudCIsImJlZ2luV29yayIsImNoaWxkIiwidW93IiwiY29tcGxldGVXb3JrIiwic2libGluZyIsInBhcmVudEZpYmVyIiwic2hvdWxkVXBkYXRlIiwiZ2V0U3RhdGVGcm9tVXBkYXRlIiwiY2xvbmVDaGlsZEZpYmVycyIsImluZGV4Iiwib2xkRmliZXIiLCJuZXdGaWJlciIsImVsZW1lbnQiLCJwcmV2RmliZXIiLCJlZmZlY3QiLCJlZmZlY3RzIiwib2xkQ2hpbGQiLCJwcmV2Q2hpbGQiLCJuZXdDaGlsZCIsImlzVGV4dEVsZW1lbnQiLCJkb20iLCJjcmVhdGVUZXh0Tm9kZSIsImNoaWxkRWZmZWN0cyIsInRoaXNFZmZlY3QiLCJwYXJlbnRFZmZlY3RzIiwiZm9yRWFjaCIsImNvbW1pdFdvcmsiLCJmIiwiZG9tUGFyZW50RmliZXIiLCJyZW1vdmVDaGlsZCIsInVwZGF0ZUZuIiwiY2FsbCIsInZhbCIsInVuZGVmaW5lZCIsImlzQXJyYXkiLCJnZXRFbGVtZW50QnlJZCIsInVwZGF0ZURvbVByb3BlcnRpZXMiLCJpc0V2ZW50IiwibmFtZSIsInN0YXJ0c1dpdGgiLCJpc0F0dHJpYnV0ZSIsImlzTmV3IiwicHJldiIsIm5leHQiLCJpc0dvbmUiLCJwcmV2UHJvcHMiLCJuZXh0UHJvcHMiLCJrZXlzIiwiZXZlbnRUeXBlIiwidG9Mb3dlckNhc2UiLCJzdWJzdHJpbmciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztRQzNEZ0JBLEssR0FBQUEsSzs7Ozs7Ozs7QUFGaEI7O0FBRU8sU0FBU0EsS0FBVCxDQUFlQyxRQUFmLEVBQXlCO0FBQUEsTUFDeEJDLElBRHdCO0FBQUE7O0FBQUE7QUFB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QjtBQUNELEdBSkg7QUFLQXFDLFNBQU9pRyxJQUFQLENBQVlGLFVBQVVySCxLQUF0QixFQUNHOEIsTUFESCxDQUNVc0YsT0FBT0MsVUFBVXJILEtBQWpCLEVBQXdCc0gsVUFBVXRILEtBQWxDLENBRFYsRUFFR2lHLE9BRkgsQ0FFVyxlQUFPO0FBQ2RMLFFBQUk1RixLQUFKLENBQVVmLEdBQVYsSUFBaUIsRUFBakI7QUFDRCxHQUpIOztBQU1BO0FBQ0FxQyxTQUFPaUcsSUFBUCxDQUFZRCxTQUFaLEVBQ0d4RixNQURILENBQ1UrRSxPQURWLEVBRUcvRSxNQUZILENBRVVtRixNQUFNSSxTQUFOLEVBQWlCQyxTQUFqQixDQUZWLEVBR0dyQixPQUhILENBR1csZ0JBQVE7QUFDZixRQUFNdUIsWUFBWVYsS0FBS1csV0FBTCxHQUFtQkMsU0FBbkIsQ0FBNkIsQ0FBN0IsQ0FBbEI7QUFDQTlCLFFBQUlnQyxnQkFBSixDQUFxQkosU0FBckIsRUFBZ0NGLFVBQVVSLElBQVYsQ0FBaEM7QUFDRCxHQU5IO0FBT0QsQyIsImZpbGUiOiJkaWRhY3QuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDExOGVhMWFiM2Q5MTUxN2Q2MDM3IiwiLyoqIEBqc3ggUmVhY3Rpc2guY3JlYXRlRWxlbWVudCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdXNpbmcoUmVhY3Rpc2gpIHtcbiAgY2xhc3MgQ2VsbCBleHRlbmRzIFJlYWN0aXNoLkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyB0ZXh0LCBkZWxheSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIHdhaXQoZGVsYXkpO1xuICAgICAgcmV0dXJuIDx0ZD57dGV4dH08L3RkPjtcbiAgICB9XG4gIH1cblxuICBjbGFzcyBEZW1vIGV4dGVuZHMgUmVhY3Rpc2guQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgZWxhcHNlZDogMCwgLy8gdGhlIG51bWJlciBzaG93biBvbiBlYWNoIENlbGxcbiAgICAgICAgc2l6ZTogNiwgLy8gdGhlIHNpemUgb2YgYSByb3dcbiAgICAgICAgcGVyaW9kOiAxMDAwLCAvLyB0aGUgdGltZSAoaW4gbXMpIGJldHdlZW4gdXBkYXRlc1xuICAgICAgICBkZWxheTogMyAvLyB0aGUgZGVsYXkgKGluIG1zKSBmb3IgdGhlIHJlbmRlciBvZiBlYWNoIENlbGxcbiAgICAgIH07XG4gICAgICB0aGlzLmNoYW5nZURlbGF5ID0gdGhpcy5jaGFuZ2VEZWxheS5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5jaGFuZ2VQZXJpb2QgPSB0aGlzLmNoYW5nZVBlcmlvZC5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy50aWNrID0gdGhpcy50aWNrLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLnRpY2soKTtcbiAgICB9XG4gICAgdGljaygpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHMgPT4gKHsgZWxhcHNlZDogcy5lbGFwc2VkICsgMSB9KSk7XG4gICAgICAgIHRoaXMudGljaygpO1xuICAgICAgfSwgdGhpcy5zdGF0ZS5wZXJpb2QpO1xuICAgIH1cbiAgICBjaGFuZ2VEZWxheShlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZGVsYXk6ICtlLnRhcmdldC52YWx1ZSB9KTtcbiAgICB9XG4gICAgY2hhbmdlUGVyaW9kKGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwZXJpb2Q6ICtlLnRhcmdldC52YWx1ZSB9KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyBlbGFwc2VkLCBzaXplLCBkZWxheSwgcGVyaW9kIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgY29uc3QgdGV4dCA9IGVsYXBzZWQgJSAxMDtcbiAgICAgIGNvbnN0IGFycmF5ID0gQXJyYXkoc2l6ZSkuZmlsbCgpO1xuICAgICAgY29uc3Qgcm93ID0gYXJyYXkubWFwKCh4LCBrZXkpID0+IDxDZWxsIHsuLi57IGtleSwgdGV4dCwgZGVsYXkgfX0gLz4pO1xuICAgICAgY29uc3Qgcm93cyA9IGFycmF5Lm1hcCgoeCwga2V5KSA9PiA8dHIga2V5PXtrZXl9Pntyb3d9PC90cj4pO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICA8dGJvZHk+e3Jvd3N9PC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgVGhlIHRhYmxlIHJlZnJlc2hlcyBldmVyeSA8Yj57TWF0aC5yb3VuZChwZXJpb2QpfTwvYj5tc1xuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGlkPVwicGVyaW9kLXJhbmdlXCJcbiAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgbWluPVwiMjAwXCJcbiAgICAgICAgICAgICAgbWF4PVwiMTAwMFwiXG4gICAgICAgICAgICAgIHN0ZXA9XCJhbnlcIlxuICAgICAgICAgICAgICB2YWx1ZT17cGVyaW9kfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VQZXJpb2R9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFRoZSByZW5kZXIgb2YgZWFjaCBjZWxsIHRha2VzIDxiPntkZWxheS50b0ZpeGVkKDIpfTwvYj5tc1xuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGlkPVwiZGVsYXktcmFuZ2VcIlxuICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICAgICAgbWF4PVwiMTBcIlxuICAgICAgICAgICAgICBzdGVwPVwiYW55XCJcbiAgICAgICAgICAgICAgdmFsdWU9e2RlbGF5fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VEZWxheX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgU28sIHN5bmMgcmVuZGVyaW5nIHRoZSBmdWxsIHRhYmxlIHdpbGwga2VlcCB0aGUgbWFpbiB0aHJlYWQgYnVzeVxuICAgICAgICAgICAgICBmb3IgPGI+eyhkZWxheSAqIHNpemUgKiBzaXplKS50b0ZpeGVkKDIpfTwvYj5tc1xuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIERlbW87XG59XG5cbmZ1bmN0aW9uIHdhaXQobXMpIHtcbiAgY29uc3Qgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgd2hpbGUgKHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnQgPCBtcyk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGVtby5qcyIsIihmdW5jdGlvbihmcmFtZXMgPSAxNTAsIGNvbFdpZHRoID0gXCIycHhcIikge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gIGNvbnRhaW5lci5zdHlsZS5yaWdodCA9IFwiMTBweFwiO1xuICBjb250YWluZXIuc3R5bGUudG9wID0gXCIwXCI7XG4gIGNvbnRhaW5lci5zdHlsZS56SW5kZXggPSBcIjk5OTk5XCI7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZnJhbWVzOyBpKyspIHtcbiAgICBjb25zdCBmYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZmMuc3R5bGUuYmFja2dyb3VuZCA9IFwicmVkXCI7XG4gICAgZmMuc3R5bGUud2lkdGggPSBjb2xXaWR0aDtcbiAgICBmYy5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICBmYy5zdHlsZS52ZXJ0aWNhbEFsaWduID0gXCJ0b3BcIjtcbiAgICBmYy5zdHlsZS5vcGFjaXR5ID0gXCIwLjhcIjtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZmMpO1xuICAgIGZjLnN0eWxlLmhlaWdodCA9IFwiMTZweFwiO1xuICB9XG4gIGxldCBsYXN0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gIGxldCBpID0gMDtcbiAgZnVuY3Rpb24gcmVmcmVzaCgpIHtcbiAgICBjb25zdCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICBjb25zdCBkaWZmID0gbm93IC0gbGFzdDtcbiAgICBsYXN0ID0gbm93O1xuICAgIGNvbnRhaW5lci5jaGlsZE5vZGVzW2kgJSBmcmFtZXNdLnN0eWxlLmJhY2tncm91bmQgPSBcInJlZFwiO1xuICAgIGkrKztcbiAgICBjb250YWluZXIuY2hpbGROb2Rlc1tpICUgZnJhbWVzXS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJibGFja1wiO1xuICAgIGNvbnRhaW5lci5jaGlsZE5vZGVzW2kgJSBmcmFtZXNdLnN0eWxlLmhlaWdodCA9IGRpZmYgKyBcInB4XCI7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlZnJlc2gpO1xuICB9XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZWZyZXNoKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibGVlZGluZy10aHJlYWQuanMiLCJleHBvcnQgY29uc3QgVEVYVF9FTEVNRU5UID0gXCJURVhUIEVMRU1FTlRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCAuLi5hcmdzKSB7XG4gIGNvbnN0IHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnKTtcbiAgY29uc3QgaGFzQ2hpbGRyZW4gPSBhcmdzLmxlbmd0aCA+IDA7XG4gIGNvbnN0IHJhd0NoaWxkcmVuID0gaGFzQ2hpbGRyZW4gPyBbXS5jb25jYXQoLi4uYXJncykgOiBbXTtcbiAgcHJvcHMuY2hpbGRyZW4gPSByYXdDaGlsZHJlblxuICAgIC5maWx0ZXIoYyA9PiBjICE9IG51bGwgJiYgYyAhPT0gZmFsc2UpXG4gICAgLm1hcChjID0+IGMgaW5zdGFuY2VvZiBPYmplY3QgPyBjIDogY3JlYXRlVGV4dEVsZW1lbnQoYykpO1xuICByZXR1cm4geyB0eXBlLCBwcm9wcyB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0RWxlbWVudCh2YWx1ZSkge1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChURVhUX0VMRU1FTlQsIHsgbm9kZVZhbHVlOiB2YWx1ZSB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaWRhY3QvZWxlbWVudC5qcyIsImltcG9ydCB7IHNjaGVkdWxlVXBkYXRlIH0gZnJvbSBcIi4vZmliZXItcmVjb25jaWxlclwiO1xuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICB0aGlzLnByb3BzID0gcHJvcHMgfHwge307XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuc3RhdGUgfHwge307XG4gIH1cblxuICBzZXRTdGF0ZShwYXJ0aWFsU3RhdGUpIHtcbiAgICBzY2hlZHVsZVVwZGF0ZSh0aGlzLl9fZmliZXIsIHBhcnRpYWxTdGF0ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGZpYmVyKSB7XG4gIGNvbnN0IGluc3RhbmNlID0gbmV3IGZpYmVyLnR5cGUoZmliZXIucGVuZGluZ1Byb3BzKTtcbiAgaW5zdGFuY2UuX19maWJlciA9IGZpYmVyO1xuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlkYWN0L2NvbXBvbmVudC5qcyIsImltcG9ydCB7IHVwZGF0ZURvbVByb3BlcnRpZXMgfSBmcm9tIFwiLi9kb20tdXRpbHNcIjtcbmltcG9ydCB7IFRFWFRfRUxFTUVOVCB9IGZyb20gXCIuL2VsZW1lbnRcIjtcbmltcG9ydCB7IGNyZWF0ZUluc3RhbmNlIH0gZnJvbSBcIi4vY29tcG9uZW50XCI7XG5cbmNvbnN0IFBMQUNFTUVOVCA9IDE7XG5jb25zdCBERUxFVElPTiA9IDI7XG5jb25zdCBVUERBVEUgPSAzO1xuXG4vLyBraW5kc1xuY29uc3QgSE9TVF9DT01QT05FTlQgPSBcImhvc3RcIjtcbmNvbnN0IENMQVNTX0NPTVBPTkVOVCA9IFwiY2xhc3NcIjtcbmNvbnN0IEhPU1RfUk9PVCA9IFwicm9vdFwiO1xuXG5jb25zdCB0aW1lSGV1cmlzdGljRm9yVW5pdE9mV29yayA9IDE7XG5cbmxldCBuZXh0VW5pdE9mV29yayA9IG51bGw7XG5sZXQgdXBkYXRlUXVldWUgPSBbXTtcbmxldCBwZW5kaW5nQ29tbWl0ID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihlbGVtZW50cywgY29udGFpbmVyRG9tKSB7XG4gIC8vIGNvbnNvbGUubG9nKFwiUXVldWUgcmVuZGVyXCIsIHVwZGF0ZVF1ZXVlLmxlbmd0aCk7XG4gIHVwZGF0ZVF1ZXVlLnB1c2goe1xuICAgIGtpbmQ6IEhPU1RfUk9PVCxcbiAgICBzdGF0ZU5vZGU6IGNvbnRhaW5lckRvbSxcbiAgICBwZW5kaW5nUHJvcHM6IHsgY2hpbGRyZW46IGFycmlmeShlbGVtZW50cykgfVxuICB9KTtcbiAgcmVxdWVzdElkbGVDYWxsYmFjayhwZXJmb3JtV29yayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZVVwZGF0ZShmaWJlciwgcGFydGlhbFN0YXRlKSB7XG4gIC8vIGNvbnNvbGUubG9nKFwiUXVldWUgdXBkYXRlXCIsIHVwZGF0ZVF1ZXVlLmxlbmd0aCk7XG4gIHVwZGF0ZVF1ZXVlLnB1c2goe1xuICAgIGtpbmQ6IENMQVNTX0NPTVBPTkVOVCxcbiAgICBmaWJlcjogZmliZXIsXG4gICAgcGFydGlhbFN0YXRlOiBwYXJ0aWFsU3RhdGVcbiAgfSk7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2socGVyZm9ybVdvcmspO1xufVxuXG5mdW5jdGlvbiBwZXJmb3JtV29yayhkZWFkbGluZSkge1xuICB3b3JrTG9vcChkZWFkbGluZSk7XG4gIGlmIChuZXh0VW5pdE9mV29yayAhPSBudWxsIHx8IHVwZGF0ZVF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKHBlcmZvcm1Xb3JrKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB3b3JrTG9vcChkZWFkbGluZSkge1xuICBpZiAobmV4dFVuaXRPZldvcmsgPT0gbnVsbCkge1xuICAgIHJlc2V0TmV4dFVuaXRPZldvcmsoKTtcbiAgfVxuXG4gIHdoaWxlIChcbiAgICBuZXh0VW5pdE9mV29yayAhPSBudWxsICYmXG4gICAgZGVhZGxpbmUudGltZVJlbWFpbmluZygpID4gdGltZUhldXJpc3RpY0ZvclVuaXRPZldvcmtcbiAgKSB7XG4gICAgbmV4dFVuaXRPZldvcmsgPSBwZXJmb3JtVW5pdE9mV29yayhuZXh0VW5pdE9mV29yayk7XG4gIH1cblxuICBpZiAocGVuZGluZ0NvbW1pdCkge1xuICAgIGNvbW1pdEFsbFdvcmsocGVuZGluZ0NvbW1pdCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzZXROZXh0VW5pdE9mV29yaygpIHtcbiAgaWYgKCFuZXh0VW5pdE9mV29yayAmJiB1cGRhdGVRdWV1ZS5sZW5ndGgpIHtcbiAgICBjb25zdCB1cGRhdGUgPSB1cGRhdGVRdWV1ZS5zaGlmdCgpO1xuICAgIGlmICh1cGRhdGUua2luZCA9PT0gSE9TVF9ST09UKSB7XG4gICAgICBuZXh0VW5pdE9mV29yayA9IHtcbiAgICAgICAgc3RhdGVOb2RlOiB1cGRhdGUuc3RhdGVOb2RlLFxuICAgICAgICBraW5kOiBIT1NUX1JPT1QsXG4gICAgICAgIHBlbmRpbmdQcm9wczogdXBkYXRlLnBlbmRpbmdQcm9wcyxcbiAgICAgICAgYWx0ZXJuYXRlOiB1cGRhdGUuc3RhdGVOb2RlLl9yb290Q29udGFpbmVyRmliZXJcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBub2RlID0gdXBkYXRlLmZpYmVyO1xuICAgICAgdXBkYXRlLmZpYmVyLnBhcnRpYWxTdGF0ZSA9IHVwZGF0ZS5wYXJ0aWFsU3RhdGU7XG4gICAgICB3aGlsZSAobm9kZS5wYXJlbnQgIT0gbnVsbCkge1xuICAgICAgICBub2RlID0gbm9kZS5wYXJlbnQ7XG4gICAgICB9XG4gICAgICBuZXh0VW5pdE9mV29yayA9IHtcbiAgICAgICAgc3RhdGVOb2RlOiBub2RlLnN0YXRlTm9kZSxcbiAgICAgICAga2luZDogSE9TVF9ST09ULFxuICAgICAgICBwZW5kaW5nUHJvcHM6IG5vZGUucGVuZGluZ1Byb3BzLFxuICAgICAgICBhbHRlcm5hdGU6IG5vZGVcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHBlcmZvcm1Vbml0T2ZXb3JrKGZpYmVyKSB7XG4gIGJlZ2luV29yayhmaWJlcik7XG4gIGlmIChmaWJlci5jaGlsZCAhPSBudWxsKSB7XG4gICAgcmV0dXJuIGZpYmVyLmNoaWxkO1xuICB9IGVsc2Uge1xuICAgIGxldCB1b3cgPSBmaWJlcjtcbiAgICB3aGlsZSAodW93ICE9IG51bGwpIHtcbiAgICAgIGNvbXBsZXRlV29yayh1b3cpO1xuICAgICAgaWYgKHVvdy5zaWJsaW5nKSB7XG4gICAgICAgIHJldHVybiB1b3cuc2libGluZztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVvdyA9IHVvdy5wYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGJlZ2luV29yayhwYXJlbnRGaWJlcikge1xuICBsZXQgZWxlbWVudHMgPSBbXTtcbiAgaWYgKHBhcmVudEZpYmVyLmtpbmQgPT0gQ0xBU1NfQ09NUE9ORU5UKSB7XG4gICAgaWYgKHBhcmVudEZpYmVyLnN0YXRlTm9kZSA9PSBudWxsKSB7XG4gICAgICBwYXJlbnRGaWJlci5zdGF0ZU5vZGUgPSBjcmVhdGVJbnN0YW5jZShwYXJlbnRGaWJlcik7XG4gICAgICBlbGVtZW50cyA9IHBhcmVudEZpYmVyLnN0YXRlTm9kZS5yZW5kZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSBwYXJlbnRGaWJlci5zdGF0ZU5vZGU7XG4gICAgICBjb25zdCBzaG91bGRVcGRhdGUgPVxuICAgICAgICBwYXJlbnRGaWJlci5wZW5kaW5nUHJvcHMgIT0gaW5zdGFuY2UucHJvcHMgfHwgcGFyZW50RmliZXIucGFydGlhbFN0YXRlO1xuICAgICAgaWYgKHNob3VsZFVwZGF0ZSkge1xuICAgICAgICBpbnN0YW5jZS5wcm9wcyA9IHBhcmVudEZpYmVyLnBlbmRpbmdQcm9wcztcbiAgICAgICAgY29uc3QgcGFydGlhbFN0YXRlID0gZ2V0U3RhdGVGcm9tVXBkYXRlKFxuICAgICAgICAgIGluc3RhbmNlLFxuICAgICAgICAgIHBhcmVudEZpYmVyLnBhcnRpYWxTdGF0ZVxuICAgICAgICApO1xuICAgICAgICBpbnN0YW5jZS5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIGluc3RhbmNlLnN0YXRlLCBwYXJ0aWFsU3RhdGUpO1xuICAgICAgICBlbGVtZW50cyA9IHBhcmVudEZpYmVyLnN0YXRlTm9kZS5yZW5kZXIoKTtcbiAgICAgICAgcGFyZW50RmliZXIucGFydGlhbFN0YXRlID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE5vIG5lZWQgdG8gcmVuZGVyLCByZXVzZSBjaGlsZHJlbiBmcm9tIGxhc3QgdGltZVxuICAgICAgICBjbG9uZUNoaWxkRmliZXJzKHBhcmVudEZpYmVyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50cyA9IHBhcmVudEZpYmVyLnBlbmRpbmdQcm9wcy5jaGlsZHJlbjtcbiAgfVxuICBlbGVtZW50cyA9IGFycmlmeShlbGVtZW50cyk7XG5cbiAgLy9yZWNvbmNpbGVDaGlsZHJlbkFycmF5XG4gIGxldCBpbmRleCA9IDA7XG4gIGxldCBvbGRGaWJlciA9IHBhcmVudEZpYmVyLmFsdGVybmF0ZSA/IHBhcmVudEZpYmVyLmFsdGVybmF0ZS5jaGlsZCA6IG51bGw7XG4gIGxldCBuZXdGaWJlciA9IG51bGw7XG4gIHdoaWxlIChpbmRleCA8IGVsZW1lbnRzLmxlbmd0aCB8fCBvbGRGaWJlciAhPSBudWxsKSB7XG4gICAgaWYgKFxuICAgICAgaW5kZXggPCBlbGVtZW50cy5sZW5ndGggJiZcbiAgICAgIG9sZEZpYmVyICE9IG51bGwgJiZcbiAgICAgIGVsZW1lbnRzW2luZGV4XS50eXBlID09IG9sZEZpYmVyLnR5cGVcbiAgICApIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpbmRleF07XG4gICAgICBjb25zdCBwcmV2RmliZXIgPSBuZXdGaWJlcjtcbiAgICAgIG5ld0ZpYmVyID0ge1xuICAgICAgICB0eXBlOiBlbGVtZW50LnR5cGUsXG4gICAgICAgIGtpbmQ6IG9sZEZpYmVyLmtpbmQsXG4gICAgICAgIHN0YXRlTm9kZTogb2xkRmliZXIuc3RhdGVOb2RlLFxuICAgICAgICBwZW5kaW5nUHJvcHM6IGVsZW1lbnQucHJvcHMsXG4gICAgICAgIHBhcmVudDogcGFyZW50RmliZXIsXG4gICAgICAgIGFsdGVybmF0ZTogb2xkRmliZXIsXG4gICAgICAgIHBhcnRpYWxTdGF0ZTogb2xkRmliZXIucGFydGlhbFN0YXRlXG4gICAgICB9O1xuICAgICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgICAgcGFyZW50RmliZXIuY2hpbGQgPSBuZXdGaWJlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByZXZGaWJlci5zaWJsaW5nID0gbmV3RmliZXI7XG4gICAgICB9XG4gICAgICBpbmRleCsrO1xuICAgICAgb2xkRmliZXIgPSBvbGRGaWJlci5zaWJsaW5nO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGluZGV4IDwgZWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudHNbaW5kZXhdO1xuICAgICAgY29uc3QgcHJldkZpYmVyID0gbmV3RmliZXI7XG4gICAgICBuZXdGaWJlciA9IHtcbiAgICAgICAgdHlwZTogZWxlbWVudC50eXBlLFxuICAgICAgICBraW5kOlxuICAgICAgICAgIHR5cGVvZiBlbGVtZW50LnR5cGUgPT09IFwic3RyaW5nXCIgPyBIT1NUX0NPTVBPTkVOVCA6IENMQVNTX0NPTVBPTkVOVCxcbiAgICAgICAgcGVuZGluZ1Byb3BzOiBlbGVtZW50LnByb3BzLFxuICAgICAgICBwYXJlbnQ6IHBhcmVudEZpYmVyXG4gICAgICB9O1xuICAgICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgICAgcGFyZW50RmliZXIuY2hpbGQgPSBuZXdGaWJlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByZXZGaWJlci5zaWJsaW5nID0gbmV3RmliZXI7XG4gICAgICB9XG4gICAgICBpbmRleCsrO1xuICAgIH1cblxuICAgIGlmIChvbGRGaWJlciAhPSBudWxsKSB7XG4gICAgICBvbGRGaWJlci5lZmZlY3QgPSBERUxFVElPTjtcbiAgICAgIHBhcmVudEZpYmVyLmVmZmVjdHMgPSBwYXJlbnRGaWJlci5lZmZlY3RzIHx8IFtdO1xuICAgICAgcGFyZW50RmliZXIuZWZmZWN0cy5wdXNoKG9sZEZpYmVyKTtcbiAgICAgIG9sZEZpYmVyID0gb2xkRmliZXIuc2libGluZztcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xvbmVDaGlsZEZpYmVycyhwYXJlbnRGaWJlcikge1xuICBjb25zdCBvbGRGaWJlciA9IHBhcmVudEZpYmVyLmFsdGVybmF0ZTtcbiAgaWYgKG9sZEZpYmVyLmNoaWxkID09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgb2xkQ2hpbGQgPSBvbGRGaWJlci5jaGlsZDtcbiAgbGV0IHByZXZDaGlsZCA9IG51bGw7XG4gIHdoaWxlIChvbGRDaGlsZCAhPSBudWxsKSB7XG4gICAgY29uc3QgbmV3Q2hpbGQgPSB7XG4gICAgICB0eXBlOiBvbGRDaGlsZC50eXBlLFxuICAgICAga2luZDogb2xkQ2hpbGQua2luZCxcbiAgICAgIHN0YXRlTm9kZTogb2xkQ2hpbGQuc3RhdGVOb2RlLFxuICAgICAgcGVuZGluZ1Byb3BzOiBvbGRDaGlsZC5wZW5kaW5nUHJvcHMsXG4gICAgICBwYXJ0aWFsU3RhdGU6IG9sZENoaWxkLnBhcnRpYWxTdGF0ZSxcbiAgICAgIGFsdGVybmF0ZTogb2xkQ2hpbGQsXG4gICAgICBwYXJlbnQ6IHBhcmVudEZpYmVyXG4gICAgfTtcbiAgICBpZiAoIXByZXZDaGlsZCkge1xuICAgICAgcGFyZW50RmliZXIuY2hpbGQgPSBuZXdDaGlsZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJldkNoaWxkLnNpYmxpbmcgPSBuZXdDaGlsZDtcbiAgICB9XG4gICAgcHJldkNoaWxkID0gbmV3Q2hpbGQ7XG4gICAgb2xkQ2hpbGQgPSBvbGRDaGlsZC5zaWJsaW5nO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlV29yayhmaWJlcikge1xuICBzd2l0Y2ggKGZpYmVyLmtpbmQpIHtcbiAgICBjYXNlIEhPU1RfQ09NUE9ORU5UOlxuICAgICAgaWYgKGZpYmVyLmFsdGVybmF0ZSkge1xuICAgICAgICBmaWJlci5lZmZlY3QgPSBVUERBVEU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWJlci5lZmZlY3QgPSBQTEFDRU1FTlQ7XG4gICAgICAgIGNvbnN0IGlzVGV4dEVsZW1lbnQgPSBmaWJlci50eXBlID09PSBURVhUX0VMRU1FTlQ7XG4gICAgICAgIGNvbnN0IGRvbSA9IGlzVGV4dEVsZW1lbnRcbiAgICAgICAgICA/IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpXG4gICAgICAgICAgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGZpYmVyLnR5cGUpO1xuICAgICAgICB1cGRhdGVEb21Qcm9wZXJ0aWVzKGRvbSwgW10sIGZpYmVyLnBlbmRpbmdQcm9wcyk7XG4gICAgICAgIGZpYmVyLnN0YXRlTm9kZSA9IGRvbTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQ0xBU1NfQ09NUE9ORU5UOlxuICAgICAgZmliZXIuc3RhdGVOb2RlLl9fZmliZXIgPSBmaWJlcjtcbiAgICAgIGJyZWFrO1xuICB9XG4gIGlmIChmaWJlci5wYXJlbnQpIHtcbiAgICBjb25zdCBjaGlsZEVmZmVjdHMgPSBmaWJlci5lZmZlY3RzIHx8IFtdO1xuICAgIGNvbnN0IHRoaXNFZmZlY3QgPSBmaWJlci5lZmZlY3QgIT0gbnVsbCA/IFtmaWJlcl0gOiBbXTtcbiAgICBjb25zdCBwYXJlbnRFZmZlY3RzID0gZmliZXIucGFyZW50LmVmZmVjdHMgfHwgW107XG4gICAgZmliZXIucGFyZW50LmVmZmVjdHMgPSBwYXJlbnRFZmZlY3RzLmNvbmNhdChjaGlsZEVmZmVjdHMsIHRoaXNFZmZlY3QpO1xuICB9IGVsc2Uge1xuICAgIHBlbmRpbmdDb21taXQgPSBmaWJlcjtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb21taXRBbGxXb3JrKGZpYmVyKSB7XG4gIGZpYmVyLmVmZmVjdHMuZm9yRWFjaChmID0+IHtcbiAgICBjb21taXRXb3JrKGYpO1xuICB9KTtcbiAgZmliZXIuc3RhdGVOb2RlLl9yb290Q29udGFpbmVyRmliZXIgPSBmaWJlcjtcbiAgbmV4dFVuaXRPZldvcmsgPSBudWxsO1xuICBwZW5kaW5nQ29tbWl0ID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gY29tbWl0V29yayhmaWJlcikge1xuICBpZiAoZmliZXIua2luZCAhPSBIT1NUX1JPT1QpIHtcbiAgICBsZXQgZG9tUGFyZW50RmliZXIgPSBmaWJlci5wYXJlbnQ7XG4gICAgd2hpbGUgKGRvbVBhcmVudEZpYmVyLmtpbmQgPT0gQ0xBU1NfQ09NUE9ORU5UKSB7XG4gICAgICBkb21QYXJlbnRGaWJlciA9IGRvbVBhcmVudEZpYmVyLnBhcmVudDtcbiAgICB9XG4gICAgc3dpdGNoIChmaWJlci5lZmZlY3QpIHtcbiAgICAgIGNhc2UgVVBEQVRFOlxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInVwZGF0ZVwiLCBmaWJlci5zdGF0ZU5vZGUpO1xuICAgICAgICB1cGRhdGVEb21Qcm9wZXJ0aWVzKFxuICAgICAgICAgIGZpYmVyLnN0YXRlTm9kZSxcbiAgICAgICAgICBmaWJlci5hbHRlcm5hdGUucGVuZGluZ1Byb3BzLFxuICAgICAgICAgIGZpYmVyLnBlbmRpbmdQcm9wc1xuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUExBQ0VNRU5UOlxuICAgICAgICBpZiAoZmliZXIua2luZCA9PSBIT1NUX0NPTVBPTkVOVCkge1xuICAgICAgICAgIGRvbVBhcmVudEZpYmVyLnN0YXRlTm9kZS5hcHBlbmRDaGlsZChmaWJlci5zdGF0ZU5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicGxhY2VcIiwgZmliZXIuc3RhdGVOb2RlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIERFTEVUSU9OOlxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRlbGV0ZVwiLCBmaWJlci5zdGF0ZU5vZGUpO1xuICAgICAgICBsZXQgbm9kZSA9IGZpYmVyO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgIGlmIChub2RlLmtpbmQgPT0gQ0xBU1NfQ09NUE9ORU5UKSB7XG4gICAgICAgICAgICBub2RlID0gbm9kZS5jaGlsZDtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvbVBhcmVudEZpYmVyLnN0YXRlTm9kZS5yZW1vdmVDaGlsZChub2RlLnN0YXRlTm9kZSk7XG5cbiAgICAgICAgICB3aGlsZSAobm9kZSAhPSBmaWJlciAmJiBub2RlLnNpYmxpbmcgPT0gbnVsbCkge1xuICAgICAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChub2RlID09IGZpYmVyKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBub2RlID0gbm9kZS5zaWJsaW5nO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTdGF0ZUZyb21VcGRhdGUoaW5zdGFuY2UsIHBhcnRpYWxTdGF0ZSkge1xuICBpZiAocGFydGlhbFN0YXRlID09IG51bGwpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgaWYgKHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNvbnN0IHVwZGF0ZUZuID0gcGFydGlhbFN0YXRlO1xuICAgIHJldHVybiB1cGRhdGVGbi5jYWxsKGluc3RhbmNlLCBpbnN0YW5jZS5zdGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHBhcnRpYWxTdGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcnJpZnkodmFsKSB7XG4gIGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpID8gdmFsIDogW3ZhbF07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlkYWN0L2ZpYmVyLXJlY29uY2lsZXIuanMiLCJpbXBvcnQgZGlkYWN0IGZyb20gXCIuL2RpZGFjdC9kaWRhY3RcIjtcbmltcG9ydCB7IHVzaW5nIH0gZnJvbSBcIi4vZGVtb1wiO1xuaW1wb3J0IFwiLi9ibGVlZGluZy10aHJlYWRcIjtcblxuLyoqIEBqc3ggZGlkYWN0LmNyZWF0ZUVsZW1lbnQgKi9cblxuY29uc3QgRGVtbyA9IHVzaW5nKHtcbiAgY3JlYXRlRWxlbWVudDogZGlkYWN0LmNyZWF0ZUVsZW1lbnQsXG4gIENvbXBvbmVudDogZGlkYWN0LkNvbXBvbmVudCxcbiAgcmVuZGVyOiBkaWRhY3QucmVuZGVyXG59KTtcblxuZGlkYWN0LnJlbmRlcihcbiAgW1xuICAgIDxoMyBrZXk9XCIxXCI+XG4gICAgICBUaGlzIHNlY3Rpb24gaXMgdXBkYXRlZCB1c2luZ3tcIiBcIn1cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vaGV4YWN0YS9kaWRhY3RcIj5EaWRhY3QgRmliZXI8L2E+XG4gICAgPC9oMz4sXG4gICAgPERlbW8ga2V5PVwiMlwiIC8+LFxuICAgIDxmb290ZXIga2V5PVwiM1wiPlxuICAgICAgTm93IHRyeSBpdCB1c2luZyA8YSBocmVmPVwicmVhY3Qtc3luYy5odG1sXCI+UmVhY3Qgc3luYyByZW5kZXJpbmc8L2E+IG9ye1wiIFwifVxuICAgICAgPGEgaHJlZj1cInJlYWN0LWFzeW5jLmh0bWxcIj5SZWFjdCBhc3luYyByZW5kZXJpbmc8L2E+XG4gICAgPC9mb290ZXI+XG4gIF0sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKVxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaWRhY3QtZGVtby5qcyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50XCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRcIjtcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL2ZpYmVyLXJlY29uY2lsZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGVFbGVtZW50LFxuICBDb21wb25lbnQsXG4gIHJlbmRlclxufTtcblxuZXhwb3J0IHsgY3JlYXRlRWxlbWVudCwgQ29tcG9uZW50LCByZW5kZXIgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaWRhY3QvZGlkYWN0LmpzIiwiY29uc3QgaXNFdmVudCA9IG5hbWUgPT4gbmFtZS5zdGFydHNXaXRoKFwib25cIik7XG5jb25zdCBpc0F0dHJpYnV0ZSA9IG5hbWUgPT5cbiAgIWlzRXZlbnQobmFtZSkgJiYgbmFtZSAhPSBcImNoaWxkcmVuXCIgJiYgbmFtZSAhPSBcInN0eWxlXCI7XG5jb25zdCBpc05ldyA9IChwcmV2LCBuZXh0KSA9PiBrZXkgPT4gcHJldltrZXldICE9PSBuZXh0W2tleV07XG5jb25zdCBpc0dvbmUgPSAocHJldiwgbmV4dCkgPT4ga2V5ID0+ICEoa2V5IGluIG5leHQpO1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRG9tUHJvcGVydGllcyhkb20sIHByZXZQcm9wcywgbmV4dFByb3BzKSB7XG4gIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lcnNcbiAgT2JqZWN0LmtleXMocHJldlByb3BzKVxuICAgIC5maWx0ZXIoaXNFdmVudClcbiAgICAuZmlsdGVyKGtleSA9PiAhKGtleSBpbiBuZXh0UHJvcHMpIHx8IGlzTmV3KHByZXZQcm9wcywgbmV4dFByb3BzKShrZXkpKVxuICAgIC5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgY29uc3QgZXZlbnRUeXBlID0gbmFtZS50b0xvd2VyQ2FzZSgpLnN1YnN0cmluZygyKTtcbiAgICAgIGRvbS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgcHJldlByb3BzW25hbWVdKTtcbiAgICB9KTtcblxuICAvLyBSZW1vdmUgYXR0cmlidXRlc1xuICBPYmplY3Qua2V5cyhwcmV2UHJvcHMpXG4gICAgLmZpbHRlcihpc0F0dHJpYnV0ZSlcbiAgICAuZmlsdGVyKGlzR29uZShwcmV2UHJvcHMsIG5leHRQcm9wcykpXG4gICAgLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICBkb21bbmFtZV0gPSBudWxsO1xuICAgIH0pO1xuXG4gIC8vIFNldCBhdHRyaWJ1dGVzXG4gIE9iamVjdC5rZXlzKG5leHRQcm9wcylcbiAgICAuZmlsdGVyKGlzQXR0cmlidXRlKVxuICAgIC5maWx0ZXIoaXNOZXcocHJldlByb3BzLCBuZXh0UHJvcHMpKVxuICAgIC5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJzZXR0aW5nXCIsIG5hbWUpO1xuICAgICAgZG9tW25hbWVdID0gbmV4dFByb3BzW25hbWVdO1xuICAgIH0pO1xuXG4gIC8vIFNldCBzdHlsZVxuICBwcmV2UHJvcHMuc3R5bGUgPSBwcmV2UHJvcHMuc3R5bGUgfHwge307XG4gIG5leHRQcm9wcy5zdHlsZSA9IG5leHRQcm9wcy5zdHlsZSB8fCB7fTtcbiAgT2JqZWN0LmtleXMobmV4dFByb3BzLnN0eWxlKVxuICAgIC5maWx0ZXIoaXNOZXcocHJldlByb3BzLnN0eWxlLCBuZXh0UHJvcHMuc3R5bGUpKVxuICAgIC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBkb20uc3R5bGVba2V5XSA9IG5leHRQcm9wcy5zdHlsZVtrZXldO1xuICAgIH0pO1xuICBPYmplY3Qua2V5cyhwcmV2UHJvcHMuc3R5bGUpXG4gICAgLmZpbHRlcihpc0dvbmUocHJldlByb3BzLnN0eWxlLCBuZXh0UHJvcHMuc3R5bGUpKVxuICAgIC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBkb20uc3R5bGVba2V5XSA9IFwiXCI7XG4gICAgfSk7XG5cbiAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyc1xuICBPYmplY3Qua2V5cyhuZXh0UHJvcHMpXG4gICAgLmZpbHRlcihpc0V2ZW50KVxuICAgIC5maWx0ZXIoaXNOZXcocHJldlByb3BzLCBuZXh0UHJvcHMpKVxuICAgIC5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgY29uc3QgZXZlbnRUeXBlID0gbmFtZS50b0xvd2VyQ2FzZSgpLnN1YnN0cmluZygyKTtcbiAgICAgIGRvbS5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgbmV4dFByb3BzW25hbWVdKTtcbiAgICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaWRhY3QvZG9tLXV0aWxzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==