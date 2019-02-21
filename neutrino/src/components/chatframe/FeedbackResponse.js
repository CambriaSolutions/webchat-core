import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import { FormGroup } from '@material-ui/core'

import StarRater from './StarRater'

const CardContainer = styled(Card)`
  && {
    width: 75%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #fff;
    margin: 16px auto;
  }
`

class FeedbackResponse extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      feedback: [],
      q1: false,
      q2: false,
      q3: false,
      q4: false,
    }
  }

  handleSubmit = () => {
    // Send to webhook
    const { numStars } = this.props
    const { feedback } = this.state
    const payload = { rating: numStars, feedback }
    console.log(payload)
  }

  handleChange = question => event => {
    const currentComplaint = event.target.value
    const feedback = this.state.feedback
    if (!feedback.includes(currentComplaint)) {
      feedback.push(currentComplaint)
    } else {
      feedback.pop(currentComplaint)
    }
    console.log(feedback)
    this.setState({ [question]: event.target.checked })
    this.setState({ feedback: feedback })
  }

  render() {
    const { q1, q2, q3, q4 } = this.state
    const { numStars } = this.props

    return (
      <CardContainer>
        <CardContent>
          <Typography gutterBottom variant='h6'>
            How was your experience?
          </Typography>
          <StarRater />
          {numStars < 3 && numStars !== 0 && (
            <FormControl component='fieldset'>
              <FormGroup>
                <FormControlLabel
                  value='q1'
                  control={
                    <Checkbox
                      checked={q1}
                      onChange={this.handleChange('q1')}
                      value="It didn't answer my questions"
                    />
                  }
                  label="It didn't answer my questions"
                  labelPlacement='end'
                />
                <FormControlLabel
                  value='q2'
                  control={
                    <Checkbox
                      checked={q2}
                      onChange={this.handleChange('q2')}
                      value="I didn't find what I was looking for"
                    />
                  }
                  label="I didn't find what I was looking for"
                  labelPlacement='end'
                />
                <FormControlLabel
                  value='q3'
                  control={
                    <Checkbox
                      checked={q3}
                      onChange={this.handleChange('q3')}
                      value='It took too long'
                    />
                  }
                  label='It took too long'
                  labelPlacement='end'
                />
                <FormControlLabel
                  value='q4'
                  control={
                    <Checkbox
                      checked={q4}
                      onChange={this.handleChange('q4')}
                      value='TBD'
                    />
                  }
                  label='TBD'
                  labelPlacement='end'
                />
              </FormGroup>
            </FormControl>
          )}
        </CardContent>
        <CardActions>
          <Button onClick={this.handleSubmit}>Submit</Button>
        </CardActions>
      </CardContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    numStars: state.conversation.numStars,
  }
}

// const mapDispatchToProps = dispatch => {
//   return {}
// }

export default connect(mapStateToProps)(FeedbackResponse)
