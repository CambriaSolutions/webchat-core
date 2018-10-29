import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import filter from 'lodash/filter'
import grey from '@material-ui/core/colors/grey'
import {
  parse,
  format,
  addMilliseconds,
  differenceInMilliseconds,
} from 'date-fns'
import Message from './Message'
import CardResponse from './CardResponse'
import { sysTimeFormat } from './config/dateFormats'

const Container = styled.div`
  position: relative;
  padding: 0 16px 16px 16px;
  overflow-y: auto;
  height: 100%;
  background: ${grey[200]};
  display: flex;
  flex-direction: column-reverse;
  z-index: 4;
`

const MessagesContainer = styled.div`
  flex: 1 0 auto;
  min-height: min-content;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  min-height: 100%;
  height: auto;
`

function buildUserMessages(messages) {
  const userMessages = filter(messages, ['entity', 'user'])
  const conversationElements = []
  for (const message of userMessages) {
    conversationElements.push({
      systemTime: message.systemTime,
      element: (
        <Message
          message={message.text}
          entity={message.entity}
          key={message.messageId}
          timestamp={message.systemTime}
        />
      ),
    })
  }
  return conversationElements
}

function buildLoadingMessage(message) {
  return {
    systemTime: message.systemTime,
    element: (
      <Message
        key="loading"
        entity="bot"
        timestamp={message.systemTime}
        isLoading={message.loading + format(new Date(), sysTimeFormat)}
      />
    ),
  }
}

function buildTextMessages(message) {
  const elements = []
  for (const key in message.responses) {
    const subMessage = message.responses[key]
    if (subMessage.type === 'text') {
      // We add key*10 milliseconds to each text message to ensure that they
      // display in the correct order. They arrive in the same response from
      // the provider, which has a single timestamp for all subMessages. This
      // allows them to be differentiated and sorted.
      const sysTime = parse(
        message.systemTime,
        sysTimeFormat,
        new Date(message.systemTime),
      )
      elements.push({
        systemTime: format(addMilliseconds(sysTime, key * 10), sysTimeFormat),
        element: (
          <Message
            message={subMessage.text}
            entity={message.entity}
            key={message.messageId + key + format(new Date(), sysTimeFormat)}
            isLoading={false}
            timestamp={message.systemTime}
          />
        ),
      })
    }
  }
  return elements
}

function buildCardMessages(message) {
  const elements = []
  for (const key in message.responses) {
    const subMessage = message.responses[key]
    if (subMessage.type === 'card') {
      elements.push({
        systemTime: message.systemTime,
        element: (
          <CardResponse
            data={subMessage.card}
            timestamp={message.systemTime}
            key={message.messageId + key + format(new Date(), sysTimeFormat)}
          />
        ),
      })
    }
  }
  return elements
}

function buildBotMessages(messages) {
  const botMessages = filter(messages, ['entity', 'bot'])
  let conversationElements = []

  for (const message of botMessages) {
    // Loading message
    if (message.loading) {
      conversationElements.push(buildLoadingMessage(message))
    } else {
      conversationElements = [
        ...conversationElements,
        ...buildTextMessages(message),
        ...buildCardMessages(message),
      ]
    }
  }
  return conversationElements
}

class ChatWindow extends PureComponent {
  constructor(props) {
    super(props)
    this.chatWindowRef = React.createRef()
  }
  componentDidUpdate() {
    const chatWindowNode = this.chatWindowRef.current
    chatWindowNode.scrollTop = chatWindowNode.scrollHeight
  }
  render() {
    const { messages } = this.props
    const botMessages = buildBotMessages(messages)
    const userMessages = buildUserMessages(messages)
    const messageElements = [...botMessages, ...userMessages]
    // Sort all messages by systemTime
    messageElements.sort((a, b) => {
      const dateA = parse(a.systemTime, sysTimeFormat, new Date(a.systemTime))
      const dateB = parse(b.systemTime, sysTimeFormat, new Date(a.systemTime))
      const diff = differenceInMilliseconds(dateA, dateB)
      return diff
    })
    const elements = messageElements.map(m => m.element)
    return (
      <Container ref={this.chatWindowRef} elevation={1} square>
        <MessagesContainer>{elements}</MessagesContainer>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    messages: state.conversation.messages,
  }
}

// const mapDispatchToProps = dispatch => {
//   return {}
// }

export default connect(mapStateToProps)(ChatWindow)
