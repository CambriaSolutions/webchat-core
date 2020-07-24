import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import {
  saveFeedbackInput,
  sendFeedback,
  setFeedbackSubmitted,
} from './actions/feedbackInput'

class FeedbackInput extends PureComponent {
  render() {
    const {
      feedbackInputs,
      feedbackUrl,
      saveFeedbackInput,
      setFeedbackSubmitted,
      sendFeedback,
      session,
      outputContexts
    } = this.props

    const handleInputChange = name => event => {
      const inputItem = {
        value: name,
        checked: event.target.checked,
      }
      saveFeedbackInput(inputItem)
    }

    // We need to filter values that are not checked, and return
    // a list of checked values in the final submission
    const processList = list => {
      return list
        .filter(item => {
          return item.checked ? item.value : null
        })
        .map(item => {
          return item.value
        })
    }

    const sendAnalytics = data => {
      fetch(feedbackUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }

    // On form submit, build the payload data structure,
    // send the payload to analyics, send message to diaglogflow,
    // and set submitted flag to true in redux state.
    const handleSubmit = () => {
      const payload = {
        wasHelpful: feedbackInputs.wasHelpful,
        session,
        feedbackList: processList(feedbackInputs.feedbackList),
        outputContexts
      }
      sendAnalytics(payload)
      sendFeedback('Feedback complete')
      setFeedbackSubmitted(true)
    }
    return (
      <React.Fragment>
        <CardContent>
          <Typography gutterBottom variant='h6'>
            {feedbackInputs.wasHelpful
              ? 'Why was Gen helpful?'
              : 'Why was Gen not helpful?'}
          </Typography>
          <FormControl component='fieldset'>
            <FormGroup>
              {feedbackInputs.feedbackList
                ? feedbackInputs.feedbackList.map(choice => {
                  return (
                    <FormControlLabel
                      key={choice.value}
                      control={
                        <Checkbox
                          checked={choice.checked}
                          onChange={handleInputChange(choice.value)}
                          value={choice.value}
                        />
                      }
                      label={choice.value}
                    />
                  )
                })
                : null}
            </FormGroup>
          </FormControl>
        </CardContent>
        <CardActions>
          <Button size='small' color='primary' onClick={handleSubmit}>
            Submit
          </Button>
        </CardActions>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    feedbackInputs: state.feedbackInput,
    feedbackUrl: state.config.feedbackUrl,
    outputContexts: state.outputContexts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveFeedbackInput: value => {
      dispatch(saveFeedbackInput(value))
    },
    setFeedbackSubmitted: () => {
      dispatch(setFeedbackSubmitted(true))
    },
    sendFeedback: value => {
      dispatch(sendFeedback(value))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedbackInput)
