import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { parse, format, isSameDay, subDays } from 'date-fns'
import grey from '@material-ui/core/colors/grey'
import Typography from '@material-ui/core/Typography'
import Markdown from 'markdown-to-jsx'
import Link from '@material-ui/core/Link'
import { withTheme } from '@material-ui/core/styles'
import { sysTimeFormat } from './config/dateFormats'
import Loading from './Loading'

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 15px 16px 15px 16px;
  height: min-content;
  align-items: ${p => (p.entity === 'user' ? 'flex-end' : 'flex-start')};
  scroll-margin: 15px;
`

const ChatBubble = styled.div`
  width: 100%;
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
    max-width: 360px;
    overflow: hidden;
    background-color: ${p => p.theme.palette.primary.main};
    color: #ffffff;
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
      error,
      className
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

    let filteredBotMessage
    if (message && message[0] !== '') {
      filteredBotMessage = message
    } else {
      console.error('Message.js, class Message, render(), this.props: ', this.props)

      filteredBotMessage = [
        'Oops! Something happened with the connection. Please try again.',
      ]
    }

    let loadingOrErrorMsg = <Loading />
    if (isLoading) {
      // display error message from state if it exists
      if (error) {
        loadingOrErrorMsg = error
      }
    }

    const chatMessage =
      entity === 'user' ? (
        <UserMessage elevation={1} theme={theme}>
          {message}
        </UserMessage>
      ) :
        (
          <ExternalMessage elevation={1}>
            {isLoading ? (
              loadingOrErrorMsg
            ) :
              (
                <Markdown
                  options={{
                    forceBlock: true,
                    overrides: {
                      h6: {
                        component: Typography,
                        props: {
                          variant: 'h6',
                        },
                      },
                      p: {
                        component: Typography,
                        props: {
                          variant: 'body1',
                        },
                      },
                      a: {
                        component: Link,
                      },
                    },
                  }}
                >
                  {filteredBotMessage[0]}
                </Markdown>
              )}
          </ExternalMessage>
        )
    return (
      <Container entity={entity} className={className}>
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
    error: state.error,
  }
}
export default withTheme()(connect(mapStateToProps)(Message))
