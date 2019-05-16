import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Send from '@material-ui/icons/Send'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'

// Redux
import { saveUserInput, submitUserInput } from './actions/userInput'

const OuterFrame = styled.div`
  grid-area: userinput;
  padding: 5px 0 5px 0;
  background: #fefefe;
  z-index: 1;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  z-index: 4;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`

const TextInput = styled(TextField)`
  && {
    margin: 0;
    padding-left: 16px;
    padding-right: 12px;

    padding-top: 10px;
    /*All properties below are specified to combat WordPress*/
    & > input[type='text'] {
      border: none;
      width: 100%;
      line-height: 16px;
      outline: none;
      color: #000;
      height: 100%;
      padding: 0;
      font-size: 16px;
    }
  }
`
const Icon = styled(IconButton)`
  && {
    padding: 15px;
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
    const { saveUserInput, inputValue } = this.props
    const inputValues = inputValue.value
    let charLimit = `${inputValue.charLength}/256`
    const { maxExceeded } = inputValue
    let test = null
    let helperTextValue = null

    if (maxExceeded) {
      test = '#cd5c5c'
      helperTextValue = `Exceeded character limit: ${charLimit}`
    } else if (inputValues.length === 0) {
      test = '#cd5c5c'
      helperTextValue = null
    } else {
      test = '#9e9e9e'
      helperTextValue = charLimit
    }

    return (
      <OuterFrame>
        <TextInput
          fullWidth
          marginNormal
          InputProps={{ disableUnderline: true }}
          placeholder='Send a message (maximum 256 characters)'
          helperText={helperTextValue}
          FormHelperTextProps={{
            style: { color: test, margin: 0 },
          }}
          onChange={saveUserInput}
          value={inputValues}
          onKeyPress={this.handleKeyPress}
        />

        <Icon
          onClick={this.props.submitUserInput}
          aria-label='Send'
          color='primary'
        >
          <Send />
        </Icon>
      </OuterFrame>
    )
  }
}

const mapStateToProps = state => {
  return {
    inputValue: state.userInput,
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
