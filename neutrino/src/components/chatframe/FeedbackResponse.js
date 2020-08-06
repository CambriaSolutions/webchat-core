import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import styled from 'styled-components'
import FeedbackInput from './FeedbackInput'
import { setFeedbackOptions } from './actions/feedbackInput'

const CardContainer = styled(Card)`
  && {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #fff;
    margin: 15px 16px 15px 16px;
    white-space: pre-line;
    scroll-margin: 15px;
  }
`

class FeedbackResponse extends PureComponent {
  componentDidMount() {
    const { setFeedbackOptions, feedbackData } = this.props
    setFeedbackOptions(feedbackData)
  }

  render() {
    const { session, feedbackInputs, className } = this.props
    return (
      <CardContainer className={className}>
        {feedbackInputs.submitted ? (
          <CardContent>
            Thank you. Your feedback is important to us and will help improve
            Gen.
          </CardContent>
        ) :
          (
            <FeedbackInput session={session} />
          )}
      </CardContainer>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setFeedbackOptions: value => {
      dispatch(setFeedbackOptions(value))
    },
  }
}

const mapStateToProps = state => {
  return {
    feedbackInputs: state.feedbackInput,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedbackResponse)
