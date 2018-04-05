import moment from 'moment'
import * as t from '../actions/actionTypes'

const initialState = {
  client: null,
  messages: []
}
function conversation(state = initialState, action) {
  switch (action.type) {
    case t.SAVE_CLIENT:
      return { ...state, client: action.client }

    case t.SAVE_RESPONSE:
      return {
        ...state,
        messages: [...state.messages, action.data].sort((a, b) => {
          return moment(a).diff(moment(b))
        })
      }

    default:
      return state
  }
}

export default conversation
