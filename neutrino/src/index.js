/* eslint-disable import/no-extraneous-dependencies */
import { render } from 'react-dom'
import ChatWindow from './components/chatframe'

export const options = {
  eventUrl:
    'https://58f7e869.ngrok.io/mdhs-csa-dev-beta/us-central1/eventRequest',
  textUrl:
    'https://58f7e869.ngrok.io/mdhs-csa-dev-beta/us-central1/textRequest',
}

export const feedbackUrl =
  'https://us-central1-webchat-analytics.cloudfunctions.net/storeFeedback'

export const privacyPolicy =
  'Please do not enter any personally identifiable information such as SSN or Date of Birth'

export const activationText = 'Talk to Gen'

export const mapConfig = {
  googleMapsKey: process.env.GOOGLE_MAPS_KEY,
  centerCoordinates: {
    lat: 32.777025,
    lng: -89.543724,
  },
}
const root = document.getElementById('cambria-chatframe')

render(
  <ChatWindow
    primaryColor='#3bafbf'
    secondaryColor='#000'
    headerColor='#3bafbf'
    title='Test Chat'
    client='Dialogflow'
    clientOptions={options}
    fullscreen={false}
    initialActive
    policyText={privacyPolicy}
    mapConfig={mapConfig}
    activationText={activationText}
    feedbackUrl={feedbackUrl}
  />,
  root
)
