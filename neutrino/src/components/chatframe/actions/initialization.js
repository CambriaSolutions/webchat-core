import {
  SET_TITLE,
  SET_AVATAR,
  TIMER_START,
  UPDATE_CURRENT_TIME,
  SHOW_WINDOW,
  HIDE_WINDOW,
  FULLSCREEN,
  WINDOWED,
} from './actionTypes'
import { setupClient } from './conversation'
import { sendEvent } from './dialogflow'
import defaultavatar from '../defaultavatar.png'

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
    let userAvatar = avatar ? avatar : defaultavatar
    dispatch({ type: SET_TITLE, title })
    dispatch({ type: SET_AVATAR, avatar: userAvatar })
    dispatch(setupClient(client, clientOptions))
    dispatch(startTimer())
    dispatch(sendEvent('Welcome'))

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
