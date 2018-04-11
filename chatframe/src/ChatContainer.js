import React, { PureComponent } from 'react'
import Paper from 'material-ui/Paper'
import styled from 'styled-components'

// Components
import Header from './Header'
import ChatWindow from './ChatWindow'
import UserInput from './UserInput'
import ButtonBar from './ButtonBar'
import ErrorBar from './ErrorBar'

// Redux
import { connect } from 'react-redux'

const OuterFrame = styled(Paper)`
  && {
    transform: scale(${p => (p.active ? '1' : '0')});
    opacity: ${p => (p.active ? '1' : '0')};
    transform-origin: bottom right;
    transition: all 0.2s ease-in-out;
    pointer-events: auto;
    width: ${p => (p.fullscreen ? 'calc(100% - 96px)' : '65%')};
    height: ${p => (p.fullscreen ? 'calc(100% - 96px)' : '60%')};
    max-width: ${p => (p.fullscreen ? '' : '700px')};
    max-height: ${p => (p.fullscreen ? '' : '1000px')};
    background: none;
    display: flex;
    flex-flow: column nowrap;
    overflow: hidden;
    ${p =>
      !p.fullscreen
        ? `
      position: absolute;
      bottom: 48px;
      right: 48px;
    `
        : ''};
  }
`

class ChatContainer extends PureComponent {
  render() {
    const { fullscreen, windowVisible } = this.props
    return (
      <OuterFrame
        elevation={6}
        fullscreen={fullscreen ? 1 : 0}
        active={windowVisible ? 1 : 0}
      >
        <Header />
        <ChatWindow />
        <ButtonBar />
        <ErrorBar />
        <UserInput />
      </OuterFrame>
    )
  }
}

const mapStateToProps = state => {
  return {
    windowVisible: state.config.windowVisible,
    fullscreen: state.config.fullscreen
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer)
