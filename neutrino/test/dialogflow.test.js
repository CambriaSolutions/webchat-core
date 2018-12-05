import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import find from 'lodash/find'
import * as actions from '../src/components/chatframe/actions/dialogflow'
import * as t from '../src/components/chatframe/actions/actionTypes'
import { Client } from '../src/components/chatframe/conversationClient'
import fetchMock from 'fetch-mock'
import 'isomorphic-fetch'
import { textPayload } from './dialogflowPayloads'
import { textResponse, cardResponse } from './responses'
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
        { ...textResponse, systemTime: expect.anything() },
      ],
    }
    store.dispatch(actions.getMessageFromDialogflow(textPayload))
    const storedActions = store.getActions()
    expect(storedActions).toContainEqual(expectedAction)
  })

  it('should correctly process a card payload', () => {
    const expectedAction = {
      type: t.SAVE_RESPONSE,
      newConversationArray: [
        { ...cardResponse, systemTime: expect.anything() },
      ],
    }
    store.dispatch(actions.getMessageFromDialogflow(cardPayload))
    const storedActions = store.getActions()
    expect(storedActions).toContainEqual(expectedAction)
  })

  // it('get message from dialogflow for card type', () => {
  //   store.dispatch(actions.saveResponse(cardResponse))
  //   const storedActions = store.getActions()
  //   console.log(storedActions)
  //   expect(storedActions[1].newConversationArray[0].providerResponse).toEqual(
  //     cardResponse,
  //   )
  // })

  // it('get message from dialog flow for image type', () => {
  //   store.dispatch(actions.getMessageFromDialogflow(imageResponse))
  //   const storedActions = store.getActions()
  //   expect(
  //     storedActions[1].data.providerResponse.queryResult.fulfillmentMessages,
  //   ).toEqual([
  //     {
  //       image: { messages: [] },
  //       message: 'image',
  //       platform: 'PLATFORM_UNSPECIFIED',
  //     },
  //   ])
  // })

  // it('get message from dialog flow for quick replies type', () => {
  //   store.dispatch(actions.getMessageFromDialogflow(quickRepliesResponse))
  //   const storedActions = store.getActions()
  //   expect(
  //     storedActions[1].data.providerResponse.queryResult.fulfillmentMessages,
  //   ).toEqual([
  //     {
  //       message: 'quickReplies',
  //       platform: 'PLATFORM_UNSPECIFIED',
  //       quickReplies: { messages: [] },
  //     },
  //   ])
  // })

  // it('get message from dialog flow for default type', () => {
  //   store.dispatch(actions.getMessageFromDialogflow(defaultResponse))
  //   const storedActions = store.getActions()
  //   expect(
  //     storedActions[1].data.providerResponse.queryResult.fulfillmentMessages,
  //   ).toEqual([
  //     {
  //       default: { messages: [] },
  //       message: 'default',
  //       platform: 'PLATFORM_UNSPECIFIED',
  //     },
  //   ])
  // })

  // it('get message from dialog flow for payload type', () => {
  //   store.dispatch(actions.getMessageFromDialogflow(payloadResponse))
  //   const storedActions = store.getActions()
  //   expect(
  //     storedActions[1].data.providerResponse.queryResult.fulfillmentMessages,
  //   ).toEqual([
  //     {
  //       message: 4,
  //       payload: {
  //         messages: [
  //           { payload: { test: 'value' }, type: 4 },
  //           { speech: 'test text', type: 4 },
  //         ],
  //       },
  //       platform: 'PLATFORM_UNSPECIFIED',
  //       type: 4,
  //     },
  //   ])
  // })
})
