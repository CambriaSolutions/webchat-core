'use strict';

exports.__esModule = true;
exports.saveUserInput = saveUserInput;
exports.submitUserInput = submitUserInput;

var _actionTypes = require('./actionTypes');

var _conversation = require('./conversation');

function saveUserInput(value) {
  return { type: _actionTypes.SAVE_USER_INPUT, value: value };
}

function submitUserInput() {
  return function(dispatch, getState) {
    var userInput = getState().userInput;
    if (!userInput || userInput === '') {
      return;
    }
    dispatch((0, _conversation.createUserResponse)(userInput));
    dispatch(saveUserInput(''));
  };
}
