import * as actions from '././../../src/actions/userInput';
import * as types from '././../../src/actions/actionTypes';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect'; 

import { Client } from './../../src/conversationClient';

const options = {
  eventUrl:
    'https://us-central1-dhcs-demo-chat.cloudfunctions.net/eventRequest',
  textUrl: 'https://us-central1-dhcs-demo-chat.cloudfunctions.net/textRequest',
  apiKey: 'XwsfZ0JoM214avhOcgqDZ3S50stTX94l8pnZJNxN',
};
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('should save user input', () => {
  const value = 'testing input';
  const expectedAction = {
    type: types.SAVE_USER_INPUT,
    value,
  };
  expect(actions.saveUserInput(value)).toEqual(expectedAction);
});

test('creates a user response from input and save user input', () => {
  const store = mockStore({
    userInput: 'testing',
    conversation: {
      client: new Client(options),
      clientOptions: options,
      clientName: 'dialogflow',
      messages: [],
    },
  });

  store.dispatch(actions.submitUserInput());
  const storedActions = store.getActions();
  const expectedActions = [
    {
      response: {
        entity: 'user',
        messageId: 'usermessage-0',
        systemTime: storedActions[0].response.systemTime,
        text: 'testing',
      },
      type: 'SAVE_USER_RESPONSE',
    },
    { type: 'HIDE_BUTTON_BAR' },
    { type: 'INITIATE_LOADING' },
    { type: 'SAVE_USER_INPUT', value: '' },
  ];
  expectedActions[0].systemTime = storedActions[0].systemTime;
  expect(storedActions).toEqual(expectedActions);
});

test('returns nothing from a user response with invalid input', () => {
  const expectedActions = [];
  const store = mockStore({
    userInput: '',
    conversation: {
      client: new Client(options),
      clientOptions: options,
      clientName: 'dialogflow',
      messages: [],
    },
  });

  store.dispatch(actions.submitUserInput());
  const storedActions = store.getActions();
  expect(storedActions).toEqual(expectedActions);
});
