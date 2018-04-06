import { ApiAiClient } from 'api-ai-javascript'
import { SAVE_CLIENT, SAVE_RESPONSE } from './actionTypes'
import get from 'lodash/get'
import moment from 'moment'

export function setupDialogflow(token) {
  return (dispatch, getState) => {
    const client = new ApiAiClient({ accessToken: token })
    const clientName = 'dialogflow'
    dispatch({ type: SAVE_CLIENT, client, clientName })
  }
}

export function sendMessage(message) {
  return (dispatch, getState) => {
    const client = getState().conversation.client
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
        buttons: get(msg, 'replies', []),
        text: get(msg, 'speech', ''),
        card: {
          title: get(msg, 'title', ''),
          subtitle: get(msg, 'subtitle', ''),
          imageUrl: get(msg, 'imageUrl', ''),
          buttons: get(msg, 'buttons', [])
        }
      }
    })

    const timeFormat = 'YYYY-MM-DDTHH:mm:ss.SSSZ'
    const time = moment(response.timestamp, timeFormat)
    const systemTime = moment(time).format('MM-DD-YYYY hh:mm:ss.SSSa')
    const displayTime = moment(time).format('h:mma')

    const data = {
      entity: 'bot',
      messageId: response.id,
      sessionId: response.sessionId,
      language: response.lang,
      timestamp: moment.timestamp,
      systemTime: systemTime,
      displayTime: displayTime,
      status: response.status,
      botMessage: response,
      rawResponses: rawResponses,
      responseTime: response.result.metadata.webhookResponseTime,
      responses: responses
    }

    dispatch(saveResponse(data))
  }
}

export function saveResponse(data) {
  return (dispatch, getState) => {
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
      return 'button'
    default:
      return 'text'
  }
}
