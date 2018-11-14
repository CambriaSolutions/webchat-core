'use strict';

exports.__esModule = true;
exports.initialize = initialize;
exports.startTimer = startTimer;
exports.showWindow = showWindow;
exports.hideWindow = hideWindow;
exports.showFullscreen = showFullscreen;
exports.showWindowed = showWindowed;

var _actionTypes = require('./actionTypes');

var _styles = require('@material-ui/core/styles');

var _conversation = require('./conversation');

var _dialogflow = require('./dialogflow');

var _colors = require('@material-ui/core/colors');

var colors = _interopRequireWildcard(_colors);

var _isHexColor = require('validator/lib/isHexColor');

var _isHexColor2 = _interopRequireDefault(_isHexColor);

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

function initialize(props) {
  return function(dispatch, getState) {
    var title = props.title,
      avatar = props.avatar,
      client = props.client,
      clientOptions = props.clientOptions,
      token = props.token,
      primaryColor = props.primaryColor,
      secondaryColor = props.secondaryColor,
      initialActive = props.initialActive,
      fullscreen = props.fullscreen;

    dispatch({ type: _actionTypes.SET_TITLE, title: title });
    dispatch({ type: _actionTypes.SET_AVATAR, avatar: avatar });
    dispatch((0, _conversation.setupClient)(client, clientOptions));
    dispatch(startTimer());
    dispatch((0, _dialogflow.sendEvent)('Welcome'));

    if (primaryColor || secondaryColor) {
      dispatch(createTheme(primaryColor, secondaryColor));
    }

    if (initialActive === true) {
      dispatch(showWindow());
    } else {
      dispatch(hideWindow());
    }

    if (fullscreen === true) {
      dispatch(showFullscreen());
    } else {
      dispatch(showWindowed());
    }
  };
}

function startTimer() {
  return function(dispatch, getState) {
    var timer = getState().conversation.timer;
    // If there's an existing timer, clear it
    if (timer) {
      clearInterval(timer);
    }
    // Create a new timer to tick every 10 seconds
    var newTimer = setInterval(function() {
      return dispatch(updateIdleTime());
    }, 1000 * 10);
    // Save the new timer
    dispatch({ type: _actionTypes.TIMER_START, newTimer: newTimer });
    // Dispatch the first tick
    dispatch(updateIdleTime());
  };
}

function updateIdleTime() {
  return { type: _actionTypes.UPDATE_CURRENT_TIME };
}

// Create a color theme to be used by the rest of the chat window. If the user
// defines a color that isn't available, fall back to default colors and
// warn user
function createTheme() {
  var primaryColor =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : 'lightBlue';
  var secondaryColor =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'pink';

  return function(dispatch, getState) {
    var newTheme = {
      palette: {
        error: colors['red'],
        // Used by `getContrastText()` to maximize the contrast between the background and
        // the text.
        contrastThreshold: 3,
        // Used to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
      },
    };
    if ((0, _isHexColor2.default)(primaryColor)) {
      newTheme.palette.primary = {
        main: primaryColor,
      };
    } else if (colors[primaryColor]) {
      newTheme.palette.primary = colors[primaryColor];
    } else {
      console.error(
        primaryColor +
          ' is not a valid color. Use a color name from https://material.io/guidelines/style/color.html#color-color-palette'
      );
    }

    if ((0, _isHexColor2.default)(secondaryColor)) {
      newTheme.palette.secondary = {
        main: secondaryColor,
      };
    } else if (secondaryColor && colors[secondaryColor]) {
      newTheme.palette.secondary = colors[secondaryColor];
    } else {
      console.error(
        secondaryColor +
          ' is not a valid color. Use a color name from https://material.io/guidelines/style/color.html#color-color-palette'
      );
    }
    var theme = (0, _styles.createMuiTheme)(newTheme);
    dispatch({ type: _actionTypes.CREATE_THEME, theme: theme });
  };
}

function showWindow() {
  return { type: _actionTypes.SHOW_WINDOW };
}
function hideWindow() {
  return { type: _actionTypes.HIDE_WINDOW };
}
function showFullscreen() {
  return { type: _actionTypes.FULLSCREEN };
}
function showWindowed() {
  return { type: _actionTypes.WINDOWED };
}
