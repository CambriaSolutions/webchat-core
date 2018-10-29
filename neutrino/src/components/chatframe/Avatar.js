import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'

// Colors
import grey from '@material-ui/core/colors/grey'

const Container = styled(Paper)`
  && {
    ${p => (p.entity === 'user' ? 'display: none;' : '')} height: 36px;
    width: 42px;
    height: 42px;
    min-width: 42px;
    border-radius: 50%;
    margin: ${p => (p.entity === 'user' ? '0 0 0 16px' : '0 16px 0 0')};
    order: ${p => (p.entity === 'user' ? 1 : 0)};
    background-color: #fff;
    background-image: ${p => (p.avatar ? `url(${p.avatar})` : grey['400'])};
    background-position: center;
    background-size: 70%;
    background-repeat: no-repeat;
  }
`

class Avatar extends PureComponent {
  render() {
    const { entity, avatar } = this.props
    return <Container entity={entity} avatar={avatar} />
  }
}

export default Avatar
