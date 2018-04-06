import { combineReducers } from 'redux'
import config from './configReducer'
import conversation from './conversationReducer'
import buttonBar from './buttonBarReducer'
import userInput from './userInputReducer'

const rootReducer = combineReducers({
  config,
  conversation,
  buttonBar,
  userInput
})
export default rootReducer
