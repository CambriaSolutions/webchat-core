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

const Text = styled(Paper)`
  && {
    background: ${p => (p.entity === 'user' ? grey[400] : '#fff')};
    border-radius: 3px;
    font-size: 16px;
    line-height: 1.2rem;
    padding: 12px;
    position: relative;
    color: ${grey[900]};
    max-width: 85%;

    &::after {
      content: '';
      position: absolute;
      top: 10px;
      right: ${p => (p.entity === 'user' ? '-10px' : 'auto')};
      left: ${p => (p.entity === 'bot' ? '-10px' : 'auto')};
      width: 0;
      height: 0;
      border: 5px solid ${p => (p.entity === 'user' ? grey[400] : '#fff')};
      width: 0;
      height: 0;
      border-top-color: transparent;
      border-bottom-color: transparent;
      ${p =>
        p.entity === 'user'
          ? 'border-right-color: transparent;'
          : 'border-left-color: transparent;'};
    }
  }
`

class Message extends PureComponent {
  render() {
    const { message, entity, avatar } = this.props
    const isLoading = true

    return (
      <Container entity={entity}>
        <Avatar entity={entity} avatar={avatar} />
        <Text elevation={1} entity={entity}>
          {isLoading ? <Loading /> : message}
        </Text>
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
