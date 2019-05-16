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
  background: #fefefe;
  z-index: 1;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  z-index: 4;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`

const TextInput = styled(TextField)`
  && {
    padding: 8px 4px 8px 16px;
    padding-bottom: ${p => p.helperText !== null && '16px'};
    /*All properties below are specified to combat WordPress*/
    & > textarea {
      border: none;
      width: 100%;
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
    padding: 16px 12px 16px 4px;
    &:hover {
      background: transparent;
    }
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
      e.preventDefault()
    }
  }

  render() {
    const { saveUserInput, inputValue } = this.props
    const inputValues = inputValue.value
    const charLimit = `${inputValue.charLength}/256`
    const { maxExceeded } = inputValue
    let helperTextValue = null

    if (maxExceeded) {
      helperTextValue = `Exceeded character limit: ${charLimit}`
    } else {
      helperTextValue = null
    }

    return (
      <OuterFrame>
        <TextInput
          multiline
          rowsMax='4'
          fullWidth
          marginNormal
          InputProps={{ disableUnderline: true }}
          placeholder='Send a message'
          helperText={helperTextValue}
          FormHelperTextProps={{
            style: { color: '#cd5c5c', margin: 0 },
          }}
          onChange={saveUserInput}
          value={inputValues}
          onKeyPress={this.handleKeyPress}
        />

        <Icon
          onClick={this.props.submitUserInput}
          aria-label='Send'
          color='primary'
          disabled={maxExceeded}
          disableRipple
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
