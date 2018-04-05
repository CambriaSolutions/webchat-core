import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Button from 'material-ui/Button'

// Colors
import grey from 'material-ui/colors/grey'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: ${p => (p.visible ? '24px 16px' : '0 16px')};
  background: ${grey[400]};
  border-top: 1px solid ${grey[500]};
`

const Btn = styled(Button)`
  && {
    margin: 8px;
    display: ${p => (p.visible ? 'auto' : 'none')};
  }
`

const testButtons = [
  {
    label: 'Test One'
  },
  {
    label: 'Test Two'
  },
  {
    label: 'Test Three'
  }
]

class ButtonBar extends PureComponent {
  render() {
    const { visible, buttons } = this.props

    return (
      <Container visible={visible}>
        {buttons.map((btn, index) => (
          <Btn
            variant="raised"
            color="primary"
            key={`MSG_${index}`}
            visible={visible}
          >
            {btn.label}
          </Btn>
        ))}
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    visible: state.buttonBar.visible,
    buttons: state.buttonBar.buttons
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonBar)
