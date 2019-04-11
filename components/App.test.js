"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('StarMatch', () => {
  it('renders correctly', () => {
    const tree = _reactTestRenderer.default.create(_react.default.createElement(_App.default, null)).toJSON();

    expect(tree).toMatchSnapshot();
  });
});