import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import React, { PureComponent } from 'react'
import Paper from 'material-ui/Paper'
import styled from 'styled-components'

// Components
import Header from './Header'
import ChatWindow from './ChatWindow'
import UserInput from './UserInput'
import ButtonBar from './ButtonBar'

// Redux
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import rootReducer from './reducers/rootReducer'
import { initialize } from './actions/initialization'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

const OuterFrame = styled(Paper)`
  && {
    position: absolute;
    bottom: 24px;
    right: 24px;
    width: 60%;
    height: 60%;
    display: flex;
    flex-flow: column nowrap;
    overflow: hidden;
    z-index: 999;
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
        <OuterFrame elevation={6}>
          <Header />
          <ChatWindow />
          <ButtonBar />
          <UserInput />
        </OuterFrame>
      </Provider>
    )
  }
}

export default ChatFrame
