var _templateObject = _taggedTemplateLiteralLoose(
    [
      '\n  && {\n    transform-origin: bottom right;\n    pointer-events: auto;\n    width: ',
      ';\n    height: ',
      ';\n    max-width: ',
      ';\n    max-height: ',
      ';\n    background: none;\n    display: flex;\n    flex-flow: column nowrap;\n    overflow: hidden;\n    position: absolute;\n    bottom: 48px;\n    right: 48px;\n\n    ',
      ';\n  }\n',
    ],
    [
      '\n  && {\n    transform-origin: bottom right;\n    pointer-events: auto;\n    width: ',
      ';\n    height: ',
      ';\n    max-width: ',
      ';\n    max-height: ',
      ';\n    background: none;\n    display: flex;\n    flex-flow: column nowrap;\n    overflow: hidden;\n    position: absolute;\n    bottom: 48px;\n    right: 48px;\n\n    ',
      ';\n  }\n',
    ]
  ),
  _templateObject2 = _taggedTemplateLiteralLoose(
    [
      '\n      width: calc(100% - 48px);\n      height: calc(100% - 48px);\n      position: absolute;\n      top: 24px;\n      left: 24px;\n      max-width: none;\n      max-height: none;\n    ',
    ],
    [
      '\n      width: calc(100% - 48px);\n      height: calc(100% - 48px);\n      position: absolute;\n      top: 24px;\n      left: 24px;\n      max-width: none;\n      max-height: none;\n    ',
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
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

import Zoom from '@material-ui/core/Zoom';
// Components
import Header from './Header';
import ChatWindow from './ChatWindow';
import UserInput from './UserInput';
import ButtonBar from './ButtonBar';
import ErrorBar from './ErrorBar';

// Redux
import { connect } from 'react-redux';

import { media } from './styles/media';

var OuterFrame = styled(Paper)(
  _templateObject,
  function(p) {
    return p.fullscreen ? 'calc(100% - 96px)' : '65%';
  },
  function(p) {
    return p.fullscreen ? 'calc(100% - 96px)' : '60%';
  },
  function(p) {
    return p.fullscreen ? '' : '700px';
  },
  function(p) {
    return p.fullscreen ? '' : '1000px';
  },
  media.phone(_templateObject2)
);

var ChatContainer = (function(_PureComponent) {
  _inherits(ChatContainer, _PureComponent);

  function ChatContainer() {
    _classCallCheck(this, ChatContainer);

    return _possibleConstructorReturn(
      this,
      _PureComponent.apply(this, arguments)
    );
  }

  ChatContainer.prototype.render = function render() {
    var _props = this.props,
      windowVisible = _props.windowVisible,
      fullscreen = _props.fullscreen;

    return React.createElement(
      Zoom,
      { in: windowVisible },
      React.createElement(
        OuterFrame,
        { elevation: 6, fullscreen: fullscreen ? 1 : 0 },
        React.createElement(Header, null),
        React.createElement(ChatWindow, null),
        React.createElement(ButtonBar, null),
        React.createElement(ErrorBar, null),
        React.createElement(UserInput, null)
      )
    );
  };

  return ChatContainer;
})(PureComponent);

var mapStateToProps = function mapStateToProps(state) {
  return {
    windowVisible: state.config.windowVisible,
    fullscreen: state.config.fullscreen,
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatContainer);
