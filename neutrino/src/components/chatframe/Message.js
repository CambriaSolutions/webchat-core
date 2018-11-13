import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { parse, differenceInMinutes, differenceInSeconds } from 'date-fns'
import grey from '@material-ui/core/colors/grey'
import Typography from '@material-ui/core/Typography'
import { withTheme } from '@material-ui/core/styles'
import { sysTimeFormat } from './config/dateFormats'
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

const ExternalMessage = styled.div`
  && {
    background: ${grey[400]};
    border-top-right-radius: 10px;
    border-top-left-radius: 1px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 12px;
  }
`

const UserMessage = styled.div`
  && {
    background-color: ${p => p.theme.palette.primary.main};
    color: ${p =>
      p.theme.palette.getContrastText(p.theme.palette.primary.dark)};
    border-top-left-radius: 10px;
    border-top-right-radius: 1px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 12px;
  }
`

const Timestamp = styled(Typography)`
  && {
    color: ${grey[500]};
    margin-top: 8px;
    padding-left: 12px;
    padding-right: 2px;
  }
`

class Message extends PureComponent {
  render() {
    const {
      message,
      entity,
      isLoading,
      timestamp,
      currentTime,
      theme,
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
        <UserMessage elevation={1} theme={theme}>
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
        <ChatBubble entity={entity}>{chatMessage}</ChatBubble>
        <Timestamp variant="caption">{formattedTimestamp}</Timestamp>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentTime: state.conversation.currentTime,
  }
}

// const mapDispatchToProps = dispatch => {
//   return {}
// }

export default withTheme()(connect(mapStateToProps)(Message))
