import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import filter from 'lodash/filter'

// Components
import Message from './Message'
import CardResponse from './CardResponse'

// Date Format
import { sysTimeFormat } from './config/dateFormats'
import {
  parse,
  format,
  addMilliseconds,
  differenceInMilliseconds,
} from 'date-fns'

const Container = styled.div`
  /* box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12); */
  position: relative;
  padding: 0 16px 16px 16px;
  overflow-y: auto;
  height: 100%;
  background: ${p => p.theme.palette.grey[200]};
  display: flex;
  flex-direction: column-reverse;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
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
  for (let message of userMessages) {
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
  for (let key in message.responses) {
    const subMessage = message.responses[key]
    if (subMessage.type === 'text') {
      // We add key*10 milliseconds to each text message to ensure that they
      // display in the correct order. They arrive in the same response from
      // the provider, which has a single timestamp for all subMessages. This
      // allows them to be differentiated and sorted.
      const sysTime = parse(
        message.systemTime,
        sysTimeFormat,
        new Date(message.systemTime)
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
  for (let key in message.responses) {
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

  for (let message of botMessages) {
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
  componentDidUpdate(prevProps, prevState, snapshot) {
    const chatWindowNode = this.chatWindowRef.current
    // chatWindowNode.scrollTop = chatWindowNode.scrollHeight
  }
  render() {
    const { messages, theme } = this.props
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
      <Container ref={this.chatWindowRef} theme={theme} elevation={1} square>
        <MessagesContainer>{elements}</MessagesContainer>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    messages: state.conversation.messages,
    theme: state.config.theme,
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatWindow)
