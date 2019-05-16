import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import isEqual from 'lodash/isEqual'
import difference from 'lodash/difference'
import merge from 'lodash/merge'
import uuidv4 from 'uuid/v4'
import grey from '@material-ui/core/colors/grey'
import Message from './Message'
import CardResponse from './CardResponse'
import MapResponse from './MapResponse'
import FeedbackResponse from './FeedbackResponse'

const ContentWrapper = styled.div`
  background: ${grey[100]};
  z-index: 4;
  grid-area: chatwindow;
  margin-bottom: 1px;
  margin-top: 8px;
  overflow: auto;
  display: flex;
  flex-direction: column-reverse;
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

function buildLoadingMessage() {
  return <Message key='loading' entity='bot' timestamp={Date.now()} isLoading />
}

function buildFeedbackResponse(message) {
  return (
    <FeedbackResponse
      feedbackData={message.payload.feedback}
      session={message.key}
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
    this.state = { messageElements: [] }
  }

  componentDidUpdate(prevProps) {
    const diff = difference(this.props.messages, prevProps.messages)
    if (diff.length > 0 && !isEqual(prevProps.messages, this.props.messages)) {
      this.parseNewMessages(diff)
    }
    // const newMessages = this.parseMessages()
    // if () {
    //   this.messages = newMessages
    //   this.createMessageElements()
    // }
  }

  parseNewMessages = diff => {
    const messages = this.parseMessages(diff).filter(m => !m.loading)

    messages.forEach((msg, index) => {
      setTimeout(() => {
        const isLast = index === messages.length - 1
        const el = this.createMessageElement(msg)
        const oldMessages = this.state.messageElements.filter(
          el => el.key !== 'loading'
        )
        const newMessages = [...oldMessages, el]
        if (!isLast) {
          newMessages.push(buildLoadingMessage())
        }
        this.setState({ messageElements: newMessages })
      }, index * 2000)
    })
  }

  createMessageElement = (msg, showTimestamp = false) => {
    // set timestamp display flag to true if it's the last message
    if (msg.entity === 'user') {
      return buildUserMessage(msg)
    } else if (msg.entity === 'bot' && msg.type === 'text') {
      return buildBotTextMessage(msg, showTimestamp)
    } else if (msg.entity === 'bot' && msg.type === 'card') {
      return buildBotCardMessage(msg)
    } else if (
      msg.entity === 'bot' &&
      msg.type === 'payload' &&
      msg.payload.mapPayload
    ) {
      return buildBotMapMessage(msg)
    } else if (
      msg.entity === 'bot' &&
      msg.type === 'payload' &&
      msg.payload.feedback
    ) {
      return buildFeedbackResponse(msg)
    }
    return buildBotTextMessage({ text: 'Something went wrong.' })
  }

  // Parse the raw message structure from the Redux props and convert
  // it into the appropriate format for each Message
  parseMessages = messages => {
    const messageData = []
    messages.forEach(msg => {
      // We want to make sure that each message has all of the metadata
      // The structure of the response is not consistent, so we are building
      // a consistent object describing each message.
      const metadata = {
        systemTime: msg.systemTime,
        entity: msg.entity,
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
  // createMessageElements = () => {
  //   const newMessages = this.parseMessages()
  //   const msgElements = []
  //   newMessages.forEach((msg, i) => {
  //     let showTimestamp = false
  //     // set timestamp display flag to true if it's the last message
  //     if (i === newMessages.length - 1) {
  //       showTimestamp = true
  //     }
  //     if (msg.loading) {
  //       return buildLoadingMessage(msg)
  //     } else if (msg.entity === 'user') {
  //       return buildUserMessage(msg)
  //     } else if (msg.entity === 'bot' && msg.type === 'text') {
  //       return buildBotTextMessage(msg, showTimestamp)
  //     } else if (msg.entity === 'bot' && msg.type === 'card') {
  //       return buildBotCardMessage(msg)
  //     } else if (
  //       msg.entity === 'bot' &&
  //       msg.type === 'payload' &&
  //       msg.payload.mapPayload
  //     ) {
  //       return buildBotMapMessage(msg)
  //     } else if (
  //       msg.entity === 'bot' &&
  //       msg.type === 'payload' &&
  //       msg.payload.feedback
  //     ) {
  //       return buildFeedbackResponse(msg)
  //     } else {
  //       return buildBotTextMessage({ text: 'Something went wrong.' })
  //     }
  //   })

  //   msgElements.sort((a, b) => {
  //     const dateA = parse(
  //       a.props.timestamp,
  //       sysTimeFormat,
  //       new Date(a.props.timestamp)
  //     )
  //     const dateB = parse(
  //       b.props.timestamp,
  //       sysTimeFormat,
  //       new Date(b.props.timestamp)
  //     )
  //     const diff = differenceInMilliseconds(dateA, dateB)
  //     return diff
  //   })

  //   this.setState({ messageElements: msgElements })
  // }

  render() {
    const { messageElements } = this.state
    return (
      <ContentWrapper elevation={1} square>
        <div>{messageElements}</div>
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
