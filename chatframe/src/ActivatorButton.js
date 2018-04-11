import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Button from 'material-ui/Button'
import Icon from 'material-ui/Icon'
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
    background: ${p => p.theme.palette.primary.main};
    color: ${p =>
      p.theme.palette.getContrastText(p.theme.palette.primary.main)};
    &:hover {
      background: ${p => p.theme.palette.primary[700]};
      color: ${p =>
        p.theme.palette.getContrastText(p.theme.palette.primary[700])};
    }
  }
`

class ActivatorButton extends PureComponent {
  render() {
    const { windowVisible, showWindow, theme } = this.props
    return (
      <Btn
        variant="fab"
        onClick={showWindow}
        active={windowVisible ? 0 : 1}
        theme={theme}
      >
        <Icon>chat</Icon>
      </Btn>
    )
  }
}

const mapStateToProps = state => {
  return {
    windowVisible: state.config.windowVisible,
    theme: state.config.theme
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showWindow: () => {
      dispatch(showWindow())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivatorButton)
