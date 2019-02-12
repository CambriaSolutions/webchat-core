/* eslint-disable import/no-extraneous-dependencies */
import { render } from 'react-dom'
import ChatWindow from './components/chatframe'

export const options = {
  eventUrl: 'https://us-central1-mdhs-csa-dev.cloudfunctions.net/eventRequest',
  textUrl: 'https://us-central1-mdhs-csa-dev.cloudfunctions.net/textRequest',
}

export const privacyPolicy =
  'Please do not enter any personally identifiable information such as SSN, Date of Birth, Case Number or last name.'

export const googleMapsKey = process.env.GOOGLE_MAPS_KEY

export const centerCoordinates = {
  lat: 32.777025,
  lng: -89.543724,
}

const root = document.getElementById('cambria-chatframe')

render(
  <ChatWindow
    primaryColor='#3bafbf'
    secondaryColor='#000'
    title='Test Chat'
    client='Dialogflow'
    clientOptions={options}
    fullscreen={false}
    initialActive={false}
    policyText={privacyPolicy}
    googleMapsKey={googleMapsKey}
    centerCoordinates={centerCoordinates}
  />,
  root
)
