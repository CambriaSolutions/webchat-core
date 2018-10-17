import * as actions from './../../src/actions/conversation';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

import { Client } from './../../src/conversationClient';

const options = {
  eventUrl:
    'https://us-central1-dhcs-demo-chat.cloudfunctions.net/eventRequest',
  textUrl: 'https://us-central1-dhcs-demo-chat.cloudfunctions.net/textRequest',
  apiKey: 'XwsfZ0JoM214avhOcgqDZ3S50stTX94l8pnZJNxN',
  clientName: 'dialogflow',
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const store = mockStore({
  conversation: {
    client: new Client(options),
    clientOptions: options,
    clientName: 'dialogflow',
    messages: [],
  },
});

const badClientStore = mockStore({
  conversation: {
    client: new Client(options),
    clientOptions: options,
    clientName: 'test',
    messages: [],
  },
});

describe('dialog flow actions', () => {
  afterEach(() => {
    store.clearActions();
  });
  it('should set client with correct options', () => {
    store.dispatch(actions.setupClient('dialogflow', options));
    const storedActions = store.getActions();
    expect(storedActions[0].type).toEqual('SAVE_CLIENT');
  });

  it('should set client with correct options', () => {
    expect(() => {
      store.dispatch(actions.setupClient('', options));
    }).toThrow('No conversation provider selected.');
  });

  it('should set client with correct options', () => {
    expect(() => {
      store.dispatch(actions.setupClient('dialogflow', {}));
      const storedActions = store.getActions();
      expect(storedActions[0].type).toEqual('SAVE_CLIENT');
    }).toThrow('Fulfillment URL is required to generate a conversation client');
  });

  it('should set client with correct options', () => {
    expect(() => {
      store.dispatch(actions.setupClient('low', options));
      const storedActions = store.getActions();
      expect(storedActions[0].type).toEqual('SAVE_CLIENT');
    }).toThrow('low is not a recognized conversation provider.');
  });

  it('should create user response from text', () => {
    store.dispatch(actions.createUserResponse('text'));
    const storedActions = store.getActions();
    expect(storedActions[0].response.text).toEqual('text');
    expect(storedActions[0].type).toEqual('SAVE_USER_RESPONSE');
    expect(storedActions[1]).toEqual({ type: 'HIDE_BUTTON_BAR' });
    expect(storedActions[2]).toEqual({ type: 'INITIATE_LOADING' });
  });
  it('should send message ', () => {
    const expectedAction = [
      { type: 'HIDE_BUTTON_BAR' },
      { type: 'INITIATE_LOADING' },
    ];
    store.dispatch(actions.sendMessage('message'));
    const storedActions = store.getActions();
    expect(storedActions).toEqual(expectedAction);
  });

  it('should send message ', () => {
    expect(() => {
      badClientStore.dispatch(actions.sendMessage('message'));
    }).toThrow('test is not a recognized conversation provider.');
  });
  it('should send quick reply', () => {
    store.dispatch(actions.sendQuickReply('text'));
    const storedActions = store.getActions();
    expect(storedActions[0].response.text).toEqual('text');
    expect(storedActions[0].type).toEqual('SAVE_USER_RESPONSE');
    expect(storedActions[1]).toEqual({ type: 'HIDE_BUTTON_BAR' });
    expect(storedActions[2]).toEqual({ type: 'INITIATE_LOADING' });
  });
});
