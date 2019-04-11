"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PlayAgain = props => _react.default.createElement("div", {
  className: "game-done"
}, _react.default.createElement("div", {
  className: "message",
  style: {
    color: props.gameStatus === 'lost' ? 'red' : 'green'
  }
}, props.gameStatus === 'lost' ? 'Game Over' : 'Nice'), _react.default.createElement("button", {
  onClick: props.onClick
}, "Play Again"));

var _default = PlayAgain;
exports.default = _default;