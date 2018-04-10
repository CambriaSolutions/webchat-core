import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Button from 'material-ui/Button'
import find from 'lodash/find'
import { sendQuickReply } from './actions/conversation'

// Colors
import red from 'material-ui/colors/red'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: ${p => (p.visible ? '24px 16px' : '0 16px')};
  background: ${red[100]};
  border-top: ${p => (p.visible ? '1px solid ${red[500]}' : 'none')};
  color: ${red[800]};
`

const Btn = styled(Button)`
  && {
    margin: 8px;
    display: ${p => (p.visible === 'true' ? 'block' : 'none')};
  }
`

class ErrorBar extends PureComponent {
  render() {
    const { error } = this.props

    return <Container visible={error !== ''}>{error}</Container>
  }
}

const mapStateToProps = state => {
  return {
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBar)
