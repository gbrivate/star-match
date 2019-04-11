"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _mathUtils = _interopRequireDefault(require("../../math-utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useGameState = () => {
  const [stars, setStars] = (0, _react.useState)(_mathUtils.default.random(1, 9));
  const [availableNums, setAvailableNums] = (0, _react.useState)(_mathUtils.default.range(1, 9));
  const [candidateNums, setCandidateNums] = (0, _react.useState)([]);
  const [secondsLeft, setSecondsLeft] = (0, _react.useState)(10);
  (0, _react.useEffect)(() => {
    if (secondsLeft > 0 && availableNums.length > 0) {
      const timerId = setTimeout(() => setSecondsLeft(secondsLeft - 1), 1000);
      return () => clearTimeout(timerId);
    }
  });

  const setGameState = newCandidateNums => {
    if (_mathUtils.default.sum(newCandidateNums) !== stars) {
      setCandidateNums(newCandidateNums);
    } else {
      const newAvailableNums = availableNums.filter(n => !newCandidateNums.includes(n));
      setStars(_mathUtils.default.randomSumIn(newAvailableNums, 9));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }
  };

  return {
    stars,
    availableNums,
    candidateNums,
    secondsLeft,
    setGameState
  };
};

var _default = useGameState;
exports.default = _default;