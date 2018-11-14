var _templateObject = _taggedTemplateLiteralLoose(
  [
    '\n  && {\n    display: ',
    ';\n    position: absolute;\n    bottom: 48px;\n    right: 48px;\n    pointer-events: auto;\n    padding-top: 8px;\n    background: ',
    ';\n    color: ',
    ';\n    &:hover {\n      background: ',
    ';\n      color: ',
    ';\n    }\n  }\n',
  ],
  [
    '\n  && {\n    display: ',
    ';\n    position: absolute;\n    bottom: 48px;\n    right: 48px;\n    pointer-events: auto;\n    padding-top: 8px;\n    background: ',
    ';\n    color: ',
    ';\n    &:hover {\n      background: ',
    ';\n      color: ',
    ';\n    }\n  }\n',
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
import Button from '@material-ui/core/Button';
import Chat from '@material-ui/icons/Chat';

// Redux
import { connect } from 'react-redux';
import { showWindow as _showWindow } from './actions/initialization';

var Btn = styled(Button)(
  _templateObject,
  function(p) {
    return p.active ? 'block' : 'none';
  },
  function(p) {
    return p.theme.palette.primary.main;
  },
  function(p) {
    return p.theme.palette.getContrastText(p.theme.palette.primary.main);
  },
  function(p) {
    return p.theme.palette.primary.dark;
  },
  function(p) {
    return p.theme.palette.getContrastText(p.theme.palette.primary.dark);
  }
);

var ActivatorButton = (function(_PureComponent) {
  _inherits(ActivatorButton, _PureComponent);

  function ActivatorButton() {
    _classCallCheck(this, ActivatorButton);

    return _possibleConstructorReturn(
      this,
      _PureComponent.apply(this, arguments)
    );
  }

  ActivatorButton.prototype.render = function render() {
    var _props = this.props,
      windowVisible = _props.windowVisible,
      showWindow = _props.showWindow,
      theme = _props.theme;

    return React.createElement(
      Btn,
      {
        variant: 'fab',
        onClick: showWindow,
        active: windowVisible ? 0 : 1,
        theme: theme,
      },
      React.createElement(Chat, null)
    );
  };

  return ActivatorButton;
})(PureComponent);

var mapStateToProps = function mapStateToProps(state) {
  return {
    windowVisible: state.config.windowVisible,
    theme: state.config.theme,
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    showWindow: function showWindow() {
      dispatch(_showWindow());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivatorButton);
