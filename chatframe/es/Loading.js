var _templateObject = _taggedTemplateLiteralLoose(
    [
      '\n  text-align: center;\n  width: 42px;\n  height: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-around;\n  align-items: center;\n',
    ],
    [
      '\n  text-align: center;\n  width: 42px;\n  height: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-around;\n  align-items: center;\n',
    ]
  ),
  _templateObject2 = _taggedTemplateLiteralLoose(
    [
      '\n  animation: dot-keyframes 1s infinite ease-in-out;\n  background-color: ',
      ';\n  border-radius: 10px;\n  display: inline-block;\n  height: 8px;\n  width: 8px;\n\n  &:nth-child(2) {\n    animation-delay: 0.25s;\n  }\n\n  &:nth-child(3) {\n    animation-delay: 0.5s;\n  }\n\n  @keyframes dot-keyframes {\n    0% {\n      opacity: 0.4;\n      transform: scale(1, 1);\n    }\n\n    50% {\n      opacity: 1;\n      transform: scale(1.3, 1.3);\n    }\n\n    100% {\n      opacity: 0.4;\n      transform: scale(1, 1);\n    }\n  }\n',
    ],
    [
      '\n  animation: dot-keyframes 1s infinite ease-in-out;\n  background-color: ',
      ';\n  border-radius: 10px;\n  display: inline-block;\n  height: 8px;\n  width: 8px;\n\n  &:nth-child(2) {\n    animation-delay: 0.25s;\n  }\n\n  &:nth-child(3) {\n    animation-delay: 0.5s;\n  }\n\n  @keyframes dot-keyframes {\n    0% {\n      opacity: 0.4;\n      transform: scale(1, 1);\n    }\n\n    50% {\n      opacity: 1;\n      transform: scale(1.3, 1.3);\n    }\n\n    100% {\n      opacity: 0.4;\n      transform: scale(1, 1);\n    }\n  }\n',
    ]
  );

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === 'object' || typeof call === 'function')
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

function _taggedTemplateLiteralLoose(strings, raw) {
  strings.raw = raw;
  return strings;
}

import React, { PureComponent } from 'react';
import styled from 'styled-components';

// Colors
import green from '@material-ui/core/colors/green';

var Container = styled.div(_templateObject);

var Dot = styled.div(_templateObject2, green[900]);

var Loading = (function(_PureComponent) {
  _inherits(Loading, _PureComponent);

  function Loading() {
    _classCallCheck(this, Loading);

    return _possibleConstructorReturn(
      this,
      _PureComponent.apply(this, arguments)
    );
  }

  Loading.prototype.render = function render() {
    return React.createElement(
      Container,
      null,
      React.createElement(Dot, null),
      React.createElement(Dot, null),
      React.createElement(Dot, null)
    );
  };

  return Loading;
})(PureComponent);

export default Loading;
