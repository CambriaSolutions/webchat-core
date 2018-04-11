import {
  SET_TITLE,
  SET_AVATAR,
  TIMER_START,
  UPDATE_CURRENT_TIME,
  CREATE_THEME
} from './actionTypes'
import { createMuiTheme } from 'material-ui/styles'
import { setupClient } from './conversation'
import { sendEvent } from './dialogflow'
import * as colors from 'material-ui/colors'

export function initialize(props) {
  return (dispatch, getState) => {
    const { title, avatar, client, token, primaryColor, secondaryColor } = props
    dispatch({ type: SET_TITLE, title })
    dispatch({ type: SET_AVATAR, avatar })
    dispatch(setupClient(client, token))
    dispatch(startTimer())
    dispatch(sendEvent('Welcome'))

    if (primaryColor || secondaryColor) {
      dispatch(createTheme(primaryColor, secondaryColor))
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
function createTheme(primaryColor, secondaryColor) {
  return (dispatch, getState) => {
    let newTheme = {
      palette: {}
    }
    if (primaryColor && colors[primaryColor]) {
      newTheme.palette.primary = colors[primaryColor]
    } else {
      console.error(
        `${primaryColor} is not a valid color. Use a color name from https://material.io/guidelines/style/color.html#color-color-palette`
      )
    }
    if (secondaryColor && colors[secondaryColor]) {
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
