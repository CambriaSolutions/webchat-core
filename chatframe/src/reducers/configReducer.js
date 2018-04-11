import * as t from '../actions/actionTypes'
import { createMuiTheme } from 'material-ui/styles'
import defaultAvatar from '../img/defaultAvatar.svg'

// Colors
import pink from 'material-ui/colors/pink'
import blue from 'material-ui/colors/blue'

const defaultTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink
  }
})

const initialState = {
  avatar: defaultAvatar,
  title: 'Chat Window',
  theme: defaultTheme
}
function config(state = initialState, action) {
  switch (action.type) {
    case t.SET_AVATAR:
      return { ...state, avatar: action.avatar }

    case t.SET_TITLE:
      return { ...state, title: action.title }

    case t.CREATE_THEME:
      return { ...state, theme: action.theme }

    default:
      return state
  }
}

export default config
