import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Chat from '@material-ui/icons/Chat'

// Redux
import { connect } from 'react-redux'
import { showWindow } from './actions/initialization'

const Btn = styled(Button)`
  && {
    display: ${p => (p.active ? 'block' : 'none')};
    position: absolute;
    bottom: 48px;
    right: 48px;
    pointer-events: auto;
    padding-top: 8px;
  }
`

class ActivatorButton extends PureComponent {
  render() {
    const { windowVisible, showWindow } = this.props
    return (
      <Btn
        color="primary"
        variant="fab"
        onClick={showWindow}
        active={windowVisible ? 0 : 1}
      >
        <Chat />
      </Btn>
    )
  }
}

const mapStateToProps = state => {
  return {
    windowVisible: state.config.windowVisible,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showWindow: () => {
      dispatch(showWindow())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActivatorButton)
