'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(
    [
      '\n  /* box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12); */\n  position: relative;\n  padding: 0 16px 16px 16px;\n  overflow-y: auto;\n  height: 100%;\n  background: ',
      ';\n  display: flex;\n  flex-direction: column-reverse;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n',
    ],
    [
      '\n  /* box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12); */\n  position: relative;\n  padding: 0 16px 16px 16px;\n  overflow-y: auto;\n  height: 100%;\n  background: ',
      ';\n  display: flex;\n  flex-direction: column-reverse;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n',
    ]
  ),
  _templateObject2 = _taggedTemplateLiteralLoose(
    [
      '\n  flex: 1 0 auto;\n  min-height: min-content;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-end;\n  min-height: 100%;\n  height: auto;\n',
    ],
    [
      '\n  flex: 1 0 auto;\n  min-height: min-content;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-end;\n  min-height: 100%;\n  height: auto;\n',
    ]
  );

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _filter = require('lodash/filter');

var _filter2 = _interopRequireDefault(_filter);

var _Message = require('./Message');

var _Message2 = _interopRequireDefault(_Message);

var _CardResponse = require('./CardResponse');

var _CardResponse2 = _interopRequireDefault(_CardResponse);

var _dateFormats = require('./config/dateFormats');

var _dateFns = require('date-fns');

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

// Date Format

var Container = _styledComponents2.default.div(_templateObject, function(p) {
  return p.theme.palette.grey[200];
});

var MessagesContainer = _styledComponents2.default.div(_templateObject2);

function buildUserMessages(messages) {
  var userMessages = (0, _filter2.default)(messages, ['entity', 'user']);
  var conversationElements = [];
  for (
    var _iterator = userMessages,
      _isArray = Array.isArray(_iterator),
      _i = 0,
      _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();
    ;

  ) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var message = _ref;

    conversationElements.push({
      systemTime: message.systemTime,
      element: _react2.default.createElement(_Message2.default, {
        message: message.text,
        entity: message.entity,
        key: message.messageId,
        timestamp: message.systemTime,
      }),
    });
  }
  return conversationElements;
}

function buildLoadingMessage(message) {
  return {
    systemTime: message.systemTime,
    element: _react2.default.createElement(_Message2.default, {
      key: 'loading',
      entity: 'bot',
      timestamp: message.systemTime,
      isLoading:
        message.loading +
        (0, _dateFns.format)(new Date(), _dateFormats.sysTimeFormat),
    }),
  };
}

function buildTextMessages(message) {
  var elements = [];
  for (var key in message.responses) {
    var subMessage = message.responses[key];
    if (subMessage.type === 'text') {
      // We add key*10 milliseconds to each text message to ensure that they
      // display in the correct order. They arrive in the same response from
      // the provider, which has a single timestamp for all subMessages. This
      // allows them to be differentiated and sorted.
      var sysTime = (0, _dateFns.parse)(
        message.systemTime,
        _dateFormats.sysTimeFormat,
        new Date(message.systemTime)
      );
      elements.push({
        systemTime: (0, _dateFns.format)(
          (0, _dateFns.addMilliseconds)(sysTime, key * 10),
          _dateFormats.sysTimeFormat
        ),
        element: _react2.default.createElement(_Message2.default, {
          message: subMessage.text,
          entity: message.entity,
          key:
            message.messageId +
            key +
            (0, _dateFns.format)(new Date(), _dateFormats.sysTimeFormat),
          isLoading: false,
          timestamp: message.systemTime,
        }),
      });
    }
  }
  return elements;
}

function buildCardMessages(message) {
  var elements = [];
  for (var key in message.responses) {
    var subMessage = message.responses[key];
    if (subMessage.type === 'card') {
      elements.push({
        systemTime: message.systemTime,
        element: _react2.default.createElement(_CardResponse2.default, {
          data: subMessage.card,
          timestamp: message.systemTime,
          key:
            message.messageId +
            key +
            (0, _dateFns.format)(new Date(), _dateFormats.sysTimeFormat),
        }),
      });
    }
  }
  return elements;
}

function buildBotMessages(messages) {
  var botMessages = (0, _filter2.default)(messages, ['entity', 'bot']);
  var conversationElements = [];

  for (
    var _iterator2 = botMessages,
      _isArray2 = Array.isArray(_iterator2),
      _i2 = 0,
      _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();
    ;

  ) {
    var _ref2;

    if (_isArray2) {
      if (_i2 >= _iterator2.length) break;
      _ref2 = _iterator2[_i2++];
    } else {
      _i2 = _iterator2.next();
      if (_i2.done) break;
      _ref2 = _i2.value;
    }

    var message = _ref2;

    // Loading message
    if (message.loading) {
      conversationElements.push(buildLoadingMessage(message));
    } else {
      conversationElements = [].concat(
        conversationElements,
        buildTextMessages(message),
        buildCardMessages(message)
      );
    }
  }
  return conversationElements;
}

var ChatWindow = (function(_PureComponent) {
  _inherits(ChatWindow, _PureComponent);

  function ChatWindow(props) {
    _classCallCheck(this, ChatWindow);

    var _this = _possibleConstructorReturn(
      this,
      _PureComponent.call(this, props)
    );

    _this.chatWindowRef = _react2.default.createRef();
    return _this;
  }

  ChatWindow.prototype.componentDidUpdate = function componentDidUpdate(
    prevProps,
    prevState,
    snapshot
  ) {
    var chatWindowNode = this.chatWindowRef.current;
    // chatWindowNode.scrollTop = chatWindowNode.scrollHeight
  };

  ChatWindow.prototype.render = function render() {
    var _props = this.props,
      messages = _props.messages,
      theme = _props.theme;

    var botMessages = buildBotMessages(messages);
    var userMessages = buildUserMessages(messages);
    var messageElements = [].concat(botMessages, userMessages);
    // Sort all messages by systemTime
    messageElements.sort(function(a, b) {
      var dateA = (0, _dateFns.parse)(
        a.systemTime,
        _dateFormats.sysTimeFormat,
        new Date(a.systemTime)
      );
      var dateB = (0, _dateFns.parse)(
        b.systemTime,
        _dateFormats.sysTimeFormat,
        new Date(a.systemTime)
      );
      var diff = (0, _dateFns.differenceInMilliseconds)(dateA, dateB);
      return diff;
    });
    var elements = messageElements.map(function(m) {
      return m.element;
    });
    return _react2.default.createElement(
      Container,
      {
        innerRef: this.chatWindowRef,
        theme: theme,
        elevation: 1,
        square: true,
      },
      _react2.default.createElement(MessagesContainer, null, elements)
    );
  };

  return ChatWindow;
})(_react.PureComponent);

var mapStateToProps = function mapStateToProps(state) {
  return {
    messages: state.conversation.messages,
    theme: state.config.theme,
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(
  ChatWindow
);
module.exports = exports['default'];
