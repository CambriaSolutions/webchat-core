import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import FeedbackInput from './FeedbackInput'

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
    const { data, feedbackInputs } = this.props

    return (
      <CardContainer>
        {feedbackInputs.submitted ? (
          <CardContent>
            <Typography gutterBottom variant='h6'>
              Feedback
            </Typography>
            Thank you. Your feedback is important to us and will help improve
            Gen.
          </CardContent>
        ) : (
          <FeedbackInput data={data} />
        )}
      </CardContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    feedbackInputs: state.feedbackInput,
  }
}

export default connect(mapStateToProps)(FeedbackResponse)
