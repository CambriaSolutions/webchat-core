import React, { PureComponent } from 'react'
import Icon from 'material-ui/Icon'
import styled from 'styled-components'

// Colors
import grey from 'material-ui/colors/grey'

const OuterFrame = styled.div`
  background: #fff;
  flex: 1 0 48px;
  max-height: 48px;
  width: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  box-shadow: 0px -1px 3px 0px rgba(0, 0, 0, 0.23);
`
const SendButton = styled.div`
  flex: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  color: ${grey[500]};
  padding: 0 16px;
  cursor: pointer;
  &:hover {
    color: ${grey[800]};
  }
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
      <OuterFrame>
        <TextInput type="text" placeholder="Send a message" />
        <SendButton>
          <Icon>send</Icon>
        </SendButton>
      </OuterFrame>
    )
  }
}

export default UserInput
