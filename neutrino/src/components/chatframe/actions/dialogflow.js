import { format, parse, differenceInMilliseconds } from 'date-fns'
import get from 'lodash/get'
import find from 'lodash/find'
import omit from 'lodash/omit'
import {
  SAVE_CLIENT,
  SAVE_RESPONSE,
  INITIATE_LOADING,
  SHOW_BUTTON_BAR,
  HIDE_BUTTON_BAR,
  DISPLAY_ERROR,
  CLEAR_ERROR,
  RECEIVE_WEBHOOK_DATA,
  DISABLE_INPUT,
  ENABLE_INPUT,
  SET_CONVERSATION_ENDED,
  SET_OUTPUT_CONTEXTS
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
    if (messages.length === 0) {
      dispatch({ type: SAVE_RESPONSE, newConversationArray: [data] })
    } else {
      const newConversationArray = messages
        .map(msg => {
          return msg.loading ? data : msg
        })
        .sort((a, b) => {
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
        })

      dispatch({ type: SAVE_RESPONSE, newConversationArray })
    }
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
        case 'payload':
          return 'payload'
        default:
          return 'text'
      }
    }
    const rawOutputContexts = get(response, 'queryResult.outputContexts', [])
    dispatch({ type: SET_OUTPUT_CONTEXTS, rawOutputContexts })

    const rawResponses = get(response, 'queryResult.fulfillmentMessages', [])
    let unfilteredResponses = []
    let containsDisablePayload = false
    try {
      unfilteredResponses = rawResponses.map(msg => {
        const type = mapMessageTypeToDescriptor(msg.message)
        const suggestions = get(msg, 'quickReplies.quickReplies', [])
        const text = get(msg, 'text.text', null)
        const card = {
          title: get(msg, 'card.title', ''),
          subtitle: get(msg, 'card.subtitle', ''),
          imageUrl: get(msg, 'card.imageUri', ''),
          buttons: get(msg, 'card.buttons', []),
        }
        const image = {
          imageUri: get(msg, 'image.imageUri', ''),
          accessibilityText: get(msg, 'image.accessibilityText', ''),
        }

        const payload = {}
        if (type === 'payload') {
          const rawPayload = get(msg, 'payload.fields', {})
          for (const [field, data] of Object.entries(rawPayload)) {
            if (data.kind === 'stringValue') {
              try {
                // Attempt to parse data.stringValue as JSON in case it is
                payload[field] = JSON.parse(data.stringValue)
              } catch (err) {
                // It's not JSON, just add the string
                payload[field] = data.stringValue
              }
            } else if (data.kind && data.kind !== 'stringValue') {
              throw new Error('Use stringValue to send payloads')
            } else {
              return payload
            }
          }
          // Check for disable input property
          if ('disableInput' in payload) {
            // If there is more than just a dispable input propert in the payload
            // remove disableInput and handle the rest of the payload data
            if (Object.keys(payload).length > 1) {
              const modifiedPayload = omit(payload, ['disableInput'])
              dispatch({ type: RECEIVE_WEBHOOK_DATA, modifiedPayload })
            }
            containsDisablePayload = true
            dispatch({ type: DISABLE_INPUT })
          } else {
            dispatch({ type: RECEIVE_WEBHOOK_DATA, payload })
          }
        }

        switch (type) {
          case 'text':
            return { type, text }

          case 'image':
            return { type, image }

          case 'suggestion':
            return { type, suggestions }

          case 'card':
            return { type, card }

          case 'payload':
            return { type, payload }

          default:
            return { type, text }
        }
      })
    } catch (error) {
      // TODO: log error to analytics
      console.log(error)
    }

    let responses
    if (containsDisablePayload) {
      responses = unfilteredResponses.filter(response => {
        const containsDisableInput = get(
          response,
          'payload.disableInput',
          false
        )
        return !containsDisableInput
      })
    } else {
      dispatch({ type: ENABLE_INPUT })
      responses = unfilteredResponses
    }
    const systemTime = format(new Date(), sysTimeFormat)
    const data = {
      entity: 'bot',
      loading: false,
      messageId: response.responseId,
      messageSession: response.session,
      language: response.queryResult.languageCode,
      systemTime,
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
        throw new Error(error)
      })
      .catch(error => {
        // TODO: log error to analytics
        console.log(error)
        dispatch({
          type: DISPLAY_ERROR,
          error: 'Unable to connect to the chat provider. Please try again.',
        })
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
          dispatch({ type: SET_CONVERSATION_ENDED })
        }
      })
      .catch(error => {
        throw new Error(error)
      })
      .catch(error => {
        // TODO: log error to analytics
        console.log(error)
        dispatch({
          type: DISPLAY_ERROR,
          error: 'Unable to connect to the chat provider. Please try again.',
        })
      })
  }
}
