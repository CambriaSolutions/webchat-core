import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withTheme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Fullscreen from '@material-ui/icons/Fullscreen'
import FullscreenExit from '@material-ui/icons/FullscreenExit'
import Close from '@material-ui/icons/Close'
import styled from 'styled-components'
import {
  hideWindow,
  showFullscreen,
  showWindowed,
} from './actions/initialization'

const Container = styled(Paper)`
  && {
    background: ${p => p.theme.palette.primary.dark};
    padding: 16px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    position: relative;
    z-index: 1;
  }
`

const HeaderImage = styled.div`
  flex: 0;
`

const HeaderText = styled.div`
  flex: 1;
`

const PrimaryHeaderText = styled(Typography)`
  && {
    line-height: 20px;
    color: ${p =>
      p.theme.palette.getContrastText(p.theme.palette.primary.dark)};
  }
`

const SecondaryHeaderText = styled(Typography)`
  && {
    color: ${p =>
      p.theme.palette.getContrastText(p.theme.palette.primary.dark)};
  }
`

const HeaderButton = styled.div`
  flex: 0;
  cursor: pointer;
  height: 28px;
  color: ${p => p.theme.palette.getContrastText(p.theme.palette.primary.dark)};
  padding: 2px;
  &:hover {
    background: rgba(255, 255, 255, 0.24);
  }
`

class Header extends PureComponent {
  render() {
    const {
      title,
      timestamp,
      theme,
      hideWindow,
      showWindowed,
      showFullscreen,
      fullscreen,
    } = this.props
    return (
      <Container elevation={3} theme={theme}>
        <HeaderText>
          <PrimaryHeaderText theme={theme} variant="subtitle1">
            {title}
          </PrimaryHeaderText>
          <SecondaryHeaderText theme={theme} variant="caption">
            Active {timestamp}
          </SecondaryHeaderText>
        </HeaderText>

        {fullscreen ? (
          <HeaderButton theme={theme} onClick={showWindowed}>
            <FullscreenExit />
          </HeaderButton>
        ) : (
          <HeaderButton theme={theme} onClick={showFullscreen}>
            <Fullscreen />
          </HeaderButton>
        )}
        <HeaderButton theme={theme} onClick={hideWindow}>
          <Close />
        </HeaderButton>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    title: state.config.title,
    timestamp: state.conversation.headerTime,
    fullscreen: state.config.fullscreen,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hideWindow: () => {
      dispatch(hideWindow())
    },
    showFullscreen: () => {
      dispatch(showFullscreen())
    },
    showWindowed: () => {
      dispatch(showWindowed())
    },
  }
}

export default withTheme()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
)
