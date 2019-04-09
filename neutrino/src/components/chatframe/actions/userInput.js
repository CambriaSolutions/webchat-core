import { SAVE_USER_INPUT } from './actionTypes'
import { createUserResponse, sendMessage } from './conversation'

export function saveUserInput(value) {
  return { type: SAVE_USER_INPUT, value }
}

export function submitUserInput() {
  return (dispatch, getState) => {
    const { userInput } = getState()
    if (!userInput || userInput === '') {
      return
    }
    dispatch(createUserResponse(userInput))
    dispatch(saveUserInput(''))
  }
}
export function submitFeedbackInput(value) {
  return dispatch => {
    dispatch(sendMessage(value))
  }
}
