import React, { PureComponent } from 'react'
import styled from 'styled-components'

// Colors
import grey from 'material-ui/colors/grey'

import testImage from './img/wahbexLogo.png'

const Container = styled.div`
  ${p => (p.entity === 'user' ? 'display: none;' : '')} height: 36px;
  width: 32px;
  height: 32px;
  min-width: 32px;
  border-radius: 50%;
  margin: ${p => (p.entity === 'user' ? '0 0 0 16px' : '0 16px 0 0')};
  order: ${p => (p.entity === 'user' ? 1 : 0)};
  background: ${p => (p.image ? `url(${p.image})` : grey['400'])};
  background-position: center;
  background-size: contain;
`

class Avatar extends PureComponent {
  render() {
    const { entity, image } = this.props
    return <Container entity={entity} image={testImage} />
  }
}

export default Avatar
