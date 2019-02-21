import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Star from '@material-ui/icons/Star'
import { setCountStars } from './actions/conversation'

const StarsHolder = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px auto;
`

const StarInput = styled(Star)`
  && {
    font-size: 30px;
    color: ${p => (p.selected ? '#ffeb3b' : '#e0e0e0')};
  }
`

class StarRater extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      tempCountStars: 0,
    }
  }
  handleStarClick = starValue => {
    // this.setState({
    //   countStars: starValue,
    // })
    console.log(starValue)
    // this.props.setCountStars(starValue)
  }

  handleMouseEnter = starValue => {
    this.setState({ tempCountStars: starValue })
  }

  handleMouseLeave = () => {
    this.setState({ tempCountStars: 0 })
  }

  render() {
    const { tempCountStars } = this.state
    const { numStars, setCountStars } = this.props
    return (
      <StarsHolder onMouseLeave={this.handleMouseLeave}>
        <StarInput
          onClick={() => {
            setCountStars(1)
          }}
          onMouseEnter={() => {
            this.handleMouseEnter(1)
          }}
          selected={tempCountStars > 0 || numStars > 0}
        />
        <StarInput
          onClick={() => {
            setCountStars(2)
          }}
          onMouseEnter={() => {
            this.handleMouseEnter(2)
          }}
          selected={tempCountStars > 1 || numStars > 1}
        />
        <StarInput
          onClick={() => {
            setCountStars(3)
          }}
          onMouseEnter={() => {
            this.handleMouseEnter(3)
          }}
          selected={tempCountStars > 2 || numStars > 2}
        />
        <StarInput
          onClick={() => {
            setCountStars(4)
          }}
          onMouseEnter={() => {
            this.handleMouseEnter(4)
          }}
          selected={tempCountStars > 3 || numStars > 3}
        />
        <StarInput
          onClick={() => {
            setCountStars(5)
          }}
          onMouseEnter={() => {
            this.handleMouseEnter(5)
          }}
          selected={tempCountStars > 4 || numStars > 4}
        />
      </StarsHolder>
    )
  }
}

const mapStateToProps = state => {
  return {
    numStars: state.conversation.numStars,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCountStars: numStars => {
      dispatch(setCountStars(numStars))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StarRater)
