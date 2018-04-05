import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import filter from 'lodash/filter'
import moment from 'moment'

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

function buildUserMessages(messages) {}

function buildBotMessages(messages) {
  const botMessages = filter(messages, ['entity', 'bot'])
  const conversationElements = []

  for (let message of botMessages) {
    for (let subMessage of message.responses) {
      if (subMessage.type === 'text') {
        conversationElements.push(
          <Message
            message={subMessage.text}
            entity={message.entity}
            key={message.messageId}
          />
        )
      } else if (subMessage.type === 'card') {
        // build card here
      }
    }
  }

  return conversationElements
}

class ChatWindow extends PureComponent {
  render() {
    const { messages } = this.props

    const botMessages = buildBotMessages(messages)
    const userMessages = []

    const messageElements = [...botMessages, ...userMessages]

    // Sort all messages by timestamp
    messageElements.sort((a, b) => {
      return moment(a).diff(moment(b))
    })

    return (
      <Container>
        <MessagesContainer>{messageElements}</MessagesContainer>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    messages: state.conversation.messages
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow)
