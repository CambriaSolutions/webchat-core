import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { parse, format, isSameDay, subDays } from 'date-fns'
import grey from '@material-ui/core/colors/grey'
import Typography from '@material-ui/core/Typography'
import { withTheme } from '@material-ui/core/styles'
import { sysTimeFormat } from './config/dateFormats'
import Loading from './Loading'

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 10px 0;
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
    margin-top: 6px;
    padding-left: 5px;
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
      showTimestamp,
    } = this.props

    const parsedTimestamp = parse(
      timestamp,
      sysTimeFormat,
      new Date(currentTime)
    )
    const isToday = isSameDay(new Date(), parsedTimestamp)
    const isYesterday = isSameDay(parsedTimestamp, subDays(new Date(), 1))

    let formattedTimestamp = null

    if (isToday) {
      formattedTimestamp = `Today ${format(parsedTimestamp, 'h:mm aa')}`
    } else if (isYesterday) {
      formattedTimestamp = `Yesterday ${format(parsedTimestamp, 'h:mm aa')}`
    } else {
      formattedTimestamp = format(parsedTimestamp, 'MMMM dd, yyyy h:mm aa')
    }

    let filteredMessage
    if (message && message[0] !== '') {
      filteredMessage = message
    } else {
      filteredMessage = 'Sorry, could you say that again?'
    }

    const chatMessage =
      entity === 'user' ? (
        <UserMessage elevation={1} theme={theme}>
          <Typography variant='body1'>{filteredMessage}</Typography>
        </UserMessage>
      ) : (
        <ExternalMessage elevation={1}>
          {isLoading ? (
            <Loading />
          ) : (
            <Typography variant='body1'>{filteredMessage}</Typography>
          )}
        </ExternalMessage>
      )
    return (
      <Container entity={entity}>
        <ChatBubble entity={entity}>{chatMessage}</ChatBubble>
        {showTimestamp ? (
          <Timestamp variant='caption'>{formattedTimestamp}</Timestamp>
        ) : null}
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentTime: state.conversation.currentTime,
  }
}
export default withTheme()(connect(mapStateToProps)(Message))
