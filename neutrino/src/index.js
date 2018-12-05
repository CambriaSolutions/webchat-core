/* eslint-disable import/no-extraneous-dependencies */
import { render } from 'react-dom'
import ChatWindow from './components/chatframe'

const options = {
  eventUrl: 'https://us-central1-webchat-core.cloudfunctions.net/eventRequest',
  textUrl: 'https://us-central1-webchat-core.cloudfunctions.net/textRequest',
  // apiKey: 'XwsfZ0JoM214avhOcgqDZ3S50stTX94l8pnZJNxN',
}

const root = document.getElementById('cambria-chatframe')

render(
  <ChatWindow
    primaryColor="#3bafbf"
    secondaryColor="#000"
    title="Test Chat"
    client="Dialogflow"
    clientOptions={options}
    fullscreen={false}
    initialActive={false}
  />,
  root,
)
