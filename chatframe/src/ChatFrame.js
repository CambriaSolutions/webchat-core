import React, { PureComponent } from 'react'
import Paper from 'material-ui/Paper'
import styled from 'styled-components'

// Components
import Header from './Header'
import ChatWindow from './ChatWindow'
import UserInput from './UserInput'
import ButtonBar from './ButtonBar'

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
  render() {
    return (
      <OuterFrame elevation={6}>
        <Header />
        <ChatWindow />
        <ButtonBar />
        <UserInput />
      </OuterFrame>
    )
  }
}

export default ChatFrame
