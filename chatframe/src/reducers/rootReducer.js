import { combineReducers } from 'redux'
import config from './configReducer'
import conversation from './conversationReducer'
import buttonBar from './buttonBarReducer'

const rootReducer = combineReducers({
  config,
  conversation,
  buttonBar
})
export default rootReducer
