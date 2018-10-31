import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import filter from 'lodash/filter'
import {
  CellMeasurer,
  CellMeasurerCache,
  List,
  AutoSizer,
} from 'react-virtualized'
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

const ContentWrapper = styled.div`
  background: ${grey[200]};
  z-index: 4;
  grid-area: chatwindow;
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
    this.ListRef = React.createRef()
    this.WrapperRef = React.createRef()
    this.cache = new CellMeasurerCache({
      defaultHeight: 150,
      fixedWidth: true,
    })
    this.messageElements = []
  }
  componentDidUpdate() {
    this.cache.clearAll()
    if (this.ListRef.current) {
      this.ListRef.current.recomputeRowHeights()
    }
    this.ListRef.current.scrollToRow(this.props.messages.length)
    this.ListRef.current.forceUpdateGrid()
  }
  onResize = () => {
    this.ListRef.current.scrollToRow(this.props.messages.length)
  }
  rowRenderer = ({ index, key, parent, style }) => {
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
    this.messageElements = messageElements.map(m => m.element)
    return (
      <CellMeasurer
        cache={this.cache}
        key={key}
        parent={parent}
        rowIndex={index}
      >
        <div style={style}>{messageElements[index].element}</div>
      </CellMeasurer>
    )
  }

  render() {
    return (
      <ContentWrapper elevation={1} square ref={this.WrapperRef}>
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
