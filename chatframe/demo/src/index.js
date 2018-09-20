import React, { Component } from 'react'
import { render } from 'react-dom'
import ChatWindow from '../../src'
const options = {
  eventUrl:
    'https://us-central1-dhcs-demo-chat.cloudfunctions.net/eventRequest',
  textUrl: 'https://us-central1-dhcs-demo-chat.cloudfunctions.net/textRequest',
  // apiKey: 'XwsfZ0JoM214avhOcgqDZ3S50stTX94l8pnZJNxN',
}
class Demo extends Component {
  render() {
    return (
      <div>
        <h1>ms-component Demo</h1>
        <div>THis is a test</div>
        <ChatWindow
          primaryColor="#3bafbf"
          secondaryColor="#000"
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
