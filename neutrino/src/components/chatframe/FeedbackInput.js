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
      data,
      feedbackInputs,
      feedbackUrl,
      saveFeedbackInput,
      setFeedbackSubmitted,
      sendFeedback,
    } = this.props

    const handleInputChange = name => event => {
      const inputItem = {
        wasHelpful: data.payload.feedback.helpful,
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
      const payload = { wasHelpful: feedbackInputs.wasHelpful }
      payload.session = data.key
      if (feedbackInputs.wasHelpful) {
        payload.feedbackList = processList(feedbackInputs.helpfulList)
      } else {
        payload.feedbackList = processList(feedbackInputs.notHelpfulList)
      }
      sendAnalytics(payload)
      sendFeedback('Feedback complete')
      setFeedbackSubmitted(true)
    }
    return (
      <React.Fragment>
        <CardContent>
          <Typography gutterBottom variant='h6'>
            Feedback
          </Typography>
          <FormControl component='fieldset'>
            <FormGroup>
              {data.payload.feedback.helpful
                ? feedbackInputs.helpfulList.map(choice => {
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
                : feedbackInputs.notHelpfulList.map(choice => {
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
                  })}
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
