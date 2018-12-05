/* eslint-disable import/no-extraneous-dependencies */
import { render } from 'react-dom'
import ChatWindow from './components/chatframe'

export const options = {
  eventUrl: 'https://us-central1-webchat-core.cloudfunctions.net/eventRequest',
  textUrl: 'https://us-central1-webchat-core.cloudfunctions.net/textRequest',
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
  root
)
