import React, { PureComponent } from 'react'
import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Zoom from '@material-ui/core/Zoom'
import grey from '@material-ui/core/colors/grey'
import Header from './Header'
import ChatWindow from './ChatWindow'
import UserInput from './UserInput'
import ButtonBar from './ButtonBar'
import ErrorBar from './ErrorBar'
import { media } from './styles/media'

const OuterFrame = styled(Paper)`
  && {
    transform-origin: bottom right;
    pointer-events: auto;
    width: ${p => (p.fullscreen ? 'calc(100% - 96px)' : '400px')};
    height: ${p => (p.fullscreen ? 'calc(100% - 96px)' : '600px')};
    background: ${grey[100]};
    position: absolute;
    bottom: 48px;
    right: 48px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 64px 1fr auto 0px 48px;
    grid-template-areas:
      'header'
      'chatwindow'
      'buttonbar'
      'errorbar'
      'userinput';

    ${media.phone`
      width: calc(100% - 48px);
      height: calc(100% - 48px);
      position: absolute;
      top: 24px;
      left: 24px;
      max-width: none;
      max-height: none;
    `};
  }
`

class ChatContainer extends PureComponent {
  render() {
    const { windowVisible, fullscreen } = this.props
    return (
      <Zoom in={windowVisible}>
        <OuterFrame elevation={4} fullscreen={fullscreen ? 1 : 0}>
          <Header />
          <ChatWindow />
          <ButtonBar />
          <ErrorBar />
          <UserInput />
        </OuterFrame>
      </Zoom>
    )
  }
}

const mapStateToProps = state => {
  return {
    windowVisible: state.config.windowVisible,
    fullscreen: state.config.fullscreen,
  }
}

// const mapDispatchToProps = dispatch => {
//   return {}
// }

export default connect(mapStateToProps)(ChatContainer)
