import moment from 'moment'
import { SAVE_USER_RESPONSE } from './actionTypes'
import { setupDialogflow, sendMessage } from './dialogflow'

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

export function createUserResponse() {
  return (dispatch, getState) => {
    const userInput = getState().userInput
    const client = getState().conversation.clientName
    const numMessages = getState().conversation.messages.length
    const response = {
      entity: 'user',
      messageId: `usermessage-${numMessages}`,
      systemTime: moment().format('MM-DD-YYYY hh:mm:ss.SSSa'),
      text: userInput
    }
    dispatch({ type: SAVE_USER_RESPONSE, response })
    dispatch(sendMessage(userInput))
  }
}
