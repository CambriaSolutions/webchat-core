'use strict';

exports.__esModule = true;

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Zoom = require('@material-ui/core/Zoom');

var _Zoom2 = _interopRequireDefault(_Zoom);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _ChatWindow = require('./ChatWindow');

var _ChatWindow2 = _interopRequireDefault(_ChatWindow);

var _UserInput = require('./UserInput');

var _UserInput2 = _interopRequireDefault(_UserInput);

var _ButtonBar = require('./ButtonBar');

var _ButtonBar2 = _interopRequireDefault(_ButtonBar);

var _ErrorBar = require('./ErrorBar');

var _ErrorBar2 = _interopRequireDefault(_ErrorBar);

var _reactRedux = require('react-redux');

var _media = require('./styles/media');

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
// Components

// Redux

var OuterFrame = (0, _styledComponents2.default)(_Paper2.default)(
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
  _media.media.phone(_templateObject2)
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

    return _react2.default.createElement(
      _Zoom2.default,
      { in: windowVisible },
      _react2.default.createElement(
        OuterFrame,
        { elevation: 6, fullscreen: fullscreen ? 1 : 0 },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(_ChatWindow2.default, null),
        _react2.default.createElement(_ButtonBar2.default, null),
        _react2.default.createElement(_ErrorBar2.default, null),
        _react2.default.createElement(_UserInput2.default, null)
      )
    );
  };

  return ChatContainer;
})(_react.PureComponent);

var mapStateToProps = function mapStateToProps(state) {
  return {
    windowVisible: state.config.windowVisible,
    fullscreen: state.config.fullscreen,
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(
  ChatContainer
);
module.exports = exports['default'];
