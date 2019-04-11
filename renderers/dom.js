"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("../styles/index.scss");

var _App = _interopRequireDefault(require("../components/App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom.default.hydrate(_react.default.createElement(_App.default, {
  initialData: window.__R_DATA.initialData
}), document.getElementById('root'));