import { combineReducers } from 'redux'
import config from './configReducer'
import conversation from './conversationReducer'

const rootReducer = combineReducers({
  config,
  conversation
})

export default rootReducer
