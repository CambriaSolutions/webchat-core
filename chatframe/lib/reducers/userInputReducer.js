'use strict';

exports.__esModule = true;

var _actionTypes = require('../actions/actionTypes');

var t = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          newObj[key] = obj[key];
      }
    }
    newObj.default = obj;
    return newObj;
  }
}

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

exports.default = userInput;
module.exports = exports['default'];
