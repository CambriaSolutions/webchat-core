'use strict';

exports.__esModule = true;

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Chat = require('@material-ui/icons/Chat');

var _Chat2 = _interopRequireDefault(_Chat);

var _reactRedux = require('react-redux');

var _initialization = require('./actions/initialization');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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

// Redux

var Btn = (0, _styledComponents2.default)(_Button2.default)(
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

    return _react2.default.createElement(
      Btn,
      {
        variant: 'fab',
        onClick: showWindow,
        active: windowVisible ? 0 : 1,
        theme: theme,
      },
      _react2.default.createElement(_Chat2.default, null)
    );
  };

  return ActivatorButton;
})(_react.PureComponent);

var mapStateToProps = function mapStateToProps(state) {
  return {
    windowVisible: state.config.windowVisible,
    theme: state.config.theme,
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    showWindow: function showWindow() {
      dispatch((0, _initialization.showWindow)());
    },
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(
  ActivatorButton
);
module.exports = exports['default'];
