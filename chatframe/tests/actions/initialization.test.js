import * as actions from '././../../src/actions/initialization';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

import mockConsole from 'jest-mock-console';

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

describe('initialization actions', () => {
  afterEach(() => {
    store.clearActions();
  });

  it('should set up dialog flow with correct options', () => {
    //   initialize(props)
    const props = {
      title: 'hello',
      avatar: 'the dude',
      client: 'dialogflow',
      clientOptions: options,
      token: options.apiKey,
      primaryColor: 'lightBlue',
      secondaryColor: 'pink',
      initialActive: true,
      fullscreen: true,
    };
    store.dispatch(actions.initialize(props));
    const storedActions = store.getActions();
    expect(storedActions[0]).toEqual({ title: 'hello', type: 'SET_TITLE' });
    expect(storedActions[1]).toEqual({
      avatar: 'the dude',
      type: 'SET_AVATAR',
    });
    expect(storedActions[2].type).toEqual('SAVE_CLIENT');
    expect(storedActions[3]).toEqual({ newTimer: 2, type: 'TIMER_START' });
    expect(storedActions[4]).toEqual({ type: 'UPDATE_CURRENT_TIME' });
    expect(storedActions[5]).toEqual({ type: 'INITIATE_LOADING' });
    expect(storedActions[6].type).toEqual('CREATE_THEME');
    expect(storedActions[7]).toEqual({ type: 'SHOW_WINDOW' });
    expect(storedActions[8]).toEqual({ type: 'FULLSCREEN' });
  });

  it('should set up dialog flow with correct options', () => {
    //   initialize(props)
    const props = {
      title: 'hello',
      avatar: 'the dude',
      client: 'dialogflow',
      clientOptions: options,
      token: options.apiKey,
      primaryColor: '#FFFFFF',
      secondaryColor: '#000000',
      initialActive: false,
      fullscreen: false,
    };
    store.dispatch(actions.initialize(props));
    const storedActions = store.getActions();
    expect(storedActions[0]).toEqual({ title: 'hello', type: 'SET_TITLE' });
    expect(storedActions[1]).toEqual({
      avatar: 'the dude',
      type: 'SET_AVATAR',
    });
    expect(storedActions[2].type).toEqual('SAVE_CLIENT');
    expect(storedActions[3]).toEqual({ newTimer: 6, type: 'TIMER_START' });
    expect(storedActions[4]).toEqual({ type: 'UPDATE_CURRENT_TIME' });
    expect(storedActions[5]).toEqual({ type: 'INITIATE_LOADING' });
    expect(storedActions[6].type).toEqual('CREATE_THEME');
    expect(storedActions[7]).toEqual({ type: 'HIDE_WINDOW' });
    expect(storedActions[8]).toEqual({ type: 'WINDOWED' });
  });

  it('should set up dialog flow with correct options', () => {
    //   initialize(props)
    const props = {
      title: 'hello',
      avatar: 'the dude',
      client: 'dialogflow',
      clientOptions: options,
      token: options.apiKey,
      primaryColor: 'fish',
      secondaryColor: 'dog',
      initialActive: false,
      fullscreen: true,
    };

    const restoreConsole = mockConsole();
    store.dispatch(actions.initialize(props));
    expect(console.error).toHaveBeenCalled();
    restoreConsole();

    // store.dispatch(actions.initialize(props))
    // const storedActions = store.getActions()
    // expect(storedActions[0]).toEqual({"title": "hello", "type": "SET_TITLE"})
    // expect(storedActions[1]).toEqual({"avatar": "the dude", "type": "SET_AVATAR"})
    // expect(storedActions[2].type).toEqual( "SAVE_CLIENT")
    // expect(storedActions[3]).toEqual(  {"newTimer": 10, "type": "TIMER_START"})
    // expect(storedActions[4]).toEqual( {"type": "UPDATE_CURRENT_TIME"})
    // expect(storedActions[5]).toEqual(  {"type": "INITIATE_LOADING"})
    // expect(storedActions[6].type).toEqual("CREATE_THEME")
    // expect(storedActions[7]).toEqual({"type": "HIDE_WINDOW"})
    // expect(storedActions[8]).toEqual({"type": "FULLSCREEN"})
  });

  it('should set up dialog flow with correct options', () => {
    //   initialize(props)
    const props = {
      title: 'hello',
      avatar: 'the dude',
      client: 'dialogflow',
      clientOptions: options,
      token: options.apiKey,
      primaryColor: null,
      secondaryColor: null,
      initialActive: true,
      fullscreen: false,
    };
    store.dispatch(actions.initialize(props));
    const storedActions = store.getActions();
    expect(storedActions[0]).toEqual({ title: 'hello', type: 'SET_TITLE' });
    expect(storedActions[1]).toEqual({
      avatar: 'the dude',
      type: 'SET_AVATAR',
    });
    expect(storedActions[2].type).toEqual('SAVE_CLIENT');
    expect(storedActions[3]).toEqual({ newTimer: 14, type: 'TIMER_START' });
    expect(storedActions[4]).toEqual({ type: 'UPDATE_CURRENT_TIME' });
    expect(storedActions[5]).toEqual({ type: 'INITIATE_LOADING' });
    expect(storedActions[6].type).toEqual('SHOW_WINDOW');
    expect(storedActions[7]).toEqual({ type: 'WINDOWED' });
  });

  it('should set up dialog flow with correct options', () => {
    const expectedAction = [
      { newTimer: 18, type: 'TIMER_START' },
      { type: 'UPDATE_CURRENT_TIME' },
    ];
    store.dispatch(actions.startTimer());
    const storedActions = store.getActions();
    expect(storedActions).toEqual(expectedAction);
  });

  it('should set up dialog flow with correct options', () => {
    const expectedAction = [{ type: 'SHOW_WINDOW' }];
    store.dispatch(actions.showWindow());
    const storedActions = store.getActions();
    expect(storedActions).toEqual(expectedAction);
  });

  it('should set up dialog flow with correct options', () => {
    const expectedAction = [{ type: 'HIDE_WINDOW' }];
    store.dispatch(actions.hideWindow());
    const storedActions = store.getActions();
    expect(storedActions).toEqual(expectedAction);
  });

  it('should set up dialog flow with correct options', () => {
    const expectedAction = [{ type: 'FULLSCREEN' }];
    store.dispatch(actions.showFullscreen());
    const storedActions = store.getActions();
    expect(storedActions).toEqual(expectedAction);
  });

  it('should set up dialog flow with correct options', () => {
    const expectedAction = [{ type: 'WINDOWED' }];
    store.dispatch(actions.showWindowed());
    const storedActions = store.getActions();
    expect(storedActions).toEqual(expectedAction);
  });
});
