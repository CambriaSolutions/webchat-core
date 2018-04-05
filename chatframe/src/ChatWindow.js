import React, { PureComponent } from 'react'
import styled from 'styled-components'

// Components
import Message from './Message'

// Colors
import grey from 'material-ui/colors/grey'

const Container = styled.div`
  position: relative;
  padding: 0 16px 16px 16px;
  overflow-y: auto;
  height: 100%;
  background: ${grey[300]};
`

const MessagesContainer = styled.div`
  min-height: min-content;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  min-height: 100%;
  height: auto;
`

const testMessages = [
  {
    entity: 'user',
    message: 'hello'
  },
  {
    entity: 'bot',
    message:
      'Hello I am the Washington Health Exchange Bot. I can respond with really long messages like this. This message just keeps going and going and going. Wow, are you impressed?'
  },
  {
    entity: 'user',
    message: 'Not really.'
  },
  {
    entity: 'bot',
    message: 'Oh.'
  },
  {
    entity: 'user',
    message: "Don't be too hard on yourself."
  }
]

class ChatWindow extends PureComponent {
  render() {
    const { avatar } = this.props
    return (
      <Container>
        <MessagesContainer>
          {testMessages.map((msg, index) => {
            let avatarImage = msg.entity !== 'user' ? avatar : null
            let key = `MSG_${index}`
            return (
              <Message
                message={msg.message}
                entity={msg.entity}
                key={key}
                avatar={avatarImage}
              />
            )
          })}
        </MessagesContainer>
      </Container>
    )
  }
}

export default ChatWindow
