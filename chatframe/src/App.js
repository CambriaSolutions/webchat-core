import React, { Component } from 'react'
import styled from 'styled-components'
import ChatFrame from './ChatFrame'

// Colors
import grey from 'material-ui/colors/grey'

// Test Data
import avatarImage from './img/wahbexLogo.png'
const OuterAppFrame = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 48px;
  background: ${grey[100]};
`

class App extends Component {
  render() {
    return (
      <OuterAppFrame>
        <ChatFrame
          avatar={avatarImage}
          title="Test Chat Frame"
          client="Dialogflow"
          token={process.env.REACT_APP_DIALOGFLOW_TOKEN}
        />
      </OuterAppFrame>
    )
  }
}

export default App
