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
} from './actionTypes'
import { createMuiTheme } from '@material-ui/core/styles'
import { setupClient } from './conversation'
import { sendEvent } from './dialogflow'
import * as colors from '@material-ui/core/colors'
import isHexColor from 'validator/lib/isHexColor';

export function initialize(props) {
  return (dispatch, getState) => {
    const {
      title,
      avatar,
      client,
      clientOptions,
      token,
      primaryColor,
      secondaryColor,
      initialActive,
      fullscreen,
    } = props
    dispatch({ type: SET_TITLE, title })
    dispatch({ type: SET_AVATAR, avatar })
    dispatch(setupClient(client, clientOptions))
    dispatch(startTimer())
    dispatch(sendEvent('Welcome'))

    if (primaryColor || secondaryColor) {
      dispatch(createTheme(primaryColor, secondaryColor))
    }

    if (initialActive === true) {
      dispatch(showWindow())
    } else {
      dispatch(hideWindow())
    }

    if (fullscreen === true) {
      dispatch(showFullscreen())
    } else {
      dispatch(showWindowed())
    }
  }
}

export function startTimer() {
  return (dispatch, getState) => {
    const timer = getState().conversation.timer
    // If there's an existing timer, clear it
    if (timer) {
      clearInterval(timer)
    }
    // Create a new timer to tick every 10 seconds
    const newTimer = setInterval(() => dispatch(updateIdleTime()), 1000 * 10)
    // Save the new timer
    dispatch({ type: TIMER_START, newTimer })
    // Dispatch the first tick
    dispatch(updateIdleTime())
  }
}

function updateIdleTime() {
  return { type: UPDATE_CURRENT_TIME }
}

// Create a color theme to be used by the rest of the chat window. If the user
// defines a color that isn't available, fall back to default colors and
// warn user
function createTheme(primaryColor = 'lightBlue', secondaryColor = 'pink') {
  return (dispatch, getState) => {
    let newTheme = {
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
    }
    if (isHexColor(primaryColor)) {
      newTheme.palette.primary = {
        main: primaryColor
      }
    }
    else if (colors[primaryColor]) {
      newTheme.palette.primary = colors[primaryColor]
    } else {
      console.error(
        `${primaryColor} is not a valid color. Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`
      )
    }

    if (isHexColor(secondaryColor)) {
      newTheme.palette.secondary = {
        main: secondaryColor
      }
    }
    else if (secondaryColor && colors[secondaryColor]) {
      newTheme.palette.secondary = colors[secondaryColor]
    } else {
      console.error(
        `${secondaryColor} is not a valid color. Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`
      )
    }
    const theme = createMuiTheme(newTheme)
    dispatch({ type: CREATE_THEME, theme })
  }
}

export function showWindow() {
  return { type: SHOW_WINDOW }
}
export function hideWindow() {
  return { type: HIDE_WINDOW }
}
export function showFullscreen() {
  return { type: FULLSCREEN }
}
export function showWindowed() {
  return { type: WINDOWED }
}