import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Paper from 'material-ui/Paper'
// Components
import Avatar from './Avatar'
import Loading from './Loading'
// Colors
import grey from 'material-ui/colors/grey'

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-top: 24px;
  min-height: 32px;
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
      content: '\00a0';
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
    position: relative;
    color: ${grey[900]};
    max-width: 85%;

    &:after {
      content: '';
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

class Message extends PureComponent {
  render() {
    const { message, entity, avatar, isLoading } = this.props
    const chatBubble =
      entity === 'user' ? (
        <UserMessage elevation={1}>{message}</UserMessage>
      ) : (
        <ExternalMessage elevation={1}>
          {isLoading ? <Loading /> : message}
        </ExternalMessage>
      )
    return (
      <Container entity={entity}>
        <Avatar entity={entity} avatar={avatar} />
        {chatBubble}
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    avatar: state.config.avatar
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Message)
