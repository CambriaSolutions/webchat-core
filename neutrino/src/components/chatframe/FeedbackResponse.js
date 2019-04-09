import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Checkbox from '@material-ui/core/Checkbox'
import styled from 'styled-components'
import { submitFeedbackInput } from './actions/userInput'

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
    const { data, submitFeedback } = this.props
    const error = [gilad, jason, antoine].filter(v => v).length !== 2

    const handleSubmit = () => {
      console.log(123)
      submitFeedback()
    }
    return (
      <CardContainer>
        <CardContent>
          <Typography gutterBottom variant='h6'>
            Feedback
          </Typography>
          <FormControl component='fieldset' className={classes.formControl}>
            <FormLabel component='legend'>Assign responsibility</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={gilad}
                    onChange={this.handleChange('gilad')}
                    value='gilad'
                  />
                }
                label='Gilad Gray'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={jason}
                    onChange={this.handleChange('jason')}
                    value='jason'
                  />
                }
                label='Jason Killian'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={antoine}
                    onChange={this.handleChange('antoine')}
                    value='antoine'
                  />
                }
                label='Antoine Llorca'
              />
            </FormGroup>
            <FormHelperText>Be careful</FormHelperText>
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

const mapDispatchToProps = dispatch => {
  return {
    submitFeedback: () => {
      dispatch(submitFeedbackInput('Feedback complete'))
    },
  }
}

export default connect(
  null,
  mapDispatchToProps
)(FeedbackResponse)
