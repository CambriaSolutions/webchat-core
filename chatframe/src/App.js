import React, { Component } from 'react'
import styled from 'styled-components'
import ChatFrame from './ChatFrame'

// Colors
import grey from 'material-ui/colors/grey'

// Test Data
import avatarImage from './img/CalAsianLogoSmall.png'
import bgImage from './img/CalAsianBackground.png'
const OuterAppFrame = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 48px;
  background: url(${bgImage});
  background-position: center center;
  background-size: cover;
  z-index: 0;
`

const OpacityFrame = styled.div`
  background: ${grey[600]};
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`

class App extends Component {
  render() {
    return (
      <OuterAppFrame>
        <OpacityFrame />
        <ChatFrame
          avatar={avatarImage}
          title="CalAsian Chamber Virtual Assistant"
          client="Dialogflow"
          token={process.env.REACT_APP_DIALOGFLOW_TOKEN}
        />
      </OuterAppFrame>
    )
  }
}

export default App
