import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import styled from 'styled-components'
import { saveFeedbackInput, submitFeedbackInput } from './actions/feedbackInput'

const CardContainer = styled(Card)`
  && {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #fff;
    margin: 15px 16px 15px 16px;
    white-space: pre-line;
  }
`

class FeedbackResponse extends PureComponent {
  render() {
    const {
      data,
      feedbackInputs,
      saveFeedbackInput,
      submitFeedback,
    } = this.props

    const handleChange = name => event => {
      const inputItem = {
        wasHelpful: data.feedback.helpful,
        value: name,
        checked: event.target.checked,
      }
      saveFeedbackInput(inputItem)
    }

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
      fetch(process.env.REACT_APP_ANALYTICS_URI, {
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(response => {
        console.log(response)
      })
    }

    const handleSubmit = () => {
      const payload = { wasHelpful: feedbackInputs.wasHelpful }
      if (feedbackInputs.wasHelpful) {
        payload.feedbackList = processList(feedbackInputs.helpfulList)
      } else {
        payload.feedbackList = processList(feedbackInputs.notHelpfulList)
      }
      //TODO
      //sendAnalytics(payload)
      submitFeedback()
    }
    return (
      <CardContainer>
        <CardContent>
          <Typography gutterBottom variant='h6'>
            Feedback
          </Typography>
          <FormControl component='fieldset'>
            <FormGroup>
              {data.feedback.helpful
                ? feedbackInputs.helpfulList.map(choice => {
                    return (
                      <FormControlLabel
                        key={choice.value}
                        control={
                          <Checkbox
                            checked={choice.checked}
                            onChange={handleChange(choice.value)}
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
                            onChange={handleChange(choice.value)}
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
      </CardContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    feedbackInputs: state.feedbackInput,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveFeedbackInput: value => {
      dispatch(saveFeedbackInput(value))
    },
    submitFeedback: () => {
      dispatch(submitFeedbackInput('Feedback complete'))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedbackResponse)
