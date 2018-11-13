import * as t from '../actions/actionTypes'

const initialState = {
  avatar: null,
  title: 'Chat Window',
  windowVisible: false,
  fullscreen: false,
}
function config(state = initialState, action) {
  switch (action.type) {
    case t.SET_AVATAR:
      return { ...state, avatar: action.avatar }

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
