import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Fab from '@material-ui/core/Fab'
import Chat from '@material-ui/icons/Chat'
import Zoom from '@material-ui/core/Zoom'
import { withTheme } from '@material-ui/core/styles'

// Redux
import { connect } from 'react-redux'
import { showWindow } from './actions/initialization'

const Btn = styled(Fab)`
  && {
    display: ${p => (p.active ? 'flex' : 'none')};
    pointer-events: auto;
    width: auto;
    height: auto;
    padding: 8px 15px auto;
    border-radius: 20px;
    flex-direction: row;
  }
`

const TextContainer = styled.div`
  text-transform: none;
  padding-right: 10px;
  color: ${p => p.theme.palette.getContrastText(p.theme.palette.primary.dark)};
`
const ChatIcon = styled(Chat)`
  padding-left: 10px;
  padding-right: 5px;
  color: ${p => p.theme.palette.getContrastText(p.theme.palette.primary.dark)};
`
class ActivatorButton extends PureComponent {
  render() {
    const { windowVisible, showWindow, theme } = this.props
    console.log(theme)
    return (
      <Zoom in={!windowVisible} unmountOnExit>
        <Btn
          id="this"
          color="primary"
          onClick={showWindow}
          active={windowVisible ? 0 : 1}
        >
          <ChatIcon theme={theme} />
          <TextContainer theme={theme}>Talk to Gen</TextContainer>
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

export default withTheme()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ActivatorButton)
)
