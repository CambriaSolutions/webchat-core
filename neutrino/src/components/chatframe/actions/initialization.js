import {
  parse,
  format,
  differenceInMinutes,
  differenceInSeconds,
} from 'date-fns'
import {
  SET_TITLE,
  SET_AVATAR,
  TIMER_START,
  UPDATE_CURRENT_TIME,
  SHOW_WINDOW,
  HIDE_WINDOW,
  FULLSCREEN,
  WINDOWED,
  SET_CONVERSATION_STARTED,
} from './actionTypes'

import { sysTimeFormat } from '../config/dateFormats'
import { setupClient } from './conversation'
import { sendEvent } from './dialogflow'
import defaultavatar from '../defaultavatar.png'

export function showWindow() {
  return (dispatch, getState) => {
    const { conversationStarted } = getState().conversation
    dispatch({ type: SHOW_WINDOW })
    if (!conversationStarted) {
      dispatch(sendEvent('Welcome'))
      dispatch({ type: SET_CONVERSATION_STARTED })
    }
  }
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

function updateIdleTime() {
  return (dispatch, getState) => {
    const { lastUpdateTime } = getState().conversation
    const now = new Date()
    const lastUpdate = parse(
      lastUpdateTime,
      sysTimeFormat,
      new Date(lastUpdateTime),
    )
    const diffMinutes = differenceInMinutes(now, lastUpdate)
    const diffSeconds = differenceInSeconds(now, lastUpdate)
    let headerTime = 'Now'
    if (diffMinutes >= 1) {
      headerTime = `${diffMinutes} min ago`
    } else if (diffSeconds >= 9) {
      headerTime = `${diffSeconds} sec ago`
    }

    const currentTime = format(now, sysTimeFormat)

    dispatch({ type: UPDATE_CURRENT_TIME, headerTime, currentTime })
  }
}

export function startTimer() {
  return (dispatch, getState) => {
    const { timer } = getState().conversation
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

export function initialize(props) {
  return dispatch => {
    const {
      title,
      avatar,
      client,
      clientOptions,
      initialActive,
      fullscreen,
    } = props
    let userAvatar = avatar
    if (!userAvatar) {
      userAvatar = defaultavatar
    }
    dispatch({ type: SET_TITLE, title })
    dispatch({ type: SET_AVATAR, avatar: userAvatar })
    dispatch(setupClient(client, clientOptions))
    dispatch(startTimer())

    if (initialActive === true) {
      dispatch(sendEvent('Welcome'))
      dispatch(showWindow())
      dispatch({ type: SET_CONVERSATION_STARTED })
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
