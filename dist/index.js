"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

class TimedoutError extends Error {
  constructor(error, ms) {
    super(`Timedout within ${ms}ms`);
    this.error = error;
  }

}

const timedoutPromiseError = function timedoutPromiseError(promise) {
  let ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  let error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  let timedoutError = new TimedoutError(error, ms);
  let timeout = new Promise((resolve, reject) => {
    let id = setTimeout(() => {
      clearTimeout(id);
      reject((0, _objectSpread2.default)({}, timedoutError.error, {
        stack: timedoutError.stack
      }));
    }, ms);
  });
  return Promise.race([promise, timeout]);
};

var _default = timedoutPromiseError;
exports.default = _default;
module.exports = exports.default;