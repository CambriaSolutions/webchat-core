'use strict';

exports.__esModule = true;
exports.setupClient = setupClient;
exports.createUserResponse = createUserResponse;
exports.sendMessage = sendMessage;
exports.sendQuickReply = sendQuickReply;

var _dateFns = require('date-fns');

var _actionTypes = require('./actionTypes');

var _dialogflow = require('./dialogflow');

var _dateFormats = require('../config/dateFormats');

function setupClient(client, clientOptions) {
  return function(dispatch, getState) {
    if (!client) {
      throw new Error('No coversation provider selected.');
    }

    // Setup Dialogflow
    if (client.toLowerCase() === 'dialogflow') {
      dispatch((0, _dialogflow.setupDialogflow)(clientOptions));
    } else {
      // Unrecognized client
      dispatch({
        type: _actionTypes.DISPLAY_ERROR,
        error: 'Unable to connect to ' + client,
      });
      throw new Error(client + ' is not a recognized conversation provider.');
    }
  };
}
// Date Format
function createUserResponse(text) {
  return function(dispatch, getState) {
    var numMessages = getState().conversation.messages.length;
    var systemTime = (0, _dateFns.format)(
      new Date(),
      _dateFormats.sysTimeFormat
    );
    var response = {
      entity: 'user',
      messageId: 'usermessage-' + numMessages,
      systemTime: systemTime,
      text: text,
    };
    dispatch({ type: _actionTypes.SAVE_USER_RESPONSE, response: response });
    dispatch(sendMessage(text));
  };
}

function sendMessage(message) {
  return function(dispatch, getState) {
    var clientName = getState().conversation.clientName;
    if (clientName.toLowerCase() === 'dialogflow') {
      dispatch({ type: _actionTypes.HIDE_BUTTON_BAR });
      dispatch((0, _dialogflow.sendMessageWithDialogflow)(message));
    } else {
      // Unrecognized client
      dispatch({
        type: _actionTypes.DISPLAY_ERROR,
        error: 'Unable to connect to ' + clientName,
      });
      throw new Error(
        clientName + ' is not a recognized conversation provider.'
      );
    }
  };
}

function sendQuickReply(text) {
  return function(dispatch, getState) {
    dispatch(createUserResponse(text));
  };
}
