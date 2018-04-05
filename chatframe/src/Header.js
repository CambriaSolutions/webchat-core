import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import Icon from 'material-ui/Icon'
import styled from 'styled-components'

// Colors
import grey from 'material-ui/colors/grey'

const Container = styled(Paper)`
  && {
    background: ${grey[800]};
    padding: 16px;
    color: ${grey[100]};
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
  color: ${grey[400]};
  padding: 2px;
  &:hover {
    background: ${grey[600]};
    color: ${grey[100]};
  }
`

class Header extends PureComponent {
  render() {
    const { title } = this.props
    return (
      <Container elevation={3}>
        <HeaderImage>
          <Icon>chat</Icon>
        </HeaderImage>
        <HeaderText>
          <PrimaryHeaderText>{title}</PrimaryHeaderText>
          <SecondaryHeaderText>Active 21m ago</SecondaryHeaderText>
        </HeaderText>
        <CloseButton>
          <Icon>close</Icon>
        </CloseButton>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    title: state.config.title
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
