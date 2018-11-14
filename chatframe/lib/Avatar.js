'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(
  [
    '\n  && {\n    ',
    ' height: 36px;\n    width: 42px;\n    height: 42px;\n    min-width: 42px;\n    border-radius: 50%;\n    margin: ',
    ';\n    order: ',
    ';\n    background-color: #fff;\n    background-image: ',
    ';\n    background-position: center;\n    background-size: 80%;\n    background-repeat: no-repeat;\n  }\n',
  ],
  [
    '\n  && {\n    ',
    ' height: 36px;\n    width: 42px;\n    height: 42px;\n    min-width: 42px;\n    border-radius: 50%;\n    margin: ',
    ';\n    order: ',
    ';\n    background-color: #fff;\n    background-image: ',
    ';\n    background-position: center;\n    background-size: 80%;\n    background-repeat: no-repeat;\n  }\n',
  ]
);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _grey = require('@material-ui/core/colors/grey');

var _grey2 = _interopRequireDefault(_grey);

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

// Colors

var Container = (0, _styledComponents2.default)(_Paper2.default)(
  _templateObject,
  function(p) {
    return p.entity === 'user' ? 'display: none;' : '';
  },
  function(p) {
    return p.entity === 'user' ? '0 0 0 16px' : '0 16px 0 0';
  },
  function(p) {
    return p.entity === 'user' ? 1 : 0;
  },
  function(p) {
    return p.avatar ? 'url(' + p.avatar + ')' : _grey2.default['400'];
  }
);

var Avatar = (function(_PureComponent) {
  _inherits(Avatar, _PureComponent);

  function Avatar() {
    _classCallCheck(this, Avatar);

    return _possibleConstructorReturn(
      this,
      _PureComponent.apply(this, arguments)
    );
  }

  Avatar.prototype.render = function render() {
    var _props = this.props,
      entity = _props.entity,
      avatar = _props.avatar;

    return _react2.default.createElement(Container, {
      entity: entity,
      avatar: avatar,
    });
  };

  return Avatar;
})(_react.PureComponent);

exports.default = Avatar;
module.exports = exports['default'];
