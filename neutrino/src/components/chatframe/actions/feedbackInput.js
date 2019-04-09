import { SAVE_FEEDBACK_INPUT } from './actionTypes'
import { sendMessage } from './conversation'

export function saveFeedbackInput(value) {
  return { type: SAVE_FEEDBACK_INPUT, value }
}

export function submitFeedbackInput(value) {
  return dispatch => {
    dispatch(sendMessage(value))
  }
}
