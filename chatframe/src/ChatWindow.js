import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import filter from 'lodash/filter'
import moment from 'moment'

// Components
import Message from './Message'
import CardResponse from './CardResponse'

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
      )
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
        isLoading={message.loading + moment().format('MMDDYYYYhhmmssSSS')}
      />
    )
  }
}

function buildTextMessages(message) {
  const elements = []
  for (let key in message.responses) {
    const subMessage = message.responses[key]
    if (subMessage.type === 'text') {
      elements.push({
        systemTime: message.systemTime,
        element: (
          <Message
            message={subMessage.text}
            entity={message.entity}
            key={message.messageId + key + moment().format('MMDDYYYYhhmmssSSS')}
            isLoading={false}
            timestamp={message.systemTime}
          />
        )
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
            key={message.messageId + key + moment().format('MMDDYYYYhhmmssSSS')}
          />
        )
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
        ...buildCardMessages(message)
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
    chatWindowNode.scrollTop = chatWindowNode.scrollHeight
  }
  render() {
    const { messages } = this.props
    const botMessages = buildBotMessages(messages)
    const userMessages = buildUserMessages(messages)
    const messageElements = [...botMessages, ...userMessages]
    // Sort all messages by systemTime
    messageElements.sort((a, b) => {
      const momentA = moment(a.systemTime, 'MM-DD-YYYY hh:mm:ss.SSSa')
      const momentB = moment(b.systemTime, 'MM-DD-YYYY hh:mm:ss.SSSa')
      const diff = momentA.diff(momentB, 'milliseconds')
      return diff
    })

    const elements = messageElements.map(m => m.element)

    return (
      <Container innerRef={this.chatWindowRef}>
        <MessagesContainer>{elements}</MessagesContainer>
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
