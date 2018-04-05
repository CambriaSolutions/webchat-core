import React, { PureComponent } from 'react'
import styled from 'styled-components'
import Button from 'material-ui/Button'

// Colors
import grey from 'material-ui/colors/grey'

const Container = styled.div`
  background: red;
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  padding: 16px;
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
    const { entity, image } = this.props
    return (
      <Container buttons={testButtons}>
        {testButtons.map(b => <Button variant="raised">{b.label}</Button>)}
      </Container>
    )
  }
}

export default ButtonBar
