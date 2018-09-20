import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { fade } from '@material-ui/core/styles/colorManipulator'
import find from 'lodash/find'
import { sendQuickReply } from './actions/conversation'

const Container = styled.div`
  width: 100%;
  flex: 1 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  padding: ${p => (p.visible ? '8px 8px' : '0 8px')};
  background: ${p => p.theme.palette.grey[100]};
`

const Btn = styled(Button)`
  && {
    border-color: ${p => p.theme.palette.secondary.main};
    color: ${p => p.theme.palette.secondary.main};
    margin: 8px;
    display: ${p => (p.visible === 'true' ? 'block' : 'none')};
    &:hover {
      /* background: ${p => p.theme.palette.secondary.dark}; */
      background-color: ${p =>
        fade(
          p.theme.palette.secondary.main,
          p.theme.palette.action.hoverOpacity
        )};

    border-color: ${p => p.theme.palette.secondary.main};
    }
  }
`

class ButtonBar extends PureComponent {
  render() {
    const { visible, messages, sendQuickReply, theme } = this.props
    const lastMessageWithSuggestions = find(messages, m => {
      const hasSuggestions = find(m.responses, ['type', 'suggestion'])
        ? true
        : false
      return hasSuggestions
    })

    let suggestionElements = []
    if (lastMessageWithSuggestions) {
      const messages = lastMessageWithSuggestions.responses.filter(m => {
        return m.type === 'suggestion'
      })
      for (let message of messages) {
        for (let suggestion of message.suggestions) {
          suggestionElements.push({
            label: suggestion,
            id: lastMessageWithSuggestions.messageId,
            visible: visible,
          })
        }
      }
    }

    return (
      <Container visible={visible} theme={theme}>
        {suggestionElements.map((btn, index) => (
          <Btn
            size="small"
            theme={theme}
            variant="outlined"
            color="secondary"
            key={`${btn.id}-btn${index}`}
            visible={btn.visible.toString()}
            onClick={() => sendQuickReply(btn.label)}
          >
            {btn.label}
          </Btn>
        ))}
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    visible: state.buttonBar.visible,
    messages: state.conversation.messages,
    theme: state.config.theme,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendQuickReply: text => {
      dispatch(sendQuickReply(text))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonBar)
