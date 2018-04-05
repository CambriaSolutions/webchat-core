import * as t from '../actions/actionTypes'

const initialState = {
  client: null,
  messages: []
}
function conversation(state = initialState, action) {
  switch (action.type) {
    case t.SAVE_CLIENT:
      return { ...state, client: action.client }

    default:
      return initialState
  }
}

export default conversation
