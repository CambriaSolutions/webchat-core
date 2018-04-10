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
import ErrorBar from './ErrorBar'

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
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    overflow: hidden;
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
          <ErrorBar />
          <UserInput />
        </OuterFrame>
      </Provider>
    )
  }
}

export default ChatFrame
