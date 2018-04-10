import moment from 'moment'
import * as t from '../actions/actionTypes'

import { sysTimeFormat } from '../config/dateFormats'

const initialState = {
  client: null,
  clientName: null,
  messages: [],
  lastUpdateTime: moment().format(sysTimeFormat),
  currentTime: moment().format(sysTimeFormat),
  headerTime: 'Now',
  timer: null
}
function conversation(state = initialState, action) {
  switch (action.type) {
    case t.SAVE_CLIENT:
      return { ...state, client: action.client, clientName: action.clientName }

    case t.UPDATE_CURRENT_TIME:
      const now = moment()
      const lastUpdate = moment(state.lastUpdateTime, sysTimeFormat)
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
        currentTime: now.format(sysTimeFormat)
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
        systemTime: moment().format(sysTimeFormat)
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
        lastUpdateTime: moment().format(sysTimeFormat),
        headerTime: 'Now',
        messages: newArray.sort((a, b) => {
          const momentA = moment(a.systemTime, sysTimeFormat)
          const momentB = moment(b.systemTime, sysTimeFormat)
          const diff = momentB.diff(momentA, 'milliseconds')
          return diff
        })
      }

    case t.SAVE_USER_RESPONSE:
      return {
        ...state,
        lastUpdateTime: moment().format(sysTimeFormat),
        headerTime: 'Now',
        messages: [...state.messages, action.response].sort((a, b) => {
          const momentA = moment(a.systemTime, sysTimeFormat)
          const momentB = moment(b.systemTime, sysTimeFormat)
          const diff = momentA.diff(momentB, 'milliseconds')
          return diff
        })
      }

    default:
      return state
  }
}

export default conversation
