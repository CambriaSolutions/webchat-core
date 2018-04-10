import moment from 'moment'
import { SAVE_USER_RESPONSE, DISPLAY_ERROR } from './actionTypes'
import { setupDialogflow, sendMessageWithDialogflow } from './dialogflow'
// Date Format
import { sysTimeFormat } from '../config/dateFormats'

export function setupClient(client, token) {
  return (dispatch, getState) => {
    if (!token) {
      throw new Error('No conversation token provided.')
    }
    if (!client) {
      throw new Error('No coversation provider selected.')
    }

    // Setup Dialogflow
    if (client.toLowerCase() === 'dialogflow') {
      dispatch(setupDialogflow(token))
    } else {
      // Unrecognized client
      dispatch({ type: DISPLAY_ERROR, error: `Unable to connect to ${client}` })
      throw new Error(`${client} is not a recognized conversation provider.`)
    }
  }
}

export function createUserResponse(text) {
  return (dispatch, getState) => {
    const numMessages = getState().conversation.messages.length
    const systemTime = moment().format(sysTimeFormat)
    const response = {
      entity: 'user',
      messageId: `usermessage-${numMessages}`,
      systemTime: systemTime,
      text: text
    }
    dispatch({ type: SAVE_USER_RESPONSE, response })
    dispatch(sendMessage(text))
  }
}

export function sendMessage(message) {
  return (dispatch, getState) => {
    const clientName = getState().conversation.clientName
    if (clientName.toLowerCase() === 'dialogflow') {
      dispatch(sendMessageWithDialogflow(message))
    } else {
      // Unrecognized client
      dispatch({
        type: DISPLAY_ERROR,
        error: `Unable to connect to ${clientName}`
      })
      throw new Error(
        `${clientName} is not a recognized conversation provider.`
      )
    }
  }
}

export function sendQuickReply(text) {
  return (dispatch, getState) => {
    dispatch(createUserResponse(text))
  }
}
