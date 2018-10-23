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
  z-index: 999999;
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
  constructor(props) {
    super(props)
    this.store = createStore(
      rootReducer,
      composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
    this.currentValue = null
  }
  componentDidMount() {
    // We load the initial options into the Redux store inside of the
    // componentDidMount() lifecycle hook. This lets us use Redux to manage
    // state instead of passing props down manually.
    this.store.dispatch(initialize(this.props))

    // In order to expose when a webhook payload of custom data is received,
    // we manually create a subscription to the data piece we want to expose
    this.unsubscribe = this.store.subscribe(() => this.handleChange(this.store))
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  select(state) {
    return state.conversation.webhookPayload
  }

  handleChange(store) {
    let previousValue = this.currentValue
    this.currentValue = this.select(store.getState())
    if (previousValue !== this.currentValue && this.props.onPayload) {
      this.props.onPayload(this.currentValue)
    }
  }

  render() {
    return (
      <Provider store={this.store}>
        <OuterContainer>
          <ChatContainer />
          <ActivatorButton variant="fab" />
        </OuterContainer>
      </Provider>
    )
  }
}

export default ChatFrame
