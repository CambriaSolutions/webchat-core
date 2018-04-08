import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import styled from 'styled-components'
import moment from 'moment'

const CardContainer = styled(Card)`
  && {
    margin: 16px auto;
  }
`

const CardImage = styled(CardMedia)`
  && {
    height: 200px;
    background-size: cover;
    background-position: center center;
  }
`

class CardResponse extends PureComponent {
  render() {
    const { title, subtitle, imageUrl, buttons } = this.props.data
    return (
      <CardContainer>
        <CardImage image={imageUrl} title="Contemplative Reptile" />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {title}
          </Typography>
          <Typography component="p">{subtitle}</Typography>
        </CardContent>
        <CardActions>
          {buttons.map((b, index) => {
            return (
              <Button
                size="small"
                color="primary"
                key={'card-' + index + moment().format('MMDDYYYYhhmmssSSS')}
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
    inputValue: state.userInput
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveUserInput: e => {},
    submitUserInput: () => {}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardResponse)
