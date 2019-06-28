import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import isEqual from 'lodash/isEqual'
import merge from 'lodash/merge'
import uuidv4 from 'uuid/v4'
import grey from '@material-ui/core/colors/grey'
import { parse, differenceInMilliseconds } from 'date-fns'
import { sysTimeFormat } from './config/dateFormats'
import Message from './Message'
import CardResponse from './CardResponse'
import MapResponse from './MapResponse'
import FeedbackResponse from './FeedbackResponse'

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* Vertically flips the container element to achieve flex-direction:column-reverse effect */
  transform: scale(1, -1);
  overflow: auto;
`
const Content = styled.div`
  background: ${grey[100]};
  z-index: 4;
  grid-area: chatwindow;
  margin-bottom: 1px;
  margin-top: 8px;
`

const ChatMessage = styled.div`
  /* Vertically flips the content element so that the messages won't be upside down */
  transform: scale(1, -1);
`

function buildUserMessage(message) {
  return (
    <Message
      message={message.text}
      entity={message.entity}
      key={message.key}
      timestamp={message.systemTime}
      isLoading={false}
    />
  )
}

function buildLoadingMessage(message) {
  return (
    <Message
      key='loading'
      entity='bot'
      timestamp={message.systemTime}
      isLoading={message.loading}
    />
  )
}

function buildFeedbackResponse(message) {
  return (
    <FeedbackResponse
      feedbackData={message.payload.feedback}
      session={message.session}
      entity={message.entity}
      key={message.key}
      isLoading={false}
      timestamp={message.systemTime}
    />
  )
}

function buildBotTextMessage(message, showTimestamp) {
  return (
    <Message
      message={message.text}
      entity={message.entity}
      key={message.key}
      isLoading={false}
      timestamp={message.systemTime}
      showTimestamp={showTimestamp}
    />
  )
}

function buildBotCardMessage(message) {
  return (
    <CardResponse
      data={message.card}
      timestamp={message.systemTime}
      key={message.key}
    />
  )
}

function buildBotMapMessage(message) {
  return (
    <MapResponse
      data={message.payload.mapPayload}
      timestamp={message.systemTime}
      key={message.key}
    />
  )
}
class ChatWindow extends PureComponent {
  constructor(props) {
    super(props)
    this.messages = []
    this.state = { messageElements: [] }
  }

  componentDidUpdate() {
    const newMessages = this.parseMessages()
    if (!isEqual(this.messages, newMessages)) {
      this.messages = newMessages
      this.createMessageElements()
    }
    if (this.componentRef.current) {
      this.componentRef.current.addEventListener('wheel', this.handleWheel)
    }
  }

  // Parse the raw message structure from the Redux props and convert
  // it into the appropriate format for each Message
  parseMessages = () => {
    const { messages } = this.props
    const messageData = []
    messages.forEach(msg => {
      // We want to make sure that each message has all of the metadata
      // The structure of the response is not consistent, so we are building
      // a consistent object describing each message.
      const metadata = {
        systemTime: msg.systemTime,
        entity: msg.entity,
        session: msg.messageSession,
      }
      if (msg.loading) {
        const key = uuidv4()
        metadata.key = key
        const loadingMessage = merge(msg, metadata)
        messageData.push(loadingMessage)
      } else if (msg.entity === 'bot') {
        // Bot messages contain an array of 'responses' -- we don't want to
        // display all of them here (e.g. suggestions), so we only push
        // the ones we display to the final array
        msg.responses.forEach(res => {
          if (
            res.type === 'text' ||
            res.type === 'card' ||
            res.type === 'payload'
          ) {
            const key = uuidv4()
            metadata.key = key
            const botMessage = merge(res, metadata)
            messageData.push(botMessage)
          }
        })
      } else if (msg.entity === 'user') {
        const key = uuidv4()
        metadata.key = key
        const userMessage = merge(msg, metadata)
        messageData.push(userMessage)
      }
    })
    return messageData
  }

  // For each message, create the appropriate React component and save
  // it for later use.
  createMessageElements = () => {
    const newMessages = this.parseMessages()
    const msgElements = []
    newMessages.forEach((msg, i) => {
      let showTimestamp = false
      // set timestamp display flag to true if it's the last message
      if (i === newMessages.length - 1) {
        showTimestamp = true
      }
      if (msg.loading) {
        msgElements.push(buildLoadingMessage(msg))
      } else if (msg.entity === 'user') {
        msgElements.push(buildUserMessage(msg))
      } else if (msg.entity === 'bot' && msg.type === 'text') {
        msgElements.push(buildBotTextMessage(msg, showTimestamp))
      } else if (msg.entity === 'bot' && msg.type === 'card') {
        msgElements.push(buildBotCardMessage(msg))
      } else if (
        msg.entity === 'bot' &&
        msg.type === 'payload' &&
        msg.payload.mapPayload
      ) {
        msgElements.push(buildBotMapMessage(msg))
      } else if (
        msg.entity === 'bot' &&
        msg.type === 'payload' &&
        msg.payload.feedback
      ) {
        msgElements.push(buildFeedbackResponse(msg))
      } else if (
        msg.entity === 'bot' &&
        msg.type === 'payload' &&
        msg.payload.disableInput
      ) {
        return console.log(msg.payload)
      } else {
        msgElements.push(
          buildBotTextMessage({ text: ['Something went wrong.'] })
        )
      }
    })

    msgElements.sort((a, b) => {
      const dateA = parse(
        a.props.timestamp,
        sysTimeFormat,
        new Date(a.props.timestamp)
      )
      const dateB = parse(
        b.props.timestamp,
        sysTimeFormat,
        new Date(b.props.timestamp)
      )
      const diff = differenceInMilliseconds(dateA, dateB)
      return diff
    })
    this.setState({ messageElements: msgElements })
  }

  handleWheel = e => {
    // reverse scroll to handle the transform property
    if (e.deltaY) {
      e.preventDefault()
      e.currentTarget.scrollTop -=
        parseFloat(
          getComputedStyle(e.currentTarget).getPropertyValue('font-size')
        ) *
        (e.deltaY < 0 ? -1 : 1) *
        2
    }
  }

  componentRef = React.createRef(null)

  render() {
    const { messageElements } = this.state
    return (
      <ContentWrapper ref={this.componentRef}>
        <Content elevation={1} square>
          <ChatMessage>{messageElements}</ChatMessage>
        </Content>
      </ContentWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    messages: state.conversation.messages,
    buttonBarVisible: state.buttonBar.visible,
    error: state.error,
  }
}

export default connect(mapStateToProps)(ChatWindow)
