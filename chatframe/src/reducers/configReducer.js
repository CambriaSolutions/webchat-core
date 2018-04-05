import * as t from '../actions/actionTypes'
import defaultAvatar from '../img/defaultAvatar.svg'

const initialState = {
  avatar: defaultAvatar,
  title: 'Chat Window'
}
function config(state = initialState, action) {
  switch (action.type) {
    case t.SET_AVATAR:
      return { ...state, avatar: action.avatar }

    case t.SET_TITLE:
      return { ...state, title: action.title }

    default:
      return initialState
  }
}

export default config
