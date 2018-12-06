import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../src/components/chatframe/actions/dialogflow'
import * as t from '../src/components/chatframe/actions/actionTypes'
import { Client } from '../src/components/chatframe/conversationClient'
import fetchMock from 'fetch-mock'
import 'isomorphic-fetch'
import {
  textPayload,
  imagePayload,
  cardPayload,
  suggestionPayload,
  customPayload,
  multiplePayload,
} from './dialogflowPayloads'
import {
  textResponse,
  imageResponse,
  cardResponse,
  suggestionResponse,
  customResponse,
  multipleResponse,
} from './responses'
import { options } from './options'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const store = mockStore({
  conversation: {
    client: new Client(options),
    clientOptions: options,
    clientName: options.clientName,
    messages: [],
  },
})

describe('dialogflow actions', () => {
  afterEach(() => {
    store.clearActions()
  })

  it('should set up dialog flow with correct options', () => {
    const expectedAction = {
      client: {
        eventUrl: options.eventUrl,
        textUrl: options.textUrl,
      },
      clientName: options.clientName,
      type: t.SAVE_CLIENT,
    }

    store.dispatch(actions.setupDialogflow(options))
    const storedActions = store.getActions()
    expect(storedActions).toContainEqual(expectedAction)
  })

  it('should not set up dialogflow with incorrect options', () => {
    expect(() => {
      store.dispatch(actions.setupDialogflow({}))
    }).toThrow('Fulfillment URL is required to generate a conversation client')
  })

  it('should initiate loading', () => {
    const message = 'Hello'
    const expectedAction = { type: t.INITIATE_LOADING }
    store.dispatch(actions.sendMessageWithDialogflow(message))
    const storedActions = store.getActions()
    expect(storedActions).toContainEqual(expectedAction)
  })

  it('should throw an error on empty message', () => {
    const message = ''
    expect(() => {
      store.dispatch(actions.sendMessageWithDialogflow(message))
    }).toThrow('Query should not be empty')
  })

  it('should respond to welcome event with initial loading', () => {
    const event = 'Welcome'
    const expectedAction = { type: t.INITIATE_LOADING }
    store.dispatch(actions.sendEvent(event))
    const storedActions = store.getActions()
    expect(storedActions).toContainEqual(expectedAction)
  })

  it('should respond to null event with throwing an error', () => {
    const event = ''
    expect(() => {
      store.dispatch(actions.sendEvent(event))
    }).toThrow('Query should not be empty')
  })

  test('should hide the button bar when receiving a response', () => {
    const expectedAction = { type: 'HIDE_BUTTON_BAR' }
    store.dispatch(actions.getMessageFromDialogflow(textPayload))
    const storedActions = store.getActions()
    expect(storedActions).toContainEqual(expectedAction)
  })

  it('should correctly process a text payload', () => {
    const expectedAction = {
      type: t.SAVE_RESPONSE,
      newConversationArray: [
        {
          ...textResponse,
          systemTime: expect.anything(),
          messageId: expect.anything(),
        },
      ],
    }
    store.dispatch(actions.getMessageFromDialogflow(textPayload))
    const storedActions = store.getActions()
    expect(storedActions).toContainEqual(expectedAction)
  })

  it('should correctly process an image payload', () => {
    const expectedAction = {
      type: t.SAVE_RESPONSE,
      newConversationArray: [
        {
          ...imageResponse,
          systemTime: expect.anything(),
          messageId: expect.anything(),
        },
      ],
    }
    store.dispatch(actions.getMessageFromDialogflow(imagePayload))
    const storedActions = store.getActions()
    expect(storedActions).toContainEqual(expectedAction)
  })

  it('should correctly process a card payload', () => {
    const expectedAction = {
      type: t.SAVE_RESPONSE,
      newConversationArray: [
        {
          ...cardResponse,
          systemTime: expect.anything(),
          messageId: expect.anything(),
        },
      ],
    }
    store.dispatch(actions.getMessageFromDialogflow(cardPayload))
    const storedActions = store.getActions()
    expect(storedActions).toContainEqual(expectedAction)
  })

  it('should correctly process a suggestion payload', () => {
    const expectedAction = {
      type: t.SAVE_RESPONSE,
      newConversationArray: [
        {
          ...suggestionResponse,
          systemTime: expect.anything(),
          messageId: expect.anything(),
        },
      ],
    }
    store.dispatch(actions.getMessageFromDialogflow(suggestionPayload))
    const storedActions = store.getActions()
    expect(storedActions).toContainEqual(expectedAction)
  })

  it('should correctly process a custom payload', () => {
    const expectedAction = {
      type: t.SAVE_RESPONSE,
      newConversationArray: [
        {
          ...customResponse,
          systemTime: expect.anything(),
          messageId: expect.anything(),
        },
      ],
    }
    store.dispatch(actions.getMessageFromDialogflow(customPayload))
    const storedActions = store.getActions()
    expect(storedActions).toContainEqual(expectedAction)
  })

  it('should correctly process a multi payload', () => {
    const expectedAction = {
      type: t.SAVE_RESPONSE,
      newConversationArray: [
        {
          ...multipleResponse,
          systemTime: expect.anything(),
          messageId: expect.anything(),
        },
      ],
    }
    store.dispatch(actions.getMessageFromDialogflow(multiplePayload))
    const storedActions = store.getActions()
    expect(storedActions).toContainEqual(expectedAction)
  })
})
