import * as t from '../actions/actionTypes';

var initialState = '';
function config() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : initialState;
  var action = arguments[1];

  switch (action.type) {
    case t.DISPLAY_ERROR:
      return action.error;

    case t.CLEAR_ERROR:
      return initialState;

    default:
      return state;
  }
}

export default config;
