import { SET_TITLE, SET_AVATAR } from './actionTypes'
import { setupClient } from './conversation'
import { sendEvent } from './dialogflow'

export function initialize(props) {
  return (dispatch, getState) => {
    const { title, avatar, client, token } = props
    dispatch({ type: SET_TITLE, title })
    dispatch({ type: SET_AVATAR, avatar })
    dispatch(setupClient(client, token))
    dispatch(sendEvent('Welcome'))
  }
}
