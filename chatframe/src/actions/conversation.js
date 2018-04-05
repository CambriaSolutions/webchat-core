import { ApiAiClient } from 'api-ai-javascript'
import { SAVE_CLIENT } from './actionTypes'

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

function setupDialogflow(token) {
  return (dispatch, getState) => {
    const client = new ApiAiClient({ accessToken: token })
    dispatch({ type: SAVE_CLIENT, client })
  }
}

export function startConversation() {
  return (dispatch, getState) => {
    const client = getState().conversation.client
    // client
    //   .textRequest('test my custom intent')
    //   .then(response => {
    //     dispatch(saveMessage())
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
  }
}
