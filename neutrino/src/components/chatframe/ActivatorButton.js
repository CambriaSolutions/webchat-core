import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Fab from '@material-ui/core/Fab'
import Chat from '@material-ui/icons/Chat'
import Zoom from '@material-ui/core/Zoom'

// Redux
import { connect } from 'react-redux'
import { showWindow } from './actions/initialization'

const Btn = styled(Fab)`
  && {
    display: ${p => (p.active ? 'block' : 'none')};
    pointer-events: auto;
    padding-top: 8px;
  }
`

class ActivatorButton extends PureComponent {
  render() {
    const { windowVisible, showWindow } = this.props
    return (
      <Zoom in={!windowVisible} unmountOnExit>
        <Btn
          color="primary"
          onClick={showWindow}
          active={windowVisible ? 0 : 1}
        >
          <Chat />
        </Btn>
      </Zoom>
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
  mapDispatchToProps
)(ActivatorButton)
