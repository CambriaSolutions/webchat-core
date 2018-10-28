import { format, getTime, parse, differenceInMilliseconds } from 'date-fns'
import get from 'lodash/get'
import find from 'lodash/find'
import {
  SAVE_CLIENT,
  SAVE_RESPONSE,
  INITIATE_LOADING,
  SHOW_BUTTON_BAR,
  HIDE_BUTTON_BAR,
  DISPLAY_ERROR,
  CLEAR_ERROR,
  RECEIVE_WEBHOOK_DATA,
} from './actionTypes'

// Date Format
import { sysTimeFormat } from '../config/dateFormats'

import { Client } from '../conversationClient'

export function setupDialogflow(clientOptions) {
  return dispatch => {
    const client = new Client(clientOptions)
    const clientName = 'dialogflow'
    dispatch({ type: SAVE_CLIENT, client, clientName })
  }
}

export function saveResponse(data) {
  return (dispatch, getState) => {
    const { messages } = getState().conversation
    const hasSuggestion = find(data.responses, ['type', 'suggestion'])
    if (hasSuggestion) {
      dispatch({ type: SHOW_BUTTON_BAR })
    } else {
      dispatch({ type: HIDE_BUTTON_BAR })
    }

    const newConversationArray = messages
      .map(msg => {
        return msg.loading ? data : msg
      })
      .sort((a, b) => {
        const dateA = parse(a.systemTime, sysTimeFormat, new Date(a.systemTime))
        const dateB = parse(b.systemTime, sysTimeFormat, new Date(b.systemTime))
        const diff = differenceInMilliseconds(dateA, dateB)
        return diff
      })

    dispatch({ type: SAVE_RESPONSE, newConversationArray })
  }
}

export function getMessageFromDialogflow(response) {
  return dispatch => {
    function mapMessageTypeToDescriptor(type) {
      switch (type) {
        case 'text':
          return 'text'
        case 'card':
          return 'card'
        case 'quickReplies':
          return 'suggestion'
        case 'image':
          return 'image'
        case 4:
          return 'payload'
        default:
          return 'text'
      }
    }

    const rawResponses = get(response, 'queryResult.fulfillmentMessages', {})
    const responses = rawResponses.map(msg => {
      const type = mapMessageTypeToDescriptor(msg.message)
      return {
        type,
        suggestions: get(msg, 'quickReplies.quickReplies', []),
        text: get(msg, 'text.text', null),
        card: {
          title: get(msg, 'title', ''),
          subtitle: get(msg, 'subtitle', ''),
          imageUrl: get(msg, 'imageUrl', ''),
          buttons: get(msg, 'buttons', []),
        },
        payload: get(msg, 'payload', {}),
      }
    })

    const webhookPayload = get(
      response,
      'queryResult.webhookPayload.fields',
      null,
    )

    // If there is a webhookPayload, parse it to avoid nesting and stringified JSON
    if (webhookPayload) {
      for (const [field, data] of Object.entries(webhookPayload)) {
        if (data.kind === 'stringValue') {
          webhookPayload[field] = JSON.parse(data.stringValue)
        }
      }

      dispatch({ type: RECEIVE_WEBHOOK_DATA, webhookPayload })
    }

    const systemTime = format(new Date(), sysTimeFormat)
    const timestamp = getTime(new Date())

    const data = {
      entity: 'bot',
      loading: false,
      messageId: response.responseId,
      language: response.queryResult.languageCode,
      timestamp,
      systemTime,
      providerResponse: response,
      responses,
    }

    dispatch(saveResponse(data))
  }
}

export function sendMessageWithDialogflow(message) {
  return (dispatch, getState) => {
    const { client } = getState().conversation
    dispatch({ type: INITIATE_LOADING })
    client
      .textRequest(message)
      .then(response => {
        if (response) {
          dispatch(getMessageFromDialogflow(response))
          dispatch({ type: CLEAR_ERROR })
        } else {
          dispatch({
            type: DISPLAY_ERROR,
            error: 'No response received from chat provider. Please try again.',
          })
        }
      })
      .catch(error => {
        dispatch({
          type: DISPLAY_ERROR,
          error: 'Unable to connect to the chat provider. Please try again.',
        })
        throw new Error(error)
      })
  }
}

export function sendEvent(event) {
  return (dispatch, getState) => {
    const { client } = getState().conversation
    dispatch({ type: INITIATE_LOADING })
    client
      .eventRequest(event)
      .then(response => {
        if (response) {
          dispatch(getMessageFromDialogflow(response))
          dispatch({ type: CLEAR_ERROR })
        } else {
          dispatch({
            type: DISPLAY_ERROR,
            error: 'No response received from chat provider. Please try again.',
          })
        }
      })
      .catch(error => {
        dispatch({
          type: DISPLAY_ERROR,
          error: 'Unable to connect to the chat provider. Please try again.',
        })
        throw new Error(error)
      })
  }
}
