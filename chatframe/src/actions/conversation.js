import moment from 'moment'
import { SAVE_USER_RESPONSE } from './actionTypes'
import { setupDialogflow, sendMessageWithDialogflow } from './dialogflow'

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
      throw new Error(`${client} is not a recognized conversation provider.`)
    }
  }
}

export function createUserResponse(text) {
  return (dispatch, getState) => {
    const numMessages = getState().conversation.messages.length
    const systemTime = moment().format('MM-DD-YYYY hh:mm:ss.SSSa')
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
