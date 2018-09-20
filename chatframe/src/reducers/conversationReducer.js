import * as t from '../actions/actionTypes'
import {
  parse,
  format,
  differenceInMinutes,
  differenceInSeconds,
  differenceInMilliseconds,
} from 'date-fns'
import { sysTimeFormat } from '../config/dateFormats'

const initialState = {
  client: null,
  clientName: null,
  messages: [],
  webhookPayload: null,
  lastUpdateTime: format(new Date(), sysTimeFormat),
  currentTime: format(new Date(), sysTimeFormat),
  headerTime: 'Now',
  timer: null,
}
function conversation(state = initialState, action) {
  switch (action.type) {
    case t.SAVE_CLIENT:
      return { ...state, client: action.client, clientName: action.clientName }

    case t.UPDATE_CURRENT_TIME:
      const now = new Date()
      const lastUpdate = parse(
        state.lastUpdateTime,
        sysTimeFormat,
        new Date(state.lastUpdateTime)
      )
      const diffMinutes = differenceInMinutes(now, lastUpdate)
      const diffSeconds = differenceInSeconds(now, lastUpdate)
      let headerTime = 'Now'
      if (diffMinutes >= 1) {
        headerTime = `${diffMinutes} min ago`
      } else if (diffSeconds >= 9) {
        headerTime = `${diffSeconds} sec ago`
      }

      return {
        ...state,
        headerTime: headerTime,
        currentTime: format(now, sysTimeFormat),
      }

    case t.TIMER_START:
      return {
        ...state,
        timer: action.timer,
      }

    case t.INITIATE_LOADING:
      const newMessage = {
        loading: true,
        entity: 'bot',
        systemTime: format(new Date(), sysTimeFormat),
      }
      return {
        ...state,
        messages: [...state.messages, newMessage],
      }

    case t.SAVE_RESPONSE:
      const newArray = state.messages.map((msg, index) => {
        return msg.loading ? action.data : msg
      })
      return {
        ...state,
        lastUpdateTime: format(new Date(), sysTimeFormat),
        headerTime: 'Now',
        messages: newArray.sort((a, b) => {
          const dateA = parse(
            a.systemTime,
            sysTimeFormat,
            new Date(a.systemTime)
          )
          const dateB = parse(
            b.systemTime,
            sysTimeFormat,
            new Date(b.systemTime)
          )
          const diff = differenceInMilliseconds(dateA, dateB)
          return diff
        }),
      }

    case t.SAVE_USER_RESPONSE:
      return {
        ...state,
        lastUpdateTime: format(new Date(), sysTimeFormat),
        headerTime: 'Now',
        messages: [...state.messages, action.response].sort((a, b) => {
          const dateA = parse(
            a.systemTime,
            sysTimeFormat,
            new Date(a.systemTime)
          )
          const dateB = parse(
            b.systemTime,
            sysTimeFormat,
            new Date(b.systemTime)
          )
          const diff = differenceInMilliseconds(dateB, dateA)
          return diff
        }),
      }

    case t.RECEIVE_WEBHOOK_DATA:
      return {
        ...state,
        webhookPayload: action.webhookPayload,
      }

    default:
      return state
  }
}

export default conversation
