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

    &:after {
      box-shadow: ${p =>
        p.entity === 'bot'
          ? '-0.5px 0.5px 1px 0px rgba(0, 0, 0, 0.23)'
          : '0.5px -0.5px 1px 0px rgba(0, 0, 0, 0.23)'};
      content: '\00a0';
      height: 10px;
      width: 10px;

      position: absolute;

      transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      -webkit-transform: rotate(45deg);

      ${p =>
        p.entity === 'bot'
          ? `top: 16px; left: -5px; background-color: #fff;`
          : `top: 16px; right: -5px; background-color: ${grey[400]};`};
    }
  }
`

class Message extends PureComponent {
  render() {
    const { message, entity, avatar, isLoading } = this.props
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
