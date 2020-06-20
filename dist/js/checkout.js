(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _radioButtonSelect = _interopRequireDefault(require("./includes/radioButtonSelect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import modules
(0, _radioButtonSelect["default"])();

},{"./includes/radioButtonSelect":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addEvent = addEvent;

function addEvent(el, ev, cb) {
  el.addEventListener(ev, cb);
}

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RadioSelect;

var _Functions = require("./Functions");

// import modules
// select elements
var labels = document.querySelectorAll('.checkout-details .payment-options label'); // checkout module

function RadioSelect() {
  labels.forEach(function (label) {
    (0, _Functions.addEvent)(label, 'click', function (event) {
      console.log('good event click');
    });
  });
}

},{"./Functions":2}]},{},[1]);
