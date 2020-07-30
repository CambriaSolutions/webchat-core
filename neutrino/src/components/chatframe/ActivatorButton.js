import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Fab from '@material-ui/core/Fab'
import Chat from '@material-ui/icons/Chat'
import Zoom from '@material-ui/core/Zoom'
import Badge from '@material-ui/core/Badge'
import { withTheme, withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

// Redux
import { connect } from 'react-redux'
import { showWindow } from './actions/initialization'

const StyledFab = styled(Fab)`
  && {
    display: ${p => (p.active ? 'flex' : 'none')};
    pointer-events: auto;
    width: ${p => (p.activationtext ? 'auto' : '56px')};
    height: ${p => (p.activationtext ? 'auto' : '56px')};
    padding: ${p => (p.activationtext ? '4px 6px' : 'auto')};
    border-radius: ${p => (p.activationtext ? '20px' : '50%')};
  }
`

const TextContainer = styled.div`
  text-transform: none;
  padding-right: 10px;
  color: ${p => p.theme.palette.getContrastText(p.theme.palette.primary.dark)};
`

const BotAvatar = styled(Avatar)`
  && {
    width: 32px;
    height: 32px;
    margin-right: 10px;
    border-radius: 50% 50% 0px 50%;
  }
`
const styles = () => ({
  customBadge: {
    backgroundColor: 'red',
    height: '11px',
    width: '11px',
    left: '-13px',
    border: 'solid white 1px'
  }
});

const ChatBubble = styled.div`
  z-index: 10;
  position: absolute;
  top: -43px;
  left: -315px;
  color: black;
  font-family: 'Product Sans';
  font-weight: 400;
  font-size: 15px;
  text-transform: none;
  max-width: 270px;
  border: 2px solid #666;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 8px;
  -webkit-box-shadow: 2px 2px 4px #888;
  -moz-box-shadow: 2px 2px 4px #888;
  box-shadow: 2px 2px 4px #888;
  text-align: left;
  padding: 8px;
`

const GrayTriangle = styled.div`
  position: absolute;
  z-index: 11;
  width: 0;
  height: 0px;
  left: -27px;
  top: -34px;
  border: 17px solid;
  border-left: none;
  border-color: transparent transparent #666 transparent;
`

const WhiteTriangle = styled.div`
  position: absolute;
  z-index: 12;
  width: 0px;
  height: 0px;
  left: -45px;
  top: -32px;
  border: 15px solid;
  border-color: transparent transparent #fff transparent;
`

const StyledCloseIcon = styled(HighlightOffIcon)`
  color: #666
  position: absolute;
  top: -11px;
  right: -13px;
  background-color: white;
  border-radius: 50px;
`

class ActivatorButton extends PureComponent {
  constructor() {
    super()
    this.state = {
      displayGenGreeting: true,
      displayWelcomeBubble: false
    }
  }

  componentDidMount() {
    const mediaMatch = window.matchMedia('(min-width: 768px)')
    const handler = e => this.setMatches(e.matches);
    mediaMatch.addListener(handler);

    this.setMatches(mediaMatch.matches)
  }

  setMatches = (matches) => {
    this.setState(() => ({ displayWelcomeBubble: matches }))
  }

  closeGenGreeting = (e) => {
    e.stopPropagation()
    this.setState(() => ({ displayGenGreeting: false }))
  }

  render() {
    const {
      title,
      windowVisible,
      showWindow,
      activationText,
      theme,
      avatar,
      classes,
      conversationStarted
    } = this.props

    const { displayGenGreeting, displayWelcomeBubble } = this.state

    const contentToDisplay = activationText ? (
      <React.Fragment>
        <Badge
          classes={{ badge: classes.customBadge }}
          overlap="circle"
          variant="dot"
          badgeContent={0}
          invisible={!displayGenGreeting || conversationStarted}
        >
          <BotAvatar alt={title} src={avatar} />
          <TextContainer theme={theme}>{activationText}</TextContainer>
          {displayGenGreeting && !conversationStarted && displayWelcomeBubble && (
            <React.Fragment>
              <GrayTriangle id="gray" />
              <WhiteTriangle id="white" />
              <ChatBubble>
                I have some new features waiting for you. Check it out and let&apos;s chat!
                <StyledCloseIcon onClick={this.closeGenGreeting} />
              </ChatBubble>
            </React.Fragment>
          )}
        </Badge>
      </React.Fragment >
    ) : (<Chat />)

    return (
      <Zoom in={!windowVisible} unmountOnExit>
        <StyledFab
          color='primary'
          onClick={showWindow}
          active={windowVisible ? 0 : 1}
          activationtext={activationText ? 1 : 0}
        >
          {contentToDisplay}
        </StyledFab>
      </Zoom>
    )
  }
}

const mapStateToProps = state => {
  return {
    title: state.config.title,
    windowVisible: state.config.windowVisible,
    activationText: state.config.activationText,
    avatar: state.config.avatar,
    conversationStarted: state.conversation.conversationStarted
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showWindow: () => {
      dispatch(showWindow())
    },
  }
}

export default withStyles(styles)(
  withTheme()(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(ActivatorButton)
  ))
