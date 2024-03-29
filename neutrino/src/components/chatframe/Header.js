import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Fullscreen from '@material-ui/icons/Fullscreen'
import FullscreenExit from '@material-ui/icons/FullscreenExit'
import Info from '@material-ui/icons/Info'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Close from '@material-ui/icons/Close'
import grey from '@material-ui/core/colors/grey'
import styled from 'styled-components'
import Tooltip from '@material-ui/core/Tooltip'

import {
  hideWindow,
  showFullscreen,
  showWindowed,
  showPrivacyPolicy,
} from './actions/initialization'

const BotAvatar = styled(Avatar)`
  && {
    flex: 0 0 32px;
    width: 32px;
    height: 32px;
    margin-right: 16px;
    border-radius: 50% 50% 0px 50%;
  }
`

const Carat = styled.div`
  position: absolute;
  bottom: -1px;
  left: 27px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid ${grey[100]};
`

const Container = styled.div`
  && {
    position: relative;
    background: ${p => p.theme.palette.header.main};
    padding: 16px;
    height: 32px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    z-index: 1;
    grid-area: header;
    box-sizing: content-box; /*For WordPress*/
    line-height: normal; /*For WordPress*/
  }
`

const HeaderText = styled(Typography)`
  && {
    font-family: 'Product Sans';
    font-weight: 400;
    height: 32px;
    font-size: 18px;
    line-height: 32px;
    flex: 1;
    color: ${p =>
      p.theme.palette.getContrastText(p.theme.palette.primary.dark)};
  }
`

const HeaderButton = styled(IconButton)`
  && {
    padding: 6px;
    flex: 0;
    cursor: pointer;
    color: ${p =>
      p.theme.palette.getContrastText(p.theme.palette.primary.dark)};
    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }
`

class Header extends PureComponent {
  render() {
    const {
      title,
      theme,
      hideWindow,
      showWindowed,
      showFullscreen,
      fullscreen,
      avatar,
      showPrivacyPolicy,
    } = this.props
    return (
      <Container theme={theme}>
        <Carat />
        <BotAvatar alt={title} src={avatar} />
        <HeaderText theme={theme} variant='h6'>
          {title}
        </HeaderText>
        <Tooltip title='Privacy Policy' placement='bottom'>
          <HeaderButton
            theme={theme}
            onClick={showPrivacyPolicy}
            aria-label='Windowed'
          >
            <Info fontSize='small' />
          </HeaderButton>
        </Tooltip>
        {fullscreen ? (
          <HeaderButton
            theme={theme}
            onClick={showWindowed}
            aria-label='Windowed'
          >
            <FullscreenExit fontSize='small' />
          </HeaderButton>
        ) : (
          <HeaderButton
            theme={theme}
            onClick={showFullscreen}
            aria-label='Fullscreen'
          >
            <Fullscreen fontSize='small' />
          </HeaderButton>
        )}
        <HeaderButton theme={theme} onClick={hideWindow} aria-label='Close'>
          <Close fontSize='small' />
        </HeaderButton>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    title: state.config.title,
    fullscreen: state.config.fullscreen,
    avatar: state.config.avatar,
  }
}

const mapDispatchToProps = {
  hideWindow,
  showFullscreen,
  showWindowed,
  showPrivacyPolicy,
}

export default withTheme()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
)
