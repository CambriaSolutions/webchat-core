import { SAVE_USER_INPUT } from './actionTypes'
import { createUserResponse } from './conversation'

export function saveUserInput(value) {
  return { type: SAVE_USER_INPUT, value }
}

export function submitUserInput() {
  return (dispatch, getState) => {
    const userInput = getState().userInput
    dispatch(createUserResponse(userInput))
    dispatch(saveUserInput(''))
  }
}
