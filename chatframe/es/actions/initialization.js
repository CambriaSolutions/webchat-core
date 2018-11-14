import {
  SET_TITLE,
  SET_AVATAR,
  TIMER_START,
  UPDATE_CURRENT_TIME,
  CREATE_THEME,
  SHOW_WINDOW,
  HIDE_WINDOW,
  FULLSCREEN,
  WINDOWED,
} from './actionTypes';
import { createMuiTheme } from '@material-ui/core/styles';
import { setupClient } from './conversation';
import { sendEvent } from './dialogflow';
import * as colors from '@material-ui/core/colors';
import isHexColor from 'validator/lib/isHexColor';

export function initialize(props) {
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

    dispatch({ type: SET_TITLE, title: title });
    dispatch({ type: SET_AVATAR, avatar: avatar });
    dispatch(setupClient(client, clientOptions));
    dispatch(startTimer());
    dispatch(sendEvent('Welcome'));

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

export function startTimer() {
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
    dispatch({ type: TIMER_START, newTimer: newTimer });
    // Dispatch the first tick
    dispatch(updateIdleTime());
  };
}

function updateIdleTime() {
  return { type: UPDATE_CURRENT_TIME };
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
    if (isHexColor(primaryColor)) {
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

    if (isHexColor(secondaryColor)) {
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
    var theme = createMuiTheme(newTheme);
    dispatch({ type: CREATE_THEME, theme: theme });
  };
}

export function showWindow() {
  return { type: SHOW_WINDOW };
}
export function hideWindow() {
  return { type: HIDE_WINDOW };
}
export function showFullscreen() {
  return { type: FULLSCREEN };
}
export function showWindowed() {
  return { type: WINDOWED };
}
