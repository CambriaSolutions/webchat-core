import * as t from '../actions/actionTypes';

var initialState = '';
function userInput() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : initialState;
  var action = arguments[1];

  switch (action.type) {
    case t.SAVE_USER_INPUT:
      return action.value;

    default:
      return state;
  }
}

export default userInput;
