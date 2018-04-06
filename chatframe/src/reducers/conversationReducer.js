import moment from 'moment'
import * as t from '../actions/actionTypes'

const initialState = {
  client: null,
  messages: []
}
function conversation(state = initialState, action) {
  switch (action.type) {
    case t.SAVE_CLIENT:
      return { ...state, client: action.client, clientName: action.clientName }

    case t.SAVE_RESPONSE:
      return {
        ...state,
        messages: [...state.messages, action.data].sort((a, b) => {
          const momentA = moment(a.systemTime, 'MM-DD-YYYY hh:mm:ss.SSSa')
          const momentB = moment(b.systemTime, 'MM-DD-YYYY hh:mm:ss.SSSa')
          const diff = momentB.diff(momentA, 'milliseconds')
          return diff
        })
      }

    case t.SAVE_USER_RESPONSE:
      return {
        ...state,
        messages: [...state.messages, action.response].sort((a, b) => {
          const momentA = moment(a.systemTime, 'MM-DD-YYYY hh:mm:ss.SSSa')
          const momentB = moment(b.systemTime, 'MM-DD-YYYY hh:mm:ss.SSSa')
          const diff = momentA.diff(momentB, 'milliseconds')
          return diff
        })
      }

    default:
      return state
  }
}

export default conversation
