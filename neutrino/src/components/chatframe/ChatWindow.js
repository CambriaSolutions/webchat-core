import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import isEqual from 'lodash/isEqual'
import merge from 'lodash/merge'
import {
  CellMeasurer,
  CellMeasurerCache,
  List,
  AutoSizer,
} from 'react-virtualized'
import grey from '@material-ui/core/colors/grey'
import { parse, differenceInMilliseconds } from 'date-fns'
import { sysTimeFormat } from './config/dateFormats'
import Message from './Message'
import CardResponse from './CardResponse'

const ContentWrapper = styled.div`
  background: ${grey[100]};
  z-index: 4;
  grid-area: chatwindow;
  margin-bottom: 1px;
  margin-top: 8px;
  width: 100%;

  & ::-webkit-scrollbar-thumb {
    background-color: ${grey[600]};
    -webkit-border-radius: 8px;
    border-radius: 8px;
    border: 2px solid ${grey[100]};
  }
  & ::-webkit-scrollbar {
    background-color: ${grey[100]};
    width: 8px;
  }
`

function buildUserMessage(message) {
  return (
    <Message
      message={message.text}
      entity={message.entity}
      key={message.messageId}
      timestamp={message.systemTime}
      isLoading={false}
    />
  )
}

function buildLoadingMessage(message) {
  return (
    <Message
      key="loading"
      entity="bot"
      timestamp={message.systemTime}
      isLoading={message.loading}
    />
  )
}

function buildBotTextMessage(message) {
  return (
    <Message
      message={message.text}
      entity={message.entity}
      key={message.messageId}
      isLoading={false}
      timestamp={message.systemTime}
    />
  )
}

function buildBotCardMessage(message) {
  return (
    <CardResponse
      data={message.card}
      timestamp={message.systemTime}
      key={message.messageId}
    />
  )
}

class ChatWindow extends PureComponent {
  constructor(props) {
    super(props)
    this.ListRef = React.createRef()
    this.cache = new CellMeasurerCache({
      defaultHeight: 300,
      fixedWidth: true,
    })
    this.messages = []
    this.messageElements = []
  }
  componentDidUpdate() {
    const newMessages = this.parseMessages()
    if (!isEqual(this.messages, newMessages)) {
      this.messages = newMessages
      this.createMessageElements()
      this.cache.clearAll()
      if (this.ListRef.current) {
        this.ListRef.current.recomputeRowHeights()
        this.ListRef.current.scrollToRow(newMessages.length)
        this.ListRef.current.forceUpdateGrid()
      }
    }
  }
  onResize = () => {
    this.ListRef.current.scrollToRow(this.messages.length)
  }

  // Parse the raw message structure from the Redux props and convert
  // it into the appropriate format for each Message
  parseMessages = () => {
    const { messages } = this.props
    const messageData = []
    messages.forEach((msg, index) => {
      // We want to make sure that each message has all of the metadata
      // The structure of the response is not consistent, so we are building
      // a consistent object describing each message.
      const metadata = {
        systemTime: msg.systemTime,
        entity: msg.entity,
        key: `msg-${index}-${msg.systemTime}`,
      }
      if (msg.loading) {
        const loadingMessage = merge(msg, metadata)
        messageData.push(loadingMessage)
      } else if (msg.entity === 'bot') {
        // Bot messages contain an array of 'responses' -- we don't want to
        // display all of them here (e.g. suggestions), so we only push
        // the ones we display to the final array
        msg.responses.forEach(res => {
          if (res.type === 'text' || res.type === 'card') {
            const botMessage = merge(res, metadata)
            messageData.push(botMessage)
          }
        })
      } else if (msg.entity === 'user') {
        const userMessage = merge(msg, metadata)
        messageData.push(userMessage)
      }
    })
    return messageData
  }

  // For each message, create the appropriate React component and save
  // it for later use. We do this outside of rowRenderer to avoid
  // extra work inside of each render step
  createMessageElements = () => {
    const newMessages = this.parseMessages()
    const msgElements = []
    newMessages.forEach(msg => {
      if (msg.loading) {
        msgElements.push(buildLoadingMessage(msg))
      } else if (msg.entity === 'user') {
        msgElements.push(buildUserMessage(msg))
      } else if (msg.entity === 'bot' && msg.type === 'text') {
        msgElements.push(buildBotTextMessage(msg))
      } else if (msg.entity === 'bot' && msg.type === 'card') {
        msgElements.push(buildBotCardMessage(msg))
      } else {
        msgElements.push(buildBotTextMessage({ text: 'Something went wrong.' }))
      }
    })

    msgElements.sort((a, b) => {
      const dateA = parse(
        a.props.timestamp,
        sysTimeFormat,
        new Date(a.props.timestamp),
      )
      const dateB = parse(
        b.props.timestamp,
        sysTimeFormat,
        new Date(b.props.timestamp),
      )
      const diff = differenceInMilliseconds(dateA, dateB)
      return diff
    })

    this.messageElements = msgElements
  }

  // Render each row. During the render step, measure the size of
  // each message and size it appropriately.
  rowRenderer = ({ index, key, parent, style }) => {
    return (
      <CellMeasurer
        cache={this.cache}
        key={key}
        parent={parent}
        rowIndex={index}
      >
        <div style={style}>{this.messageElements[index]}</div>
      </CellMeasurer>
    )
  }

  render() {
    return (
      <ContentWrapper elevation={1} square>
        <AutoSizer onResize={this.onResize}>
          {({ height, width }) => (
            <List
              messages={this.props.messages}
              style={{
                outline: 'none',
                padding: '0 16px 0 16px',
              }}
              ref={this.ListRef}
              height={height}
              width={width}
              rowCount={this.props.messages.length}
              deferredMeasurementCache={this.cache}
              rowHeight={this.cache.rowHeight}
              rowRenderer={this.rowRenderer}
              onScroll={this.onScroll}
              scrollToIndex={this.props.messages.length}
              scrollToAlignment="end"
            />
          )}
        </AutoSizer>
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

// const mapDispatchToProps = dispatch => {
//   return {}
// }

export default connect(mapStateToProps)(ChatWindow)
