import React, { PureComponent } from 'react'
import Paper from '@material-ui/core/Paper'
import styled, { css } from 'styled-components'
import { connect } from 'react-redux'
import Zoom from '@material-ui/core/Zoom'
import grey from '@material-ui/core/colors/grey'
import Header from './Header'
import PrivacyPolicy from './PrivacyPolicy'
import ChatWindow from './ChatWindow'
import UserInput from './UserInput'
import ButtonBar from './ButtonBar'
import ErrorBar from './ErrorBar'
import { media } from './styles/media'

const Container = styled(Paper)`
  && {
    width: 400px;
    height: 600px;
    overflow: hidden;
    position: absolute;
    bottom: 48px;
    right: 48px;
    transition: width 120ms ease-in-out, height 150ms ease-in-out;
    pointer-events: none;
    ${props =>
      props.fullscreen &&
      css`
        width: calc(100% - 96px);
        height: calc(100% - 96px);
      `};
    ${props =>
      !props.visible &&
      css`
        width: 0;
        height: 0;
      `};

    ${media.phone`
    width: ${props => (props.visible ? 'calc(100% - 96px)' : '0')};
    height: ${props => (props.visible ? 'calc(100% - 96px)' : '0')};
    max-width: none;
    max-height: none;
  `};
  }
`

const OuterFrame = styled.div`
  && {
    width: 100%;
    height: 100%;
    transform-origin: bottom right;
    pointer-events: auto;
    background: ${grey[100]};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 64px 1fr auto 0px 48px;
    grid-template-areas:
      'header'
      'chatwindow'
      'buttonbar'
      'errorbar'
      'userinput';
  }
`

class ChatContainer extends PureComponent {
  constructor(props) {
    super(props)
    this.containerRef = React.createRef()
  }
  render() {
    const { windowVisible, fullscreen } = this.props
    return (
      <Container
        elevation={4}
        fullscreen={fullscreen ? 1 : 0}
        visible={windowVisible ? 1 : 0}
      >
        <Zoom in={windowVisible}>
          <OuterFrame ref={this.containerRef}>
            <Header />
            <PrivacyPolicy
              parentRef={this.containerRef.current}
              policyText={this.props.policyText}
            />
            <ChatWindow />
            <ButtonBar />
            <ErrorBar />
            <UserInput />
          </OuterFrame>
        </Zoom>
      </Container>
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
