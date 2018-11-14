import { format } from 'date-fns';
import {
  SAVE_USER_RESPONSE,
  DISPLAY_ERROR,
  HIDE_BUTTON_BAR,
} from './actionTypes';
import { setupDialogflow, sendMessageWithDialogflow } from './dialogflow';
// Date Format
import { sysTimeFormat } from '../config/dateFormats';

export function setupClient(client, clientOptions) {
  return function(dispatch, getState) {
    if (!client) {
      throw new Error('No coversation provider selected.');
    }

    // Setup Dialogflow
    if (client.toLowerCase() === 'dialogflow') {
      dispatch(setupDialogflow(clientOptions));
    } else {
      // Unrecognized client
      dispatch({
        type: DISPLAY_ERROR,
        error: 'Unable to connect to ' + client,
      });
      throw new Error(client + ' is not a recognized conversation provider.');
    }
  };
}

export function createUserResponse(text) {
  return function(dispatch, getState) {
    var numMessages = getState().conversation.messages.length;
    var systemTime = format(new Date(), sysTimeFormat);
    var response = {
      entity: 'user',
      messageId: 'usermessage-' + numMessages,
      systemTime: systemTime,
      text: text,
    };
    dispatch({ type: SAVE_USER_RESPONSE, response: response });
    dispatch(sendMessage(text));
  };
}

export function sendMessage(message) {
  return function(dispatch, getState) {
    var clientName = getState().conversation.clientName;
    if (clientName.toLowerCase() === 'dialogflow') {
      dispatch({ type: HIDE_BUTTON_BAR });
      dispatch(sendMessageWithDialogflow(message));
    } else {
      // Unrecognized client
      dispatch({
        type: DISPLAY_ERROR,
        error: 'Unable to connect to ' + clientName,
      });
      throw new Error(
        clientName + ' is not a recognized conversation provider.'
      );
    }
  };
}

export function sendQuickReply(text) {
  return function(dispatch, getState) {
    dispatch(createUserResponse(text));
  };
}
