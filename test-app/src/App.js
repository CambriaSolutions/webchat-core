import React, { Component } from 'react'
import ChatWindow from '@cambriasolutions/chatframe'
const options = {
  eventUrl:
    'https://us-central1-dhcs-demo-chat.cloudfunctions.net/eventRequest',
  textUrl: 'https://us-central1-dhcs-demo-chat.cloudfunctions.net/textRequest',
}
class App extends Component {
  render() {
    return (
      <div className="App">
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

export default App
