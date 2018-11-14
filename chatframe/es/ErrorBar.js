var _templateObject = _taggedTemplateLiteralLoose(
  [
    '\n  width: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  align-items: center;\n  padding: ',
    ';\n  background: ',
    ';\n  border-top: ',
    ';\n  color: ',
    ';\n',
  ],
  [
    '\n  width: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  align-items: center;\n  padding: ',
    ';\n  background: ',
    ';\n  border-top: ',
    ';\n  color: ',
    ';\n',
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
import { connect } from 'react-redux';
import styled from 'styled-components';

var Container = styled.div(
  _templateObject,
  function(p) {
    return p.visible ? '24px 16px' : '0 16px';
  },
  function(p) {
    return p.theme.palette.error.light;
  },
  function(p) {
    return p.visible ? '1px solid ' + p.theme.palette.error.main : 'none';
  },
  function(p) {
    return p.theme.palette.error.dark;
  }
);

var ErrorBar = (function(_PureComponent) {
  _inherits(ErrorBar, _PureComponent);

  function ErrorBar() {
    _classCallCheck(this, ErrorBar);

    return _possibleConstructorReturn(
      this,
      _PureComponent.apply(this, arguments)
    );
  }

  ErrorBar.prototype.render = function render() {
    var _props = this.props,
      error = _props.error,
      theme = _props.theme;

    return React.createElement(
      Container,
      { visible: error !== '', theme: theme },
      error
    );
  };

  return ErrorBar;
})(PureComponent);

var mapStateToProps = function mapStateToProps(state) {
  return {
    error: state.error,
    theme: state.config.theme,
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorBar);
