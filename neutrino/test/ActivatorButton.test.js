import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import React from 'react'
import renderer from 'react-test-renderer'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../src/components/chatframe/reducers/rootReducer'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ChatFrame from '../src/components/chatframe/ChatFrame'
import ActivatorButton from '../src/components/chatframe/ActivatorButton'
import ChatContainer from '../src/components/chatframe/ChatContainer'
import { options } from './options'

configure({ adapter: new Adapter() })

it('renders correctly', () => {
  const wrapper = shallow(
    <ChatFrame
      primaryColor="#3bafbf"
      secondaryColor="#000"
      title="Test Chat"
      client="Dialogflow"
      clientOptions={options}
      fullscreen={false}
      initialActive={false}
    />
  )
  expect(wrapper.exists)
  expect(wrapper.find(ActivatorButton).length).toBe(1)
  expect(wrapper.find(ChatContainer).length).toBe(1)
})
