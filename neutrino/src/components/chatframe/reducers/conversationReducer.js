import { parse, format, differenceInMilliseconds } from 'date-fns'
import * as t from '../actions/actionTypes'
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
  numMessages: 0,
  conversationStarted: false,
}
function conversation(state = initialState, action) {
  switch (action.type) {
    case t.SAVE_CLIENT:
      return { ...state, client: action.client, clientName: action.clientName }

    case t.UPDATE_CURRENT_TIME:
      return {
        ...state,
        headerTime: action.headerTime,
        currentTime: action.currentTime,
      }

    case t.TIMER_START:
      return {
        ...state,
        timer: action.timer,
      }

    case t.INITIATE_LOADING:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            loading: true,
            entity: 'bot',
            systemTime: format(new Date(), sysTimeFormat),
          },
        ],
      }

    case t.SAVE_RESPONSE:
      return {
        ...state,
        lastUpdateTime: format(new Date(), sysTimeFormat),
        headerTime: 'Now',
        messages: action.newConversationArray,
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
            new Date(a.systemTime),
          )
          const dateB = parse(
            b.systemTime,
            sysTimeFormat,
            new Date(b.systemTime),
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
      
    case t.SET_NUM_MESSAGES:
      return {
        ...state,
        numMessages: action.numMessages,
        
    case t.SET_CONVERSATION_STARTED:
      return {
        ...state,
        conversationStarted: true,
      }

    case t.SET_CONVERSATION_ENDED:
      return {
        ...state,
        conversationStarted: false,
      }

    default:
      return state
  }
}

export default conversation
