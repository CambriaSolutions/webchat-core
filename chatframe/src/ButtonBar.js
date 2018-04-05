import React, { PureComponent } from 'react'
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
  padding: 24px 16px;
  background: ${grey[400]};
  border-top: 1px solid ${grey[500]};
`

const Btn = styled(Button)`
  && {
    margin: 8px;
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
    return (
      <Container buttons={testButtons}>
        {testButtons.map((btn, index) => (
          <Btn variant="raised" color="primary" key={`MSG_${index}`}>
            {btn.label}
          </Btn>
        ))}
      </Container>
    )
  }
}

export default ButtonBar
