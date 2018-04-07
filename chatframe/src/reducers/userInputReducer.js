import * as t from '../actions/actionTypes'

const initialState = ''
function userInput(state = initialState, action) {
  switch (action.type) {
    case t.SAVE_USER_INPUT:
      return action.value

    default:
      return state
  }
}

export default userInput
