import * as t from '../actions/actionTypes'

const initialState = {
  visible: false,
  buttons: []
}
function config(state = initialState, action) {
  switch (action.type) {
    case t.SHOW_BUTTON_BAR:
      return {
        ...state,
        visible: true
      }
    case t.HIDE_BUTTON_BAR:
      return {
        ...state,
        visible: false
      }
    default:
      return state
  }
}

export default config
