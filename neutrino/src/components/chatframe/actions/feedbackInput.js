import { SAVE_FEEDBACK_INPUT, SET_FEEDBACK_SUBMITTED } from './actionTypes'
import { sendMessage } from './conversation'

export function saveFeedbackInput(value) {
  return { type: SAVE_FEEDBACK_INPUT, value }
}

export function sendFeedback(value) {
  return dispatch => {
    dispatch(sendMessage(value))
  }
}

export function setFeedbackSubmitted(value) {
  return { type: SET_FEEDBACK_SUBMITTED, value }
}
