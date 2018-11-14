'use strict';

exports.__esModule = true;
exports.setupDialogflow = setupDialogflow;
exports.sendMessageWithDialogflow = sendMessageWithDialogflow;
exports.sendEvent = sendEvent;
exports.getMessageFromDialogflow = getMessageFromDialogflow;
exports.saveResponse = saveResponse;

var _actionTypes = require('./actionTypes');

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

var _find = require('lodash/find');

var _find2 = _interopRequireDefault(_find);

var _dateFns = require('date-fns');

var _dateFormats = require('../config/dateFormats');

var _conversationClient = require('../conversationClient');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// Date Format
function setupDialogflow(clientOptions) {
  return function(dispatch, getState) {
    var client = new _conversationClient.Client(clientOptions);
    var clientName = 'dialogflow';
    dispatch({
      type: _actionTypes.SAVE_CLIENT,
      client: client,
      clientName: clientName,
    });
  };
}

function sendMessageWithDialogflow(message) {
  return function(dispatch, getState) {
    var client = getState().conversation.client;
    dispatch({ type: _actionTypes.INITIATE_LOADING });
    client
      .textRequest(message)
      .then(function(response) {
        if (response) {
          dispatch(getMessageFromDialogflow(response));
          dispatch({ type: _actionTypes.CLEAR_ERROR });
        } else {
          dispatch({
            type: _actionTypes.DISPLAY_ERROR,
            error: 'No response received from chat provider. Please try again.',
          });
        }
      })
      .catch(function(error) {
        dispatch({
          type: _actionTypes.DISPLAY_ERROR,
          error: 'Unable to connect to the chat provider. Please try again.',
        });
        throw new Error(error);
      });
  };
}

function sendEvent(event) {
  return function(dispatch, getState) {
    var client = getState().conversation.client;
    dispatch({ type: _actionTypes.INITIATE_LOADING });
    client
      .eventRequest(event)
      .then(function(response) {
        if (response) {
          dispatch(getMessageFromDialogflow(response));
          dispatch({ type: _actionTypes.CLEAR_ERROR });
        } else {
          dispatch({
            type: _actionTypes.DISPLAY_ERROR,
            error: 'No response received from chat provider. Please try again.',
          });
        }
      })
      .catch(function(error) {
        dispatch({
          type: _actionTypes.DISPLAY_ERROR,
          error: 'Unable to connect to the chat provider. Please try again.',
        });
        throw new Error(error);
      });
  };
}

function getMessageFromDialogflow(response) {
  return function(dispatch, getState) {
    var rawResponses = (0, _get2.default)(
      response,
      'queryResult.fulfillmentMessages',
      {}
    );
    var responses = rawResponses.map(function(msg) {
      var type = mapMessageTypeToDescriptor(msg.message);
      return {
        type: type,
        suggestions: (0, _get2.default)(msg, 'quickReplies.quickReplies', []),
        text: (0, _get2.default)(msg, 'text.text', null),
        card: {
          title: (0, _get2.default)(msg, 'title', ''),
          subtitle: (0, _get2.default)(msg, 'subtitle', ''),
          imageUrl: (0, _get2.default)(msg, 'imageUrl', ''),
          buttons: (0, _get2.default)(msg, 'buttons', []),
        },
        payload: (0, _get2.default)(msg, 'payload', {}),
      };
    });

    var webhookPayload = (0, _get2.default)(
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

      dispatch({
        type: _actionTypes.RECEIVE_WEBHOOK_DATA,
        webhookPayload: webhookPayload,
      });
    }

    var systemTime = (0, _dateFns.format)(
      new Date(),
      _dateFormats.sysTimeFormat
    );
    var timestamp = (0, _dateFns.getTime)(new Date());

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

function saveResponse(data) {
  return function(dispatch, getState) {
    var hasSuggestion = (0, _find2.default)(data.responses, [
      'type',
      'suggestion',
    ])
      ? true
      : false;
    if (hasSuggestion) {
      dispatch({ type: _actionTypes.SHOW_BUTTON_BAR });
    } else {
      dispatch({ type: _actionTypes.HIDE_BUTTON_BAR });
    }

    dispatch({ type: _actionTypes.SAVE_RESPONSE, data: data });
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
