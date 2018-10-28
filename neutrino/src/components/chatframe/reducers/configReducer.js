import * as t from '../actions/actionTypes'

// Colors
import pink from '@material-ui/core/colors/pink'
import blue from '@material-ui/core/colors/blue'

const initialState = {
  avatar: null,
  title: 'Chat Window',
  windowVisible: false,
  fullscreen: false,
}
function config(state = initialState, action) {
  switch (action.type) {
    case t.SET_AVATAR:
      if (action.avatar) {
        return { ...state, avatar: action.avatar }
      } else {
        return state
      }

    case t.SET_TITLE:
      return { ...state, title: action.title }

    case t.SHOW_WINDOW:
      return { ...state, windowVisible: true }

    case t.HIDE_WINDOW:
      return { ...state, windowVisible: false }

    case t.FULLSCREEN:
      return { ...state, fullscreen: true }

    case t.WINDOWED:
      return { ...state, fullscreen: false }

    default:
      return state
  }
}

export default config
