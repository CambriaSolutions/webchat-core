import moment from 'moment'
import * as t from '../actions/actionTypes'

const initialState = {
  client: null,
  messages: [],
  lastUpdateTime: moment().format('MM-DD-YYYY hh:mm:ss.SSSa'),
  currentTime: moment().format('MM-DD-YYYY hh:mm:ss.SSSa'),
  headerTime: 'Now',
  timer: null
}
function conversation(state = initialState, action) {
  switch (action.type) {
    case t.SAVE_CLIENT:
      return { ...state, client: action.client, clientName: action.clientName }

    case t.UPDATE_CURRENT_TIME:
      const now = moment()
      const lastUpdate = moment(
        state.lastUpdateTime,
        'MM-DD-YYYY hh:mm:ss.SSSa'
      )
      const diffMinutes = now.diff(lastUpdate, 'minutes')
      const diffSeconds = now.diff(lastUpdate, 'seconds')
      let headerTime = 'Now'
      if (diffMinutes >= 1) {
        headerTime = `${diffMinutes} min ago`
      } else if (diffSeconds >= 10) {
        headerTime = `${diffSeconds} sec ago`
      }

      return {
        ...state,
        headerTime: headerTime,
        currentTime: now.format('MM-DD-YYYY hh:mm:ss.SSSa')
      }

    case t.TIMER_START:
      return {
        ...state,
        timer: action.timer
      }

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
        lastUpdateTime: moment().format('MM-DD-YYYY hh:mm:ss.SSSa'),
        headerTime: 'Now',
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
        lastUpdateTime: moment().format('MM-DD-YYYY hh:mm:ss.SSSa'),
        headerTime: 'Now',
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
