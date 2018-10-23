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
import get from 'lodash/get'
import find from 'lodash/find'
import { format, getTime } from 'date-fns'

// Date Format
import { sysTimeFormat } from '../config/dateFormats'

import { Client } from '../conversationClient'

export function setupDialogflow(clientOptions) {
  return (dispatch, getState) => {
    const client = new Client(clientOptions)
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
    const client = getState().conversation.client
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

export function getMessageFromDialogflow(response) {
  return (dispatch, getState) => {
    const rawResponses = get(response, 'queryResult.fulfillmentMessages', {})
    const responses = rawResponses.map(msg => {
      const type = mapMessageTypeToDescriptor(msg.message)
      return {
        type: type,
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
      null
    )

    // If there is a webhookPayload, parse it to avoid nesting and stringified JSON
    if (webhookPayload) {
      for (let [field, data] of Object.entries(webhookPayload)) {
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
      timestamp: timestamp,
      systemTime: systemTime,
      providerResponse: response,
      responses: responses,
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