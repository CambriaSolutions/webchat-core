import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { fade } from '@material-ui/core/styles/colorManipulator'
import findLast from 'lodash/findLast'
import find from 'lodash/find'
import { sendQuickReply } from './actions/conversation'
import grey from '@material-ui/core/colors/grey'

const Container = styled.div`
  width: calc(100% - 20px);
  flex: 1 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  padding: ${p => (p.visible ? '4px 4px 16px 16px' : '0 16px')};
  background: ${p => grey[100]};
`

const Btn = styled(Button)`
  && {
    margin-right: 12px;
    margin-top: 12px;
    display: ${p => (p.visible === 'true' ? 'block' : 'none')};
  }
`

class ButtonBar extends PureComponent {
  render() {
    const { visible, messages, sendQuickReply } = this.props
    const lastMessageWithSuggestions = findLast(messages, m => {
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
      <Container visible={visible}>
        {suggestionElements.map((btn, index) => (
          <Btn
            size="small"
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
