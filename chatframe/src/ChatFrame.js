import { Provider } from 'react-redux'
import { createStore } from 'redux'
import React, { PureComponent } from 'react'
import Paper from 'material-ui/Paper'
import styled from 'styled-components'

// Components
import Header from './Header'
import ChatWindow from './ChatWindow'
import UserInput from './UserInput'
import ButtonBar from './ButtonBar'

// Test Data
import avatarImage from './img/wahbexLogo.png'

// Create redux store
import rootReducer from './reducers/rootReducer'
const store = createStore(rootReducer)

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
    // dispatch an action to save the props data into store
  }
  render() {
    const { testProp } = this.props
    return (
      <Provider store={store}>
        <OuterFrame elevation={6}>
          <Header />
          <ChatWindow avatar={avatarImage} />
          <ButtonBar />
          <UserInput />
        </OuterFrame>
      </Provider>
    )
  }
}

export default ChatFrame
