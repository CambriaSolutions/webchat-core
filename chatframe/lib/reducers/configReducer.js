'use strict';

exports.__esModule = true;

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

// Colors

var _actionTypes = require('../actions/actionTypes');

var t = _interopRequireWildcard(_actionTypes);

var _styles = require('@material-ui/core/styles');

var _pink = require('@material-ui/core/colors/pink');

var _pink2 = _interopRequireDefault(_pink);

var _blue = require('@material-ui/core/colors/blue');

var _blue2 = _interopRequireDefault(_blue);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          newObj[key] = obj[key];
      }
    }
    newObj.default = obj;
    return newObj;
  }
}

var defaultTheme = (0, _styles.createMuiTheme)({
  palette: {
    primary: _blue2.default,
    secondary: _pink2.default,
  },
});

var initialState = {
  avatar: null,
  title: 'Chat Window',
  theme: defaultTheme,
  windowVisible: false,
  fullscreen: false,
};
function config() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : initialState;
  var action = arguments[1];

  switch (action.type) {
    case t.SET_AVATAR:
      if (action.avatar) {
        return _extends({}, state, { avatar: action.avatar });
      } else {
        return state;
      }

    case t.SET_TITLE:
      return _extends({}, state, { title: action.title });

    case t.CREATE_THEME:
      return _extends({}, state, { theme: action.theme });

    case t.SHOW_WINDOW:
      return _extends({}, state, { windowVisible: true });

    case t.HIDE_WINDOW:
      return _extends({}, state, { windowVisible: false });

    case t.FULLSCREEN:
      return _extends({}, state, { fullscreen: true });

    case t.WINDOWED:
      return _extends({}, state, { fullscreen: false });

    default:
      return state;
  }
}

exports.default = config;
module.exports = exports['default'];
