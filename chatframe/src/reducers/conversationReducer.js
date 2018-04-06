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

    case t.INITIATE_LOADING:
      const newMessage = {
        loading: true,
        entity: 'bot',
        systemTime: moment().format('MM-DD-YYYY hh:mm:ss.SSSa')
      }
      return {
        ...state,
        messages: [...state.messages, newMessage]
      }

    case t.SAVE_RESPONSE:
      const newArray = state.messages.map((msg, index) => {
        return msg.loading ? action.data : msg
      })
      return {
        ...state,
        messages: newArray.sort((a, b) => {
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
