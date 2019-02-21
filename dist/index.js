"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

var TimedoutError =
/*#__PURE__*/
function (_Error) {
  (0, _inherits2.default)(TimedoutError, _Error);

  function TimedoutError(error, ms) {
    var _this;

    (0, _classCallCheck2.default)(this, TimedoutError);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TimedoutError).call(this, "Timedout within ".concat(ms, "ms")));
    _this.error = error;
    return _this;
  }

  return TimedoutError;
}((0, _wrapNativeSuper2.default)(Error));

var timedoutPromiseError = function timedoutPromiseError(promise) {
  var ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var timedoutError = new TimedoutError(error, ms);
  var timeout = new Promise(function (resolve, reject) {
    var id = setTimeout(function () {
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