var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

import * as t from '../actions/actionTypes';

var initialState = {
  visible: false,
  buttons: [],
};
function config() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : initialState;
  var action = arguments[1];

  switch (action.type) {
    case t.SHOW_BUTTON_BAR:
      return _extends({}, state, {
        visible: true,
      });
    case t.HIDE_BUTTON_BAR:
      return _extends({}, state, {
        visible: false,
      });
    default:
      return state;
  }
}

export default config;
