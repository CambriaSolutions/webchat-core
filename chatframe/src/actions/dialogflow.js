import { ApiAiClient } from 'api-ai-javascript'
import {
  SAVE_CLIENT,
  SAVE_RESPONSE,
  INITIATE_LOADING,
  SHOW_BUTTON_BAR,
  HIDE_BUTTON_BAR
} from './actionTypes'
import get from 'lodash/get'
import find from 'lodash/find'
import moment from 'moment'

// Date Format
import { sysTimeFormat } from '../config/dateFormats'

export function setupDialogflow(token) {
  return (dispatch, getState) => {
    const client = new ApiAiClient({ accessToken: token })
    const clientName = 'dialogflow'
    dispatch({ type: SAVE_CLIENT, client, clientName })
  }
}

export function sendMessageWithDialogflow(message) {
  return (dispatch, getState) => {
    const client = getState().conversation.client
    dispatch({ type: INITIATE_LOADING })
    client
      .textRequest(message)
      .then(response => {
        dispatch(getMessageFromDialogflow(response))
      })
      .catch(error => {
        throw new Error(error)
      })
  }
}

export function sendEvent(event) {
  return (dispatch, getState) => {
    const client = getState().conversation.client
    dispatch({ type: INITIATE_LOADING })
    client
      .eventRequest(event)
      .then(response => {
        dispatch(getMessageFromDialogflow(response))
      })
      .catch(error => {
        throw new Error(error)
      })
  }
}

export function getMessageFromDialogflow(response) {
  return (dispatch, getState) => {
    const rawResponses = response.result.fulfillment.messages
    const responses = rawResponses.map(msg => {
      const type = mapMessageTypeToDescriptor(msg.type)
      return {
        type: type,
        suggestions: get(msg, 'replies', []),
        text: get(msg, 'speech', null),
        card: {
          title: get(msg, 'title', ''),
          subtitle: get(msg, 'subtitle', ''),
          imageUrl: get(msg, 'imageUrl', ''),
          buttons: get(msg, 'buttons', [])
        },
        payload: get(msg, 'payload', {})
      }
    })

    // const timeFormat = 'YYYY-MM-DDTHH:mm:ss.SSSZ'
    // const time = moment(response.timestamp, timeFormat)
    const systemTime = moment().format(sysTimeFormat)

    const data = {
      entity: 'bot',
      loading: false,
      messageId: response.id,
      sessionId: response.sessionId,
      language: response.lang,
      timestamp: moment.timestamp,
      systemTime: systemTime,
      status: response.status,
      providerResponse: response,
      responseTime: response.result.metadata.webhookResponseTime,
      responses: responses
    }

    dispatch(saveResponse(data))
  }
}

export function saveResponse(data) {
  return (dispatch, getState) => {
    const hasSuggestion = find(data.responses, ['type', 'suggestion'])
      ? true
      : false
    if (hasSuggestion) {
      dispatch({ type: SHOW_BUTTON_BAR })
    } else {
      dispatch({ type: HIDE_BUTTON_BAR })
    }

    dispatch({ type: SAVE_RESPONSE, data })
  }
}

function mapMessageTypeToDescriptor(type) {
  switch (type) {
    case 0:
      return 'text'
    case 1:
      return 'card'
    case 2:
      return 'suggestion'
    case 3:
      return 'image'
    case 4:
      return 'payload'
    default:
      return 'text'
  }
}
