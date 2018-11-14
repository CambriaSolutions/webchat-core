import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../src/components/chatframe/actions/conversation'
import { Client } from '../src/components/chatframe/conversationClient'
import { response } from './textResponse'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const options = {
  eventUrl:
    'https://us-central1-dhcs-demo-chat.cloudfunctions.net/eventRequest',
  textUrl: 'https://us-central1-dhcs-demo-chat.cloudfunctions.net/textRequest',
  clientName: 'dialogflow',
}

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

describe('dialogflow actions', () => {
  afterEach(() => {
    store.clearActions()
  })
  it('should set client with correct options', () => {
    store.dispatch(actions.setupClient('dialogflow', options))
    const storedActions = store.getActions()
    expect(storedActions[0].type).toEqual('SAVE_CLIENT')
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
      expect(storedActions[0].type).toEqual('SAVE_CLIENT')
    }).toThrow('Fulfillment URL is required to generate a conversation client')
  })

  it('should set client with correct options', () => {
    expect(() => {
      store.dispatch(actions.setupClient('low', options))
      const storedActions = store.getActions()
      expect(storedActions[0].type).toEqual('SAVE_CLIENT')
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
    store.dispatch(actions.createUserResponse(query))
    const storedActions = store.getActions()
    expect(storedActions[0].response.text).toEqual(query)
    expect(storedActions[0].type).toEqual('SAVE_USER_RESPONSE')
    expect(storedActions[1].type).toEqual('HIDE_BUTTON_BAR')
    expect(storedActions[2].type).toEqual('INITIATE_LOADING')
  })

  it('should send message ', () => {
    const query = 'text'

    store.dispatch(actions.sendMessage(query))
    const storedActions = store.getActions()
    expect(storedActions[0].type).toEqual("INITIATE_LOADING")
  })

  it('should throw an error when provider is not recognized', () => {
    expect(() => {
      badClientStore.dispatch(actions.sendMessage('message'))
    }).toThrow('test is not a recognized conversation provider.')
  })

  it('should send quick reply', () => {
    store.dispatch(actions.sendQuickReply('text'))
    const storedActions = store.getActions()
    expect(storedActions[0].response.text).toEqual('text')
    expect(storedActions[0].type).toEqual('SAVE_USER_RESPONSE')
    expect(storedActions[1].type).toEqual('HIDE_BUTTON_BAR')
    expect(storedActions[2].type).toEqual('INITIATE_LOADING')
  })
})
