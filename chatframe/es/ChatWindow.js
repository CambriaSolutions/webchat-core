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
import filter from 'lodash/filter';

// Components
import Message from './Message';
import CardResponse from './CardResponse';

// Date Format
import { sysTimeFormat } from './config/dateFormats';
import {
  parse,
  format,
  addMilliseconds,
  differenceInMilliseconds,
} from 'date-fns';

var Container = styled.div(_templateObject, function(p) {
  return p.theme.palette.grey[200];
});

var MessagesContainer = styled.div(_templateObject2);

function buildUserMessages(messages) {
  var userMessages = filter(messages, ['entity', 'user']);
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
      element: React.createElement(Message, {
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
    element: React.createElement(Message, {
      key: 'loading',
      entity: 'bot',
      timestamp: message.systemTime,
      isLoading: message.loading + format(new Date(), sysTimeFormat),
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
      var sysTime = parse(
        message.systemTime,
        sysTimeFormat,
        new Date(message.systemTime)
      );
      elements.push({
        systemTime: format(addMilliseconds(sysTime, key * 10), sysTimeFormat),
        element: React.createElement(Message, {
          message: subMessage.text,
          entity: message.entity,
          key: message.messageId + key + format(new Date(), sysTimeFormat),
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
        element: React.createElement(CardResponse, {
          data: subMessage.card,
          timestamp: message.systemTime,
          key: message.messageId + key + format(new Date(), sysTimeFormat),
        }),
      });
    }
  }
  return elements;
}

function buildBotMessages(messages) {
  var botMessages = filter(messages, ['entity', 'bot']);
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

    _this.chatWindowRef = React.createRef();
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
      var dateA = parse(a.systemTime, sysTimeFormat, new Date(a.systemTime));
      var dateB = parse(b.systemTime, sysTimeFormat, new Date(a.systemTime));
      var diff = differenceInMilliseconds(dateA, dateB);
      return diff;
    });
    var elements = messageElements.map(function(m) {
      return m.element;
    });
    return React.createElement(
      Container,
      {
        innerRef: this.chatWindowRef,
        theme: theme,
        elevation: 1,
        square: true,
      },
      React.createElement(MessagesContainer, null, elements)
    );
  };

  return ChatWindow;
})(PureComponent);

var mapStateToProps = function mapStateToProps(state) {
  return {
    messages: state.conversation.messages,
    theme: state.config.theme,
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatWindow);
