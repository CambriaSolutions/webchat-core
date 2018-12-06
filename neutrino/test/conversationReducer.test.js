import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { format } from 'date-fns'
import reducer from '../src/components/chatframe/reducers/conversationReducer'
import * as types from '../src/components/chatframe/actions/ActionTypes'
import { sysTimeFormat } from '../src/components/chatframe/config/dateFormats'
import { Client } from '../src/components/chatframe/conversationClient'
import { textResponse } from './responses'
import { options } from './options'

const defaultState = {
  client: new Client(options),
  clientName: options.clientName,
  messages: [],
  webhookPayload: null,
  lastUpdateTime: format(new Date(), sysTimeFormat),
  currentTime: format(new Date(), sysTimeFormat),
  headerTime: 'Now',
  timer: 8,
}

const exampleState = {
  client: {
    textUrl: 'https://us-central1-webchat-core.cloudfunctions.net/textRequest',
    eventUrl:
      'https://us-central1-webchat-core.cloudfunctions.net/eventRequest',
  },
  clientName: options.clientName,
  messages: [
    {
      entity: 'bot',
      loading: false,
      messageId: '80c35299-c583-483a-a3c2-249ab312e1d6',
      language: 'en-us',
      systemTime: '2018-12-06T01:51:55.356',
      responses: [
        {
          type: 'text',
          text: ['Sorry, could you say that again?'],
          systemTime: '2018-12-06T01:51:55.356',
          entity: 'bot',
          key: 'msg-0-2018-12-06T01:51:55.356',
        },
      ],
    },
    {
      entity: 'user',
      messageId: 'usermessage-1',
      systemTime: '2018-12-06T01:51:57.861',
      text: 'multiple',
      key: 'msg-1-2018-12-06T01:51:57.861',
    },
    {
      entity: 'bot',
      loading: false,
      messageId: '1f002efd-8e00-4ced-8d6b-4b16687d0380',
      language: 'en-us',
      systemTime: '2018-12-06T01:51:58.223',
      responses: [
        {
          type: 'text',
          text: ['These'],
          systemTime: '2018-12-06T01:51:58.223',
          entity: 'bot',
          key: 'msg-2-2018-12-06T01:51:58.223',
        },
        {
          type: 'text',
          text: ['Are'],
          systemTime: '2018-12-06T01:51:58.223',
          entity: 'bot',
          key: 'msg-2-2018-12-06T01:51:58.223',
        },
        {
          type: 'text',
          text: ['Multiple'],
          systemTime: '2018-12-06T01:51:58.223',
          entity: 'bot',
          key: 'msg-2-2018-12-06T01:51:58.223',
        },
        {
          type: 'text',
          text: ['Responses'],
          systemTime: '2018-12-06T01:51:58.223',
          entity: 'bot',
          key: 'msg-2-2018-12-06T01:51:58.223',
        },
      ],
    },
  ],
  webhookPayload: null,
  lastUpdateTime: '2018-12-06T01:51:58.226',
  currentTime: '2018-12-06T01:51:53.999',
  headerTime: 'Now',
  conversationStarted: true,
}

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}).client).toEqual(null)
    expect(reducer(undefined, {}).clientName).toEqual(null)
    expect(reducer(undefined, {}).webhookPayload).toEqual(null)
  })

  it('should handle SAVE_CLIENT', () => {
    expect(
      reducer([], {
        type: types.SAVE_CLIENT,
        clientName: options.clientName,
        client: new Client(options),
        clientOptions: options,
      })
    ).toEqual({
      client: {
        eventUrl: options.eventUrl,
        textUrl: options.textUrl,
      },
      clientName: options.clientName,
    })
    expect(
      reducer([exampleState], {
        type: types.SAVE_CLIENT,
        clientName: options.clientName,
        client: new Client(options),
        clientOptions: options,
      }).client
    ).toEqual({
      eventUrl: options.eventUrl,
      textUrl: options.textUrl,
    })
  })

  it('should handle UPDATE_CURRENT_TIME', () => {
    expect(
      reducer(defaultState, {
        type: types.UPDATE_CURRENT_TIME,
        headerTime: 'Now',
      }).headerTime
    ).toEqual('Now')
  })

  it('should handle INITIATE_LOADING', () => {
    expect(
      reducer(defaultState, {
        type: types.INITIATE_LOADING,
        clientName: options.clientName,
        client: new Client(options),
        clientOptions: options,
        messages: [],
      }).messages[0].entity
    ).toEqual('bot')
    expect(
      reducer(exampleState, {
        type: types.INITIATE_LOADING,
        clientName: options.clientName,
        client: new Client(options),
        clientOptions: options,
        messages: [],
      }).messages.length
    ).toEqual(4)
  })
  it('should handle SAVE_RESPONSE', () => {
    expect(
      reducer(defaultState, {
        type: types.SAVE_RESPONSE,
        clientName: options.clientName,
        client: new Client(options),
        clientOptions: options,
        newConversationArray: [],
      }).messages
    ).toEqual([])
    expect(
      reducer(exampleState, {
        type: types.SAVE_RESPONSE,
        clientName: options.clientName,
        client: new Client(options),
        clientOptions: options,
        newConversationArray: textResponse,
      }).messages
    ).toEqual(textResponse)
  })
  it('should handle SAVE_USER_RESPONSE', () => {
    expect(
      reducer(exampleState, {
        type: types.SAVE_USER_RESPONSE,
        clientName: options.clientName,
        client: new Client(options),
        clientOptions: options,
      }).messages.length
    ).toEqual(4)
  })

  it('should handle timer start', () => {
    expect(
      reducer(defaultState, {
        type: types.TIMER_START,
      }).timer
    ).toEqual(undefined)
  })
})
