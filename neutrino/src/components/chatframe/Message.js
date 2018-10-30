import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { parse, differenceInMinutes, differenceInSeconds } from 'date-fns'
import Paper from '@material-ui/core/Paper'
import grey from '@material-ui/core/colors/grey'
import Typography from '@material-ui/core/Typography'
import { sysTimeFormat } from './config/dateFormats'
import Avatar from './Avatar'
import Loading from './Loading'

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 16px 0;
  height: min-content;
  align-items: ${p => (p.entity === 'user' ? 'flex-end' : 'flex-start')};
`

const ChatBubble = styled.div`
  width: 100%;
  height: min-content;
  display: flex;
  flex-flow: row nowrap;
  justify-content: ${p => (p.entity === 'user' ? 'flex-end' : 'flex-start')};
`

const ExternalMessage = styled(Paper)`
  && {
    background: #fff;
    border-radius: 3px;
    padding: 12px;
    color: ${grey[900]};
  }
`

const UserMessage = styled(Paper)`
  && {
    background-color: ${grey[400]};
    border-radius: 3px;
    padding: 12px;
    color: ${grey[900]};
  }
`

const Timestamp = styled(Typography)`
  && {
    color: ${grey[500]};
    margin-top: 8px;
    padding-left: 62px;
    padding-right: 2px;
  }
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
        <UserMessage elevation={1}>
          <Typography variant="body1">{message}</Typography>
        </UserMessage>
      ) : (
        <ExternalMessage elevation={1}>
          {isLoading ? (
            <Loading />
          ) : (
            <Typography variant="body1">{message}</Typography>
          )}
        </ExternalMessage>
      )
    return (
      <Container entity={entity}>
        <ChatBubble entity={entity}>
          <Avatar entity={entity} avatar={avatar} />
          {chatMessage}
        </ChatBubble>
        <Timestamp variant="caption">{formattedTimestamp}</Timestamp>
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

// const mapDispatchToProps = dispatch => {
//   return {}
// }

export default connect(mapStateToProps)(Message)
