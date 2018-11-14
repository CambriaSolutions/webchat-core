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

import * as t from '../actions/actionTypes';
import { createMuiTheme } from '@material-ui/core/styles';

// Colors
import pink from '@material-ui/core/colors/pink';
import blue from '@material-ui/core/colors/blue';

var defaultTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
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

export default config;
