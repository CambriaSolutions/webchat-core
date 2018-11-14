'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(
    [
      '\n  && {\n    background: ',
      ';\n    padding: 16px;\n    color: ',
      ';\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    border-bottom-left-radius: 0px;\n    border-bottom-right-radius: 0px;\n    position: relative;\n    z-index: 1;\n  }\n',
    ],
    [
      '\n  && {\n    background: ',
      ';\n    padding: 16px;\n    color: ',
      ';\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    border-bottom-left-radius: 0px;\n    border-bottom-right-radius: 0px;\n    position: relative;\n    z-index: 1;\n  }\n',
    ]
  ),
  _templateObject2 = _taggedTemplateLiteralLoose(
    ['\n  flex: 0;\n'],
    ['\n  flex: 0;\n']
  ),
  _templateObject3 = _taggedTemplateLiteralLoose(
    ['\n  flex: 1;\n'],
    ['\n  flex: 1;\n']
  ),
  _templateObject4 = _taggedTemplateLiteralLoose(
    ['\n  font-size: 16px;\n  line-height: 16px;\n  padding-left: 16px;\n'],
    ['\n  font-size: 16px;\n  line-height: 16px;\n  padding-left: 16px;\n']
  ),
  _templateObject5 = _taggedTemplateLiteralLoose(
    [
      '\n  padding-top: 2px;\n  font-size: 10px;\n  line-height: 10px;\n  padding-left: 16px;\n',
    ],
    [
      '\n  padding-top: 2px;\n  font-size: 10px;\n  line-height: 10px;\n  padding-left: 16px;\n',
    ]
  ),
  _templateObject6 = _taggedTemplateLiteralLoose(
    [
      '\n  flex: 0;\n  cursor: pointer;\n  height: 28px;\n  color: ',
      ';\n  padding: 2px;\n  &:hover {\n    background: rgba(255, 255, 255, 0.24);\n  }\n',
    ],
    [
      '\n  flex: 0;\n  cursor: pointer;\n  height: 28px;\n  color: ',
      ';\n  padding: 2px;\n  &:hover {\n    background: rgba(255, 255, 255, 0.24);\n  }\n',
    ]
  );

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Fullscreen = require('@material-ui/icons/Fullscreen');

var _Fullscreen2 = _interopRequireDefault(_Fullscreen);

var _FullscreenExit = require('@material-ui/icons/FullscreenExit');

var _FullscreenExit2 = _interopRequireDefault(_FullscreenExit);

var _Close = require('@material-ui/icons/Close');

var _Close2 = _interopRequireDefault(_Close);

var _Chat = require('@material-ui/icons/Chat');

var _Chat2 = _interopRequireDefault(_Chat);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

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

var Container = (0, _styledComponents2.default)(_Paper2.default)(
  _templateObject,
  function(p) {
    return p.theme.palette.primary.dark;
  },
  function(p) {
    return p.theme.palette.getContrastText(p.theme.palette.primary.dark);
  }
);

var HeaderImage = _styledComponents2.default.div(_templateObject2);

var HeaderText = _styledComponents2.default.div(_templateObject3);

var PrimaryHeaderText = _styledComponents2.default.div(_templateObject4);

var SecondaryHeaderText = _styledComponents2.default.div(_templateObject5);

var HeaderButton = _styledComponents2.default.div(_templateObject6, function(
  p
) {
  return p.theme.palette.getContrastText(p.theme.palette.primary.dark);
});

var Header = (function(_PureComponent) {
  _inherits(Header, _PureComponent);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(
      this,
      _PureComponent.apply(this, arguments)
    );
  }

  Header.prototype.render = function render() {
    var _props = this.props,
      title = _props.title,
      timestamp = _props.timestamp,
      theme = _props.theme,
      hideWindow = _props.hideWindow,
      showWindowed = _props.showWindowed,
      showFullscreen = _props.showFullscreen,
      fullscreen = _props.fullscreen;

    return _react2.default.createElement(
      Container,
      { elevation: 3, theme: theme },
      _react2.default.createElement(
        HeaderImage,
        null,
        _react2.default.createElement(_Chat2.default, null)
      ),
      _react2.default.createElement(
        HeaderText,
        null,
        _react2.default.createElement(PrimaryHeaderText, null, title),
        _react2.default.createElement(
          SecondaryHeaderText,
          null,
          'Active ',
          timestamp
        )
      ),
      fullscreen
        ? _react2.default.createElement(
            HeaderButton,
            { theme: theme, onClick: showWindowed },
            _react2.default.createElement(_FullscreenExit2.default, null)
          )
        : _react2.default.createElement(
            HeaderButton,
            { theme: theme, onClick: showFullscreen },
            _react2.default.createElement(_Fullscreen2.default, null)
          ),
      _react2.default.createElement(
        HeaderButton,
        { theme: theme, onClick: hideWindow },
        _react2.default.createElement(_Close2.default, null)
      )
    );
  };

  return Header;
})(_react.PureComponent);

var mapStateToProps = function mapStateToProps(state) {
  return {
    title: state.config.title,
    timestamp: state.conversation.headerTime,
    theme: state.config.theme,
    fullscreen: state.config.fullscreen,
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    hideWindow: function hideWindow() {
      dispatch((0, _initialization.hideWindow)());
    },
    showFullscreen: function showFullscreen() {
      dispatch((0, _initialization.showFullscreen)());
    },
    showWindowed: function showWindowed() {
      dispatch((0, _initialization.showWindowed)());
    },
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(
  Header
);
module.exports = exports['default'];
