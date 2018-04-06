import {
  SET_TITLE,
  SET_AVATAR,
  TIMER_START,
  UPDATE_CURRENT_TIME
} from './actionTypes'
import { setupClient } from './conversation'
import { sendEvent } from './dialogflow'

export function initialize(props) {
  return (dispatch, getState) => {
    const { title, avatar, client, token } = props
    dispatch({ type: SET_TITLE, title })
    dispatch({ type: SET_AVATAR, avatar })
    dispatch(setupClient(client, token))
    dispatch(startTimer())
    dispatch(sendEvent('Welcome'))
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
