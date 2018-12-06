import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../src/components/chatframe/actions/conversation'
import * as t from '../src/components/chatframe/actions/actionTypes'
import { Client } from '../src/components/chatframe/conversationClient'
import fetchMock from 'fetch-mock'
import find from 'lodash/find'
import 'isomorphic-fetch'
import { textPayload } from './dialogflowPayloads'
import { options } from './options'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const store = mockStore({
  conversation: {
    client: new Client(options),
    clientOptions: options,
    clientName: 'dialogflow',
    messages: [],
  },
})

const badClientStore = mockStore({
  conversation: {
    client: new Client(options),
    clientOptions: options,
    clientName: 'test',
    messages: [],
  },
})

function encodeQueryData(data) {
  const ret = []
  for (let d in data)
    ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]))
  return ret.join('&')
}

describe('conversation actions', () => {
  afterEach(() => {
    store.clearActions()
    fetchMock.restore()
  })
  it('should set client with correct options', () => {
    store.dispatch(actions.setupClient('dialogflow', options))
    const storedActions = store.getActions()
    expect(storedActions[0].type).toEqual(t.SAVE_CLIENT)
  })

  it('should set client with correct options', () => {
    expect(() => {
      store.dispatch(actions.setupClient('', options))
    }).toThrow('No conversation provider selected.')
  })

  it('should set client with correct options', () => {
    expect(() => {
      store.dispatch(actions.setupClient('dialogflow', {}))
      const storedActions = store.getActions()
      expect(storedActions[0].type).toEqual(t.SAVE_CLIENT)
    }).toThrow('Fulfillment URL is required to generate a conversation client')
  })

  it('should set client with correct options', () => {
    expect(() => {
      store.dispatch(actions.setupClient('low', options))
      const storedActions = store.getActions()
      expect(storedActions[0].type).toEqual(t.SAVE_CLIENT)
    }).toThrow('low is not a recognized conversation provider.')
  })

  it('should create user response from text', () => {
    const query = 'text'
    let url = options.textUrl
    const params = {
      query: query,
    }
    const queryParams = encodeQueryData(params)
    url = url + '?' + queryParams
    fetchMock.getOnce(url, {
      body: textPayload,
      headers: { 'content-type': 'application/json' },
    })

    store.dispatch(actions.createUserResponse(query))
    const storedActions = store.getActions()
    expect(storedActions).toContainEqual({
      type: t.SAVE_USER_RESPONSE,
      response: expect.anything(),
    })
    expect(storedActions).toContainEqual({ type: t.HIDE_BUTTON_BAR })
    expect(storedActions).toContainEqual({ type: t.INITIATE_LOADING })
  })

  it('should send message ', () => {
    const query = 'text'

    store.dispatch(actions.sendMessage(query))
    const storedActions = store.getActions()

    expect(storedActions).toContainEqual({ type: t.HIDE_BUTTON_BAR })
    expect(storedActions).toContainEqual({
      type: t.SAVE_RESPONSE,
      newConversationArray: expect.anything(),
    })
    expect(storedActions).toContainEqual({ type: t.CLEAR_ERROR })
    expect(storedActions).toContainEqual({ type: t.INITIATE_LOADING })
  })

  it('should throw an error when provider is not recognized', () => {
    expect(() => {
      badClientStore.dispatch(actions.sendMessage('message'))
    }).toThrow('test is not a recognized conversation provider.')
  })

  it('should send quick reply', () => {
    store.dispatch(actions.sendQuickReply('text'))
    const storedActions = store.getActions()
    const responseText = find(storedActions, { type: t.SAVE_USER_RESPONSE })
      .response.text
    expect(responseText).toEqual('text')
  })
})
