import React, { PureComponent } from 'react'
import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'

import Zoom from '@material-ui/core/Zoom'
// Components
import Header from './Header'
import ChatWindow from './ChatWindow'
import UserInput from './UserInput'
import ButtonBar from './ButtonBar'
import ErrorBar from './ErrorBar'

// Redux
import { connect } from 'react-redux'

import { media } from './styles/media'

const OuterFrame = styled(Paper)`
  && {
    transform-origin: bottom right;
    pointer-events: auto;
    width: ${p => (p.fullscreen ? 'calc(100% - 96px)' : '65%')};
    height: ${p => (p.fullscreen ? 'calc(100% - 96px)' : '60%')};
    max-width: ${p => (p.fullscreen ? '' : '700px')};
    max-height: ${p => (p.fullscreen ? '' : '1000px')};
    background: none;
    display: flex;
    flex-flow: column nowrap;
    overflow: hidden;
    position: absolute;
    bottom: 48px;
    right: 48px;

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
        <OuterFrame elevation={6} fullscreen={fullscreen ? 1 : 0}>
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

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatContainer)
