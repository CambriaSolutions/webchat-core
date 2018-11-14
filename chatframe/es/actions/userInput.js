import { SAVE_USER_INPUT } from './actionTypes';
import { createUserResponse } from './conversation';

export function saveUserInput(value) {
  return { type: SAVE_USER_INPUT, value: value };
}

export function submitUserInput() {
  return function(dispatch, getState) {
    var userInput = getState().userInput;
    if (!userInput || userInput === '') {
      return;
    }
    dispatch(createUserResponse(userInput));
    dispatch(saveUserInput(''));
  };
}
