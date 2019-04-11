"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Game: true
};
Object.defineProperty(exports, "Game", {
  enumerable: true,
  get: function () {
    return _Game.default;
  }
});

var _Game = _interopRequireDefault(require("./Game"));

var _play = require("./play");

Object.keys(_play).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _play[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }