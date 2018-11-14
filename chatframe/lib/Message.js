'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(
    [
      '\n  display: flex;\n  flex-flow: column nowrap;\n  margin-top: 24px;\n  min-height: 32px;\n  align-items: ',
      ';\n',
    ],
    [
      '\n  display: flex;\n  flex-flow: column nowrap;\n  margin-top: 24px;\n  min-height: 32px;\n  align-items: ',
      ';\n',
    ]
  ),
  _templateObject2 = _taggedTemplateLiteralLoose(
    [
      '\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: ',
      ';\n',
    ],
    [
      '\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: ',
      ';\n',
    ]
  ),
  _templateObject3 = _taggedTemplateLiteralLoose(
    [
      '\n  && {\n    background: #fff;\n    border-radius: 3px;\n    font-size: 16px;\n    line-height: 1.2rem;\n    padding: 12px;\n    position: relative;\n    color: ',
      ";\n    max-width: 85%;\n\n    &:after {\n      content: '\0a0';\n      height: 10px;\n      width: 10px;\n      position: absolute;\n      transform: rotate(-45deg);\n      top: 16px;\n      left: -6px;\n      background-color: #fff;\n      border-top: 1px solid ",
      ';\n      border-left: 1px solid ',
      ';\n    }\n  }\n',
    ],
    [
      '\n  && {\n    background: #fff;\n    border-radius: 3px;\n    font-size: 16px;\n    line-height: 1.2rem;\n    padding: 12px;\n    position: relative;\n    color: ',
      ";\n    max-width: 85%;\n\n    &:after {\n      content: '\\00a0';\n      height: 10px;\n      width: 10px;\n      position: absolute;\n      transform: rotate(-45deg);\n      top: 16px;\n      left: -6px;\n      background-color: #fff;\n      border-top: 1px solid ",
      ';\n      border-left: 1px solid ',
      ';\n    }\n  }\n',
    ]
  ),
  _templateObject4 = _taggedTemplateLiteralLoose(
    [
      '\n  && {\n    background-color: ',
      ';\n    border-radius: 3px;\n    font-size: 16px;\n    line-height: 1.2rem;\n    padding: 12px;\n    width: auto;\n    position: relative;\n    color: ',
      ";\n    max-width: 85%;\n\n    &:after {\n      content: '';\n      height: 10px;\n      width: 10px;\n      position: absolute;\n      transform: rotate(-45deg);\n      top: 16px;\n      right: -6px;\n      background-color: ",
      ';\n      border-bottom: 1px solid ',
      ';\n      border-right: 1px solid ',
      ';\n    }\n  }\n',
    ],
    [
      '\n  && {\n    background-color: ',
      ';\n    border-radius: 3px;\n    font-size: 16px;\n    line-height: 1.2rem;\n    padding: 12px;\n    width: auto;\n    position: relative;\n    color: ',
      ";\n    max-width: 85%;\n\n    &:after {\n      content: '';\n      height: 10px;\n      width: 10px;\n      position: absolute;\n      transform: rotate(-45deg);\n      top: 16px;\n      right: -6px;\n      background-color: ",
      ';\n      border-bottom: 1px solid ',
      ';\n      border-right: 1px solid ',
      ';\n    }\n  }\n',
    ]
  ),
  _templateObject5 = _taggedTemplateLiteralLoose(
    [
      '\n  font-size: 12px;\n  color: ',
      ';\n  margin-top: 8px;\n  padding-left: 62px;\n  padding-right: 2px;\n',
    ],
    [
      '\n  font-size: 12px;\n  color: ',
      ';\n  margin-top: 8px;\n  padding-left: 62px;\n  padding-right: 2px;\n',
    ]
  );

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _dateFns = require('date-fns');

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Avatar = require('./Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Loading = require('./Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _grey = require('@material-ui/core/colors/grey');

var _grey2 = _interopRequireDefault(_grey);

var _dateFormats = require('./config/dateFormats');

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

// Colors

// Date Format

var Container = _styledComponents2.default.div(_templateObject, function(p) {
  return p.entity === 'user' ? 'flex-end' : 'flex-start';
});

var ChatBubble = _styledComponents2.default.div(_templateObject2, function(p) {
  return p.entity === 'user' ? 'flex-end' : 'flex-start';
});

var ExternalMessage = (0, _styledComponents2.default)(_Paper2.default)(
  _templateObject3,
  _grey2.default[900],
  _grey2.default[400],
  _grey2.default[400]
);

var UserMessage = (0, _styledComponents2.default)(_Paper2.default)(
  _templateObject4,
  _grey2.default[400],
  _grey2.default[900],
  _grey2.default[400],
  _grey2.default[300],
  _grey2.default[300]
);

var Timestamp = _styledComponents2.default.div(
  _templateObject5,
  _grey2.default[500]
);

var MS_PER_SEC = 1000;
var MS_PER_MIN = 1000 * 60;
var MS_PER_HR = 1000 * 60 * 60;
var MS_PER_DAY = 1000 * 60 * 60 * 24;

// a and b are javascript Date objects
function dateDiff(firstDate, secondDate) {
  var dateDiff =
    arguments.length > 2 && arguments[2] !== undefined
      ? arguments[2]
      : MS_PER_SEC;

  // Discard the time and time-zone information for easyness
  var a = new Date(firstDate);
  var b = new Date(secondDate);
  var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / dateDiff);
}

var Message = (function(_PureComponent) {
  _inherits(Message, _PureComponent);

  function Message() {
    _classCallCheck(this, Message);

    return _possibleConstructorReturn(
      this,
      _PureComponent.apply(this, arguments)
    );
  }

  Message.prototype.render = function render() {
    var _props = this.props,
      message = _props.message,
      entity = _props.entity,
      avatar = _props.avatar,
      isLoading = _props.isLoading,
      timestamp = _props.timestamp,
      currentTime = _props.currentTime;

    console.log('timestamp: ' + timestamp);
    console.log('current: ' + currentTime);
    var now = Date(currentTime);
    var then = Date(currentTime + timestamp);
    console.log(now + ' and ' + then);
    var diffMinutes = dateDiff(
      currentTime,
      currentTime + timestamp,
      MS_PER_SEC
    );
    var diffSeconds = dateDiff(
      currentTime,
      currentTime + timestamp,
      MS_PER_MIN
    );
    console.log(diffMinutes, diffSeconds);

    // const diffMinutes = differenceInMinutes(now, then)
    //  const diffSeconds = differenceInSeconds(now, then)
    var formattedTimestamp = null;
    if (diffMinutes >= 1) {
      formattedTimestamp = diffMinutes + ' min';
    } else if (diffSeconds >= 10) {
      formattedTimestamp = diffSeconds + ' sec';
    } else {
      formattedTimestamp = 'Now';
    }

    var chatMessage =
      entity === 'user'
        ? _react2.default.createElement(UserMessage, { elevation: 1 }, message)
        : _react2.default.createElement(
            ExternalMessage,
            { elevation: 1 },
            isLoading
              ? _react2.default.createElement(_Loading2.default, null)
              : message
          );
    return _react2.default.createElement(
      Container,
      { entity: entity },
      _react2.default.createElement(
        ChatBubble,
        { entity: entity },
        _react2.default.createElement(_Avatar2.default, {
          entity: entity,
          avatar: avatar,
        }),
        chatMessage
      ),
      _react2.default.createElement(Timestamp, null, formattedTimestamp)
    );
  };

  return Message;
})(_react.PureComponent);

var mapStateToProps = function mapStateToProps(state) {
  return {
    avatar: state.config.avatar,
    currentTime: state.conversation.currentTime,
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(
  Message
);
module.exports = exports['default'];
