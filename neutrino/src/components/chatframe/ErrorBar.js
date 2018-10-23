import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: ${p => (p.visible ? '24px 16px' : '0 16px')};
  background: ${p => p.theme.palette.error.light};
  border-top: ${p =>
    p.visible ? `1px solid ${p.theme.palette.error.main}` : 'none'};
  color: ${p => p.theme.palette.error.dark};
`

class ErrorBar extends PureComponent {
  render() {
    const { error, theme } = this.props
    return (
      <Container visible={error !== ''} theme={theme}>
        {error}
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    theme: state.config.theme
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBar)
