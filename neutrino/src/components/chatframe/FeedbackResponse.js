import React, { PureComponent } from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import styled from 'styled-components'
import { format } from 'date-fns'

// Date Format
import { sysTimeFormat } from './config/dateFormats'

const CardContainer = styled(Card)`
  && {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background: #fff;
    margin: 16px auto;
    white-space: pre-line;
  }
`

class FeedbackResponse extends PureComponent {
  render() {
    const buttons = [
      { postback: 'https://en.wikipedia.org/wiki/Temperature', text: 'test' }
    ]

    return (
      <CardContainer>
        <CardContent>
          <Typography gutterBottom variant='h6'>
            Feedback Survey
          </Typography>
          <Typography variant='body1'>This is the feedback survey.</Typography>
          <form noValidate autoComplete='off'>
            <TextField id='standard-name' label='Name' margin='normal' />
            <TextField
              id='standard-search'
              label='Search field'
              type='search'
              margin='normal'
            />
            <div>
              <Radio
                onChange={this.handleChange}
                value='a'
                name='radio-button-demo'
                aria-label='A'
              />
              <Radio
                onChange={this.handleChange}
                value='b'
                name='radio-button-demo'
                aria-label='B'
              />
              <Radio value='c' name='radio-button-demo' aria-label='C' />
              <Radio
                value='d'
                color='default'
                name='radio-button-demo'
                aria-label='D'
              />
            </div>
          </form>
        </CardContent>
        <CardActions>
          {buttons.map((b, index) => {
            const cardKey = `card-${index}${format(new Date(), sysTimeFormat)}`
            return (
              <Button
                href={b.postback}
                target='_blank'
                size='small'
                color='primary'
                key={cardKey}
              >
                {b.text}
              </Button>
            )
          })}
        </CardActions>
      </CardContainer>
    )
  }
}

export default FeedbackResponse
