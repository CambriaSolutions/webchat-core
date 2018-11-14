import {
  SAVE_CLIENT,
  SAVE_RESPONSE,
  INITIATE_LOADING,
  SHOW_BUTTON_BAR,
  HIDE_BUTTON_BAR,
  DISPLAY_ERROR,
  CLEAR_ERROR,
  RECEIVE_WEBHOOK_DATA,
} from './actionTypes';
import get from 'lodash/get';
import find from 'lodash/find';
import { format, getTime } from 'date-fns';

// Date Format
import { sysTimeFormat } from '../config/dateFormats';

import { Client } from '../conversationClient';

export function setupDialogflow(clientOptions) {
  return function(dispatch, getState) {
    var client = new Client(clientOptions);
    var clientName = 'dialogflow';
    dispatch({ type: SAVE_CLIENT, client: client, clientName: clientName });
  };
}

export function sendMessageWithDialogflow(message) {
  return function(dispatch, getState) {
    var client = getState().conversation.client;
    dispatch({ type: INITIATE_LOADING });
    client
      .textRequest(message)
      .then(function(response) {
        if (response) {
          dispatch(getMessageFromDialogflow(response));
          dispatch({ type: CLEAR_ERROR });
        } else {
          dispatch({
            type: DISPLAY_ERROR,
            error: 'No response received from chat provider. Please try again.',
          });
        }
      })
      .catch(function(error) {
        dispatch({
          type: DISPLAY_ERROR,
          error: 'Unable to connect to the chat provider. Please try again.',
        });
        throw new Error(error);
      });
  };
}

export function sendEvent(event) {
  return function(dispatch, getState) {
    var client = getState().conversation.client;
    dispatch({ type: INITIATE_LOADING });
    client
      .eventRequest(event)
      .then(function(response) {
        if (response) {
          dispatch(getMessageFromDialogflow(response));
          dispatch({ type: CLEAR_ERROR });
        } else {
          dispatch({
            type: DISPLAY_ERROR,
            error: 'No response received from chat provider. Please try again.',
          });
        }
      })
      .catch(function(error) {
        dispatch({
          type: DISPLAY_ERROR,
          error: 'Unable to connect to the chat provider. Please try again.',
        });
        throw new Error(error);
      });
  };
}

export function getMessageFromDialogflow(response) {
  return function(dispatch, getState) {
    var rawResponses = get(response, 'queryResult.fulfillmentMessages', {});
    var responses = rawResponses.map(function(msg) {
      var type = mapMessageTypeToDescriptor(msg.message);
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
      };
    });

    var webhookPayload = get(
      response,
      'queryResult.webhookPayload.fields',
      null
    );

    // If there is a webhookPayload, parse it to avoid nesting and stringified JSON
    if (webhookPayload) {
      for (
        var _iterator = Object.entries(webhookPayload),
          _isArray = Array.isArray(_iterator),
          _i = 0,
          _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();
        ;

      ) {
        var _ref2;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref2 = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref2 = _i.value;
        }

        var _ref = _ref2;
        var field = _ref[0];
        var _data = _ref[1];

        if (_data.kind === 'stringValue') {
          webhookPayload[field] = JSON.parse(_data.stringValue);
        }
      }

      dispatch({ type: RECEIVE_WEBHOOK_DATA, webhookPayload: webhookPayload });
    }

    var systemTime = format(new Date(), sysTimeFormat);
    var timestamp = getTime(new Date());

    var data = {
      entity: 'bot',
      loading: false,
      messageId: response.responseId,
      language: response.queryResult.languageCode,
      timestamp: timestamp,
      systemTime: systemTime,
      providerResponse: response,
      responses: responses,
    };

    dispatch(saveResponse(data));
  };
}

export function saveResponse(data) {
  return function(dispatch, getState) {
    var hasSuggestion = find(data.responses, ['type', 'suggestion'])
      ? true
      : false;
    if (hasSuggestion) {
      dispatch({ type: SHOW_BUTTON_BAR });
    } else {
      dispatch({ type: HIDE_BUTTON_BAR });
    }

    dispatch({ type: SAVE_RESPONSE, data: data });
  };
}

function mapMessageTypeToDescriptor(type) {
  switch (type) {
    case 'text':
      return 'text';
    case 'card':
      return 'card';
    case 'quickReplies':
      return 'suggestion';
    case 'image':
      return 'image';
    case 4:
      return 'payload';
    default:
      return 'text';
  }
}
