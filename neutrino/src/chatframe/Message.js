import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { parse, differenceInMinutes, differenceInSeconds } from 'date-fns'
import Paper from '@material-ui/core/Paper'
// Components
import Avatar from './Avatar'
import Loading from './Loading'
// Colors
import grey from '@material-ui/core/colors/grey'
// Date Format
import { sysTimeFormat } from './config/dateFormats'

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-top: 24px;
  min-height: 32px;
  align-items: ${p => (p.entity === 'user' ? 'flex-end' : 'flex-start')};
`

const ChatBubble = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: ${p => (p.entity === 'user' ? 'flex-end' : 'flex-start')};
`

const ExternalMessage = styled(Paper)`
  && {
    background: #fff;
    border-radius: 3px;
    font-size: 16px;
    line-height: 1.2rem;
    padding: 12px;
    position: relative;
    color: ${grey[900]};
    max-width: 85%;

    &:after {
      content: '\\00a0';
      height: 10px;
      width: 10px;
      position: absolute;
      transform: rotate(-45deg);
      top: 16px;
      left: -6px;
      background-color: #fff;
      border-top: 1px solid ${grey[400]};
      border-left: 1px solid ${grey[400]};
    }
  }
`

const UserMessage = styled(Paper)`
  && {
    background-color: ${grey[400]};
    border-radius: 3px;
    font-size: 16px;
    line-height: 1.2rem;
    padding: 12px;
    width: auto;
    position: relative;
    color: ${grey[900]};
    max-width: 85%;

    &:after {
      height: 10px;
      width: 10px;
      position: absolute;
      transform: rotate(-45deg);
      top: 16px;
      right: -6px;
      background-color: ${grey[400]};
      border-bottom: 1px solid ${grey[300]};
      border-right: 1px solid ${grey[300]};
    }
  }
`

const Timestamp = styled.div`
  font-size: 12px;
  color: ${grey[500]};
  margin-top: 8px;
  padding-left: 62px;
  padding-right: 2px;
`

class Message extends PureComponent {
  render() {
    const {
      message,
      entity,
      avatar,
      isLoading,
      timestamp,
      currentTime,
    } = this.props

    const now = parse(currentTime, sysTimeFormat, new Date(currentTime))
    const then = parse(timestamp, sysTimeFormat, new Date(currentTime))
    const diffMinutes = differenceInMinutes(now, then)
    const diffSeconds = differenceInSeconds(now, then)
    let formattedTimestamp = null
    if (diffMinutes >= 1) {
      formattedTimestamp = `${diffMinutes} min`
    } else if (diffSeconds >= 10) {
      formattedTimestamp = `${diffSeconds} sec`
    } else {
      formattedTimestamp = 'Now'
    }

    const chatMessage =
      entity === 'user' ? (
        <UserMessage elevation={1}>{message}</UserMessage>
      ) : (
        <ExternalMessage elevation={1}>
          {isLoading ? <Loading /> : message}
        </ExternalMessage>
      )
    return (
      <Container entity={entity}>
        <ChatBubble entity={entity}>
          <Avatar entity={entity} avatar={avatar} />
          {chatMessage}
        </ChatBubble>
        <Timestamp>{formattedTimestamp}</Timestamp>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    avatar: state.config.avatar,
    currentTime: state.conversation.currentTime,
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message)
