import React, { Component } from 'react'
import { render } from 'react-dom'
import ChatWindow from '../../src'

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>ms-component Demo</h1>
        <div>THis is a test</div>
        <ChatWindow
          token={'4d013eff3cb434d951dab4ef1e4777b098c0cb02'}
          title="Test Chat"
          client="Dialogflow"
          fullscreen={false}
          initialActive={true}
        />
      </div>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
