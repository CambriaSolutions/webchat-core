'use strict';

exports.__esModule = true;

var _redux = require('redux');

var _configReducer = require('./configReducer');

var _configReducer2 = _interopRequireDefault(_configReducer);

var _conversationReducer = require('./conversationReducer');

var _conversationReducer2 = _interopRequireDefault(_conversationReducer);

var _buttonBarReducer = require('./buttonBarReducer');

var _buttonBarReducer2 = _interopRequireDefault(_buttonBarReducer);

var _userInputReducer = require('./userInputReducer');

var _userInputReducer2 = _interopRequireDefault(_userInputReducer);

var _errorReducer = require('./errorReducer');

var _errorReducer2 = _interopRequireDefault(_errorReducer);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var rootReducer = (0, _redux.combineReducers)({
  config: _configReducer2.default,
  conversation: _conversationReducer2.default,
  buttonBar: _buttonBarReducer2.default,
  userInput: _userInputReducer2.default,
  error: _errorReducer2.default,
});
exports.default = rootReducer;
module.exports = exports['default'];
