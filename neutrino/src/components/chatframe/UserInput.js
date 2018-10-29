import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Send from '@material-ui/icons/Send'
import styled from 'styled-components'
import Input from '@material-ui/core/Input'
import IconButton from '@material-ui/core/IconButton'

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
  border-top: 1px solid rgba(0, 0, 0, 0.4);
  z-index: 4;
`

const TextInput = styled(Input)`
  && {
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
    const { saveUserInput, inputValue } = this.props
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
        <IconButton
          onClick={this.props.submitUserInput}
          aria-label="Send"
          color="primary"
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
  mapDispatchToProps,
)(UserInput)
