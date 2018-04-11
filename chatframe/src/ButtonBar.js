import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Button from 'material-ui/Button'
import find from 'lodash/find'
import { sendQuickReply } from './actions/conversation'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: ${p => (p.visible ? '24px 16px' : '0 16px')};
  background: ${p => p.theme.palette.grey[400]};
  border-top: 1px solid ${p => p.theme.palette.grey[500]};
`

const Btn = styled(Button)`
  && {
    background: ${p => p.theme.palette.secondary[500]};
    margin: 8px;
    display: ${p => (p.visible === 'true' ? 'block' : 'none')};
    color: ${p =>
      p.theme.palette.getContrastText(p.theme.palette.secondary[500])};
    &:hover {
      background: ${p => p.theme.palette.secondary[700]};
      color: ${p =>
        p.theme.palette.getContrastText(p.theme.palette.secondary[700])};
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
            visible: visible
          })
        }
      }
    }

    return (
      <Container visible={visible} theme={theme}>
        {suggestionElements.map((btn, index) => (
          <Btn
            theme={theme}
            variant="raised"
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
    theme: state.config.theme
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendQuickReply: text => {
      dispatch(sendQuickReply(text))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonBar)
