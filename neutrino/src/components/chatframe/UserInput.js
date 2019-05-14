import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Send from '@material-ui/icons/Send'
import styled from 'styled-components'
import Input from '@material-ui/core/Input'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'

// Redux
import { saveUserInput, submitUserInput } from './actions/userInput'
import { Typography } from '@material-ui/core'

const OuterFrame = styled.div`
  grid-area: userinput;
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

const TextInput = styled(Input)`
  && {
    /*All properties below are specified to combat WordPress*/
    & > input[type='text'] {
      border: none;
      width: 100%;
      line-height: 16px;
      outline: none;
      color: #000;
      height: 100%;
      padding: 0px 0px 0px 16px;
      font-size: 16px;
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
    }
  }

  render() {
    const { saveUserInput, inputValue } = this.props
    const inputValues = inputValue.value
    const charLimit = `(${inputValue.charLength}/256)`
    const maxExceeded = inputValue.maxExceeded

    return (
      <OuterFrame>
        <TextInput
          fullWidth
          disableUnderline
          placeholder='Send a message'
          onChange={saveUserInput}
          value={inputValues}
          onKeyPress={this.handleKeyPress}
          endAdornment={
            maxExceeded ? (
              <InputAdornment position='end' style={{ color: 'red' }}>
                {charLimit}
              </InputAdornment>
            ) : (
              <InputAdornment position='end'>{charLimit}</InputAdornment>
            )
          }
        />

        <IconButton
          onClick={this.props.submitUserInput}
          aria-label='Send'
          color='primary'
        >
          <Send />
        </IconButton>
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
