import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Send from '@material-ui/icons/Send'
import styled from 'styled-components'
import Input from '@material-ui/core/Input'

// Redux
import { saveUserInput, submitUserInput } from './actions/userInput'

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
  color: ${p => p.theme.palette.primary.dark};
  padding: 0 16px;
  cursor: pointer;
  &:hover {
    color: ${p => p.theme.palette.primary.dark};
  }
`

const TextInput = styled(Input)`
  && {
    height: 100%;
    padding: 0 16px;
  }
`

class UserInput extends PureComponent {
  constructor() {
    super()
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress(e) {
    // Enter was pressed
    if (e.charCode === 13) {
      this.props.submitUserInput()
    }
  }

  render() {
    const { saveUserInput, inputValue, theme } = this.props
    return (
      <OuterFrame>
        <TextInput
          fullWidth
          disableUnderline
          placeholder="Send a message"
          onChange={saveUserInput}
          value={inputValue}
          onKeyPress={this.handleKeyPress}
        />
        <SendButton onClick={this.props.submitUserInput} theme={theme}>
          <Send />
        </SendButton>
      </OuterFrame>
    )
  }
}

const mapStateToProps = state => {
  return {
    inputValue: state.userInput,
    theme: state.config.theme,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveUserInput: e => {
      dispatch(saveUserInput(e.target.value))
    },
    submitUserInput: () => {
      dispatch(submitUserInput())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInput)
