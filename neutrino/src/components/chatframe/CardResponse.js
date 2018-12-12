import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
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

const CardImage = styled(CardMedia)`
  && {
    height: ${p => (p.image && p.image !== '' ? '200px' : '0px')};
    background-size: cover;
    background-position: center center;
  }
`

class CardResponse extends PureComponent {
  render() {
    const { title, subtitle, imageUrl, buttons } = this.props.data

    return (
      <CardContainer>
        <CardImage image={encodeURI(imageUrl)} title="" />
        <CardContent>
          <Typography gutterBottom variant="h6">
            {title}
          </Typography>
          <Typography variant="body1">{subtitle}</Typography>
        </CardContent>
        <CardActions>
          {buttons.map((b, index) => {
            const cardKey = `card-${index}${format(new Date(), sysTimeFormat)}`
            return (
              <Button
                href={b.postback}
                target="_blank"
                size="small"
                color="primary"
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

const mapStateToProps = state => {
  return {
    inputValue: state.userInput,
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     saveUserInput: e => {},
//     submitUserInput: () => {},
//   }
// }

export default connect(mapStateToProps)(CardResponse)
