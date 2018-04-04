import React, { PureComponent } from 'react'
import Paper from 'material-ui/Paper'
import Icon from 'material-ui/Icon'
import styled from 'styled-components'

// Colors
import grey from 'material-ui/colors/grey'

const OuterFrame = styled(Paper)`
  background: #fff;
  flex: 1 0 48px;
  max-height: 48px;
  width: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`
const SendButton = styled.div`
  flex: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  color: ${grey[900]};
  height: 100%;
  padding: 0 16px;
`

const TextInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 16px;
  line-height: 16px;
  outline: none;
  border: none;
  padding: 0 16px;
`

class UserInput extends PureComponent {
  render() {
    return (
      <OuterFrame elevation={4}>
        <TextInput type="text" placeholder="Send a message" />
        <SendButton>
          <Icon>send</Icon>
        </SendButton>
      </OuterFrame>
    )
  }
}

export default UserInput
