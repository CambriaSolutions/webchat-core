import React, { Component } from 'react'
import { render } from 'react-dom'
import ChatWindow from '../../src'
const options = {
  eventUrl:
    'https://dveqi9j0d2.execute-api.us-east-1.amazonaws.com/development/eventRequest',
  textUrl:
    'https://dveqi9j0d2.execute-api.us-east-1.amazonaws.com/development/textRequest',
  apiKey: 'XwsfZ0JoM214avhOcgqDZ3S50stTX94l8pnZJNxN',
}
class Demo extends Component {
  render() {
    return (
      <div>
        <h1>ms-component Demo</h1>
        <div>THis is a test</div>
        <ChatWindow
          title="Test Chat"
          client="Dialogflow"
          clientOptions={options}
          fullscreen={false}
          initialActive={true}
        />
      </div>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
