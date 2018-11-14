'use strict';

exports.__esModule = true;

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _colorManipulator = require('@material-ui/core/styles/colorManipulator');

var _findLast = require('lodash/findLast');

var _findLast2 = _interopRequireDefault(_findLast);

var _find = require('lodash/find');

var _find2 = _interopRequireDefault(_find);

var _conversation = require('./actions/conversation');

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

var Container = _styledComponents2.default.div(
  _templateObject,
  function(p) {
    return p.visible ? '8px 8px' : '0 8px';
  },
  function(p) {
    return p.theme.palette.grey[100];
  }
);

var Btn = (0, _styledComponents2.default)(_Button2.default)(
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
    return (0, _colorManipulator.fade)(
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

    var lastMessageWithSuggestions = (0, _findLast2.default)(messages, function(
      m
    ) {
      var hasSuggestions = (0, _find2.default)(m.responses, [
        'type',
        'suggestion',
      ])
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

    return _react2.default.createElement(
      Container,
      { visible: visible, theme: theme },
      suggestionElements.map(function(btn, index) {
        return _react2.default.createElement(
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
})(_react.PureComponent);

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
      dispatch((0, _conversation.sendQuickReply)(text));
    },
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(
  ButtonBar
);
module.exports = exports['default'];
