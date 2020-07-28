import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Fab from '@material-ui/core/Fab'
import Chat from '@material-ui/icons/Chat'
import Zoom from '@material-ui/core/Zoom'
import Badge from '@material-ui/core/Badge'
import { withTheme, withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'

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
  z-index: 10000;
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

  :before {
    content: ' ';
    position: absolute;
    width: 0;
    height: 0px;
    left: 286px;
    top: 11px;
    border: 15px solid;
    border-left: none;
    border-color: transparent transparent #666 transparent;
  }

  :after {
    content: ' ';
    position: absolute;
    width: 0;
    height: 0;
    left: 266px;
    top: 9px;
    border: 15px solid;
    border-color: transparent transparent #fff transparent;
  }
`

class ActivatorButton extends PureComponent {
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

    const contentToDisplay = activationText ? (
      <React.Fragment>
        <Badge
          classes={{ badge: classes.customBadge }}
          overlap="circle"
          variant="dot"
          badgeContent={0}
          invisible={conversationStarted}
        >
          <BotAvatar alt={title} src={avatar} />
          <TextContainer theme={theme}>{activationText}</TextContainer>
          <ChatBubble>
            I have some new features waiting for you. Check it out and let&apos;s chat!
          </ChatBubble>
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
