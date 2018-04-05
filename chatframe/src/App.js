import React, { Component } from 'react'
import styled from 'styled-components'
import ChatFrame from './ChatFrame'

import { ApiAiClient } from 'api-ai-javascript'
// Colors
import grey from 'material-ui/colors/grey'

const OuterAppFrame = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 48px;
  background: ${grey[100]};
`

const client = new ApiAiClient({
  accessToken: '0a89a9f2b5854610b643507795ecda86 '
})

  .textRequest('Hello!')
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.log(error)
  })

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
