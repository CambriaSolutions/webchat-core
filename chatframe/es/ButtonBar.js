var _templateObject = _taggedTemplateLiteralLoose(
    [
      '\n  width: 100%;\n  flex: 1 0 auto;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n  align-items: center;\n  align-content: center;\n  padding: ',
      ';\n  background: ',
      ';\n',
    ],
    [
      '\n  width: 100%;\n  flex: 1 0 auto;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n  align-items: center;\n  align-content: center;\n  padding: ',
      ';\n  background: ',
      ';\n',
    ]
  ),
  _templateObject2 = _taggedTemplateLiteralLoose(
    [
      '\n  && {\n    border-color: ',
      ';\n    color: ',
      ';\n    margin: 8px;\n    display: ',
      ';\n    &:hover {\n      /* background: ',
      '; */\n      background-color: ',
      ';\n\n    border-color: ',
      ';\n    }\n  }\n',
    ],
    [
      '\n  && {\n    border-color: ',
      ';\n    color: ',
      ';\n    margin: 8px;\n    display: ',
      ';\n    &:hover {\n      /* background: ',
      '; */\n      background-color: ',
      ';\n\n    border-color: ',
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
import { connect } from 'react-redux';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { fade } from '@material-ui/core/styles/colorManipulator';
import findLast from 'lodash/findLast';
import find from 'lodash/find';
import { sendQuickReply as _sendQuickReply } from './actions/conversation';

var Container = styled.div(
  _templateObject,
  function(p) {
    return p.visible ? '8px 8px' : '0 8px';
  },
  function(p) {
    return p.theme.palette.grey[100];
  }
);

var Btn = styled(Button)(
  _templateObject2,
  function(p) {
    return p.theme.palette.secondary.main;
  },
  function(p) {
    return p.theme.palette.secondary.main;
  },
  function(p) {
    return p.visible === 'true' ? 'block' : 'none';
  },
  function(p) {
    return p.theme.palette.secondary.dark;
  },
  function(p) {
    return fade(
      p.theme.palette.secondary.main,
      p.theme.palette.action.hoverOpacity
    );
  },
  function(p) {
    return p.theme.palette.secondary.main;
  }
);

var ButtonBar = (function(_PureComponent) {
  _inherits(ButtonBar, _PureComponent);

  function ButtonBar() {
    _classCallCheck(this, ButtonBar);

    return _possibleConstructorReturn(
      this,
      _PureComponent.apply(this, arguments)
    );
  }

  ButtonBar.prototype.render = function render() {
    var _props = this.props,
      visible = _props.visible,
      messages = _props.messages,
      sendQuickReply = _props.sendQuickReply,
      theme = _props.theme;

    var lastMessageWithSuggestions = findLast(messages, function(m) {
      var hasSuggestions = find(m.responses, ['type', 'suggestion'])
        ? true
        : false;
      return hasSuggestions;
    });

    var suggestionElements = [];
    if (lastMessageWithSuggestions) {
      var _messages = lastMessageWithSuggestions.responses.filter(function(m) {
        return m.type === 'suggestion';
      });
      for (
        var _iterator = _messages,
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

        for (
          var _iterator2 = message.suggestions,
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

          var suggestion = _ref2;

          suggestionElements.push({
            label: suggestion,
            id: lastMessageWithSuggestions.messageId,
            visible: visible,
          });
        }
      }
    }

    return React.createElement(
      Container,
      { visible: visible, theme: theme },
      suggestionElements.map(function(btn, index) {
        return React.createElement(
          Btn,
          {
            size: 'small',
            theme: theme,
            variant: 'outlined',
            color: 'secondary',
            key: btn.id + '-btn' + index,
            visible: btn.visible.toString(),
            onClick: function onClick() {
              return sendQuickReply(btn.label);
            },
          },
          btn.label
        );
      })
    );
  };

  return ButtonBar;
})(PureComponent);

var mapStateToProps = function mapStateToProps(state) {
  return {
    visible: state.buttonBar.visible,
    messages: state.conversation.messages,
    theme: state.config.theme,
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    sendQuickReply: function sendQuickReply(text) {
      dispatch(_sendQuickReply(text));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonBar);
