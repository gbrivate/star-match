"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _mathUtils = _interopRequireDefault(require("../../math-utils"));

var _UseGameState = _interopRequireDefault(require("./UseGameState"));

var _play = require("./play");

var _starsDisplay = require("./stars-display");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Game = props => {
  const {
    stars,
    availableNums,
    candidateNums,
    secondsLeft,
    setGameState
  } = (0, _UseGameState.default)();
  const candidatesAreWrong = _mathUtils.default.sum(candidateNums) > stars;
  const gameStatus = availableNums.length === 0 ? 'won' : secondsLeft === 0 ? 'lost' : 'active';

  const numberStatus = number => {
    if (!availableNums.includes(number)) {
      return 'used';
    }

    if (candidateNums.includes(number)) {
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }

    return 'available';
  };

  const onNumberClick = (number, currentStatus) => {
    if (currentStatus === 'used' || secondsLeft === 0) {
      return;
    }

    const newCandidateNums = currentStatus === 'available' ? candidateNums.concat(number) : candidateNums.filter(cn => cn !== number);
    setGameState(newCandidateNums);
  };

  return _react.default.createElement("div", {
    className: "game"
  }, _react.default.createElement("div", {
    className: "help"
  }, "Pick 1 or more numbers that sum to the number of stars"), _react.default.createElement("div", {
    className: "body"
  }, _react.default.createElement("div", {
    className: "left"
  }, gameStatus !== 'active' ? _react.default.createElement(_play.PlayAgain, {
    onClick: props.startNewGame,
    gameStatus: gameStatus
  }) : _react.default.createElement(_starsDisplay.StarsDisplay, {
    count: stars
  })), _react.default.createElement("div", {
    className: "right"
  }, _mathUtils.default.range(1, 9).map(number => _react.default.createElement(_play.PlayNumber, {
    key: number,
    status: numberStatus(number),
    number: number,
    onClick: onNumberClick
  })))), _react.default.createElement("div", {
    className: "timer"
  }, "Time Remaining: ", secondsLeft));
};

var _default = Game;
exports.default = _default;