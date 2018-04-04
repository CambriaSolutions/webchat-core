import React, { Component } from 'react'
import styled from 'styled-components'
import ChatFrame from './ChatFrame'

// Colors
import grey from 'material-ui/colors/grey'

const OuterAppFrame = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 48px;
  background: ${grey[100]};
`

// import { ApiAiClient } from 'api-ai-javascript'
// const client = new ApiAiClient({accessToken: 'YOUR_ACCESS_TOKEN'})

class App extends Component {
  render() {
    return (
      <OuterAppFrame>
        <ChatFrame />
      </OuterAppFrame>
    )
  }
}

export default App
