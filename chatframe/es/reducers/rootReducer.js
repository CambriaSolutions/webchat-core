import { combineReducers } from 'redux';
import config from './configReducer';
import conversation from './conversationReducer';
import buttonBar from './buttonBarReducer';
import userInput from './userInputReducer';
import error from './errorReducer';

var rootReducer = combineReducers({
  config: config,
  conversation: conversation,
  buttonBar: buttonBar,
  userInput: userInput,
  error: error,
});
export default rootReducer;
