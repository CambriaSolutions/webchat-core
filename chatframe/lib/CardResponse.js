'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(
    ['\n  && {\n    margin: 16px auto;\n    white-space: pre-line;\n  }\n'],
    ['\n  && {\n    margin: 16px auto;\n    white-space: pre-line;\n  }\n']
  ),
  _templateObject2 = _taggedTemplateLiteralLoose(
    [
      '\n  && {\n    height: ',
      ';\n    background-size: cover;\n    background-position: center center;\n  }\n',
    ],
    [
      '\n  && {\n    height: ',
      ';\n    background-size: cover;\n    background-position: center center;\n  }\n',
    ]
  );

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Card = require('@material-ui/core/Card');

var _Card2 = _interopRequireDefault(_Card);

var _CardActions = require('@material-ui/core/CardActions');

var _CardActions2 = _interopRequireDefault(_CardActions);

var _CardContent = require('@material-ui/core/CardContent');

var _CardContent2 = _interopRequireDefault(_CardContent);

var _CardMedia = require('@material-ui/core/CardMedia');

var _CardMedia2 = _interopRequireDefault(_CardMedia);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

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

var CardContainer = (0, _styledComponents2.default)(_Card2.default)(
  _templateObject
);

var CardImage = (0, _styledComponents2.default)(_CardMedia2.default)(
  _templateObject2,
  function(p) {
    return p.image && p.image !== '' ? '200px' : '0px';
  }
);

var CardResponse = (function(_PureComponent) {
  _inherits(CardResponse, _PureComponent);

  function CardResponse() {
    _classCallCheck(this, CardResponse);

    return _possibleConstructorReturn(
      this,
      _PureComponent.apply(this, arguments)
    );
  }

  CardResponse.prototype.render = function render() {
    var _props$data = this.props.data,
      title = _props$data.title,
      subtitle = _props$data.subtitle,
      imageUrl = _props$data.imageUrl,
      buttons = _props$data.buttons;

    return _react2.default.createElement(
      CardContainer,
      null,
      _react2.default.createElement(CardImage, {
        image: encodeURI(imageUrl),
        title: '',
      }),
      _react2.default.createElement(
        _CardContent2.default,
        null,
        _react2.default.createElement(
          _Typography2.default,
          { gutterBottom: true, variant: 'headline', component: 'h2' },
          title
        ),
        _react2.default.createElement(
          _Typography2.default,
          { component: 'p' },
          subtitle
        )
      ),
      _react2.default.createElement(
        _CardActions2.default,
        null,
        buttons.map(function(b, index) {
          return _react2.default.createElement(
            _Button2.default,
            {
              href: b.postback,
              target: '_blank',
              size: 'small',
              color: 'primary',
              key:
                'card-' +
                index +
                (0, _dateFns.format)(new date(), 'MMDDYYYYhhmmssSSS'),
            },
            b.text
          );
        })
      )
    );
  };

  return CardResponse;
})(_react.PureComponent);

var mapStateToProps = function mapStateToProps(state) {
  return {
    inputValue: state.userInput,
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    saveUserInput: function saveUserInput(e) {},
    submitUserInput: function submitUserInput() {},
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(
  CardResponse
);
module.exports = exports['default'];
