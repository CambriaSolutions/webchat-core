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
    const { windowVisible, showWindow, activationText, theme } = this.props
    console.log(activationText)

    const contentToDisplay = activationText ? (
      <React.Fragment>
        <ChatIcon theme={theme} />
        <TextContainer theme={theme}>{activationText}</TextContainer>
      </React.Fragment>
    ) : (
      <Chat />
    )

    return (
      <Zoom in={!windowVisible} unmountOnExit>
        <Btn
          id="this"
          color="primary"
          onClick={showWindow}
          active={windowVisible ? 0 : 1}
          activationText={activationText ? 1 : 0}
        >
          {contentToDisplay}
        </Btn>
      </Zoom>
    )
  }
}

const mapStateToProps = state => {
  return {
    windowVisible: state.config.windowVisible,
    activationText: state.config.activationText,
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
