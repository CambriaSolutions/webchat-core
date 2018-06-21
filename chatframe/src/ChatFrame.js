import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import React, { PureComponent } from 'react'
import styled from 'styled-components'
import WebFont from 'webfontloader'

// Components
import ActivatorButton from './ActivatorButton'
import ChatContainer from './ChatContainer'

// Redux
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import rootReducer from './reducers/rootReducer'
import { initialize } from './actions/initialization'

// Styles
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

WebFont.load({
  google: {
    families: ['Roboto:300,400,500'],
  },
})

const OuterContainer = styled.div`
  width: 100%;
  height: 100%;
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  & > * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`

class ChatFrame extends PureComponent {
  componentDidMount() {
    // We load the initial options into the Redux store inside of the
    // componentDidMount() lifecycle hook. This lets us use Redux to manage
    // state instead of passing props down manually.
    store.dispatch(initialize(this.props))
  }
  render() {
    return (
      <Provider store={store}>
        <OuterContainer>
          <ChatContainer />
          <ActivatorButton variant="fab" />
        </OuterContainer>
      </Provider>
    )
  }
}

export default ChatFrame
