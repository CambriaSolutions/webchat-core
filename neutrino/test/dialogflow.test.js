import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../src/components/chatframe/actions/dialogflow'
import { Client } from '../src/components/chatframe/conversationClient'
import fetchMock from 'fetch-mock'
import 'isomorphic-fetch'
import { cardResponse } from './cardResponse'
import { response } from './textResponse'
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
    const expectedAction = [
      {
        client: {
          eventUrl: options.eventUrl,
          textUrl: options.textUrl,
        },
        clientName: options.clientName,
        type: 'SAVE_CLIENT',
      },
    ]

    store.dispatch(actions.setupDialogflow(options))
    const storedActions = store.getActions()
    expect(storedActions).toEqual(expectedAction)
  })

  it('should not set up dialogflow with incorrect options', () => {
    expect(() => {
      store.dispatch(actions.setupDialogflow({}))
    }).toThrow('Fulfillment URL is required to generate a conversation client')
  })

  it('should initiate loading', () => {
    const message = 'Hello'
    const expectedAction = [{ type: 'INITIATE_LOADING' }]

    store.dispatch(actions.sendMessageWithDialogflow(message))
    const storedActions = store.getActions()
    expect(storedActions).toEqual(expectedAction)
  })

  it('should throw an error on empty message', () => {
    const message = ''
    expect(() => {
      store.dispatch(actions.sendMessageWithDialogflow(message))
    }).toThrow('Query should not be empty')
  })

  it('should respond to welcome event with initial loading', () => {
    const event = 'Welcome'
    const expectedAction = [{ type: 'INITIATE_LOADING' }]
    store.dispatch(actions.sendEvent(event))
    const storedActions = store.getActions()
    expect(storedActions).toEqual(expectedAction)
  })

  it('should respond to null event with throwing an error', () => {
    const event = ''
    expect(() => {
      store.dispatch(actions.sendEvent(event))
    }).toThrow('Query should not be empty')
  })

  test('should get Message From Dialogflow for correct response', () => {
    const expectedAction = { type: 'HIDE_BUTTON_BAR' }
    store.dispatch(actions.getMessageFromDialogflow(response))
    const storedActions = store.getActions()
    expect(storedActions[0]).toEqual(expectedAction)
  })

  it('should save response', () => {
    const expectedAction = [
      { type: 'HIDE_BUTTON_BAR' },
      { newConversationArray: [response], type: 'SAVE_RESPONSE' },
    ]
    store.dispatch(actions.saveResponse(response))
    const storedActions = store.getActions()
    expect(storedActions).toEqual(expectedAction)
  })

  // it('get message from dialogflow for card type', () => {
  //   store.dispatch(
  //     actions.getMessageFromDialogflow(cardResponse.providerResponse),
  //   )
  //   const storedActions = store.getActions()
  //   expect(storedActions[1].newConversationArray[0].providerResponse).toEqual(
  //     cardResponse.providerResponse,
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
