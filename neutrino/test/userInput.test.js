import configureMockStore from 'redux-mock-store'
import find from 'lodash/find'
import thunk from 'redux-thunk'
import * as actions from '../src/components/chatframe/actions/userInput'
import * as t from '../src/components/chatframe/actions/actionTypes'
import { Client } from '../src/components/chatframe/conversationClient'
import { options } from './options'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore({
  userInput: 'testing',
  conversation: {
    client: new Client(options),
    clientOptions: options,
    clientName: options.clientName,
    messages: [],
  },
})

describe('userInput actions', () => {
  afterEach(() => {
    store.clearActions()
  })
  test('should save user input', () => {
    const expectedAction = {
      type: t.SAVE_USER_INPUT,
      value: 'another test',
    }
    store.dispatch(actions.saveUserInput('another test'))
    const storedActions = store.getActions()
    expect(storedActions).toContainEqual(expectedAction)
  })

  test('creates a user response from input and save user input', () => {
    store.dispatch(actions.saveUserInput('testing'))
    store.dispatch(actions.submitUserInput())
    const storedActions = store.getActions()
    const saveResponseAction = {
      response: {
        entity: 'user',
        messageId: 'usermessage-0',
        systemTime: expect.anything(),
        text: 'testing',
      },
      type: t.SAVE_USER_RESPONSE,
    }
    const hideButtonbarAction = { type: t.HIDE_BUTTON_BAR }
    const initiateLoadingAction = { type: t.INITIATE_LOADING }
    const saveUserInputAction = { type: t.SAVE_USER_INPUT, value: 'testing' }

    expect(storedActions).toContainEqual(saveResponseAction)
    expect(storedActions).toContainEqual(hideButtonbarAction)
    expect(storedActions).toContainEqual(initiateLoadingAction)
    expect(storedActions).toContainEqual(saveUserInputAction)
  })

  test('returns nothing from a user response with invalid input', () => {
    const expectedActions = []
    const store = mockStore({
      userInput: '',
      conversation: {
        client: new Client(options),
        clientOptions: options,
        clientName: 'dialogflow',
        messages: [],
      },
    })

    store.dispatch(actions.submitUserInput())
    const storedActions = store.getActions()
    expect(storedActions).toEqual(expectedActions)
  })
})
