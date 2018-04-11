import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import Icon from 'material-ui/Icon'
import styled from 'styled-components'

const Container = styled(Paper)`
  && {
    background: ${p => p.theme.palette.primary.dark};
    padding: 16px;
    color: ${p =>
      p.theme.palette.getContrastText(p.theme.palette.primary.dark)};
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

const PrimaryHeaderText = styled.div`
  font-size: 16px;
  line-height: 16px;
  padding-left: 16px;
`

const SecondaryHeaderText = styled.div`
  padding-top: 2px;
  font-size: 10px;
  line-height: 10px;
  padding-left: 16px;
`

const CloseButton = styled.div`
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
    const { title, timestamp, theme } = this.props
    return (
      <Container elevation={3} theme={theme}>
        <HeaderImage>
          <Icon>chat</Icon>
        </HeaderImage>
        <HeaderText>
          <PrimaryHeaderText>{title}</PrimaryHeaderText>
          <SecondaryHeaderText>Active {timestamp}</SecondaryHeaderText>
        </HeaderText>
        <CloseButton theme={theme}>
          <Icon>close</Icon>
        </CloseButton>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    title: state.config.title,
    timestamp: state.conversation.headerTime,
    theme: state.config.theme
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
