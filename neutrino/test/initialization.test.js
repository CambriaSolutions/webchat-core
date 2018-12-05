import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Client } from '../src/components/chatframe/conversationClient'
import * as actions from '../src/components/chatframe/actions/initialization'
import * as t from '../src/components/chatframe/actions/actionTypes'

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

describe('initialization actions', () => {
  afterEach(() => {
    store.clearActions()
  })
  it('should set up dialog flow with correct options', () => {
    const props = {
      title: 'test title',
      avatar: 'test avatar',
      client: options.clientName,
      clientOptions: options,
      primaryColor: 'lightBlue',
      secondaryColor: 'pink',
      initialActive: true,
      fullscreen: true,
    }
    const titleAction = { type: t.SET_TITLE, title: props.title }
    const avatarAction = { type: t.SET_AVATAR, avatar: props.avatar }
    const saveClientAction = {
      type: t.SAVE_CLIENT,
      client: {
        eventUrl: options.eventUrl,
        textUrl: options.textUrl,
      },
      clientName: options.clientName,
    }
    const timerStartAction = { type: t.TIMER_START, newTimer: 2 }
    const convoStartAction = { type: t.SET_CONVERSATION_STARTED }
    const loadingAction = { type: t.INITIATE_LOADING }
    const showWindowAction = { type: t.SHOW_WINDOW }
    const fullscreenAction = { type: t.FULLSCREEN }

    store.dispatch(actions.initialize(props))
    const storedActions = store.getActions()
    expect(storedActions).toContainEqual(titleAction)
    expect(storedActions).toContainEqual(avatarAction)
    expect(storedActions).toContainEqual(saveClientAction)
    expect(storedActions).toContainEqual(timerStartAction)
    expect(storedActions).toContainEqual(convoStartAction)
    expect(storedActions).toContainEqual(loadingAction)
    expect(storedActions).toContainEqual(showWindowAction)
    expect(storedActions).toContainEqual(fullscreenAction)
  })

  it('should should start the timer', () => {
    const expectedAction = { newTimer: 18, type: t.TIMER_START }
    store.dispatch(actions.startTimer())
    const storedActions = store.getActions()
    expect(storedActions[0].type).toEqual(expectedAction.type)
  })

  it('should show the window', () => {
    const expectedAction = { type: t.SHOW_WINDOW }
    store.dispatch(actions.showWindow())
    const storedActions = store.getActions()
    expect(storedActions).toContainEqual(expectedAction)
  })

  it('should hide the window', () => {
    const expectedAction = { type: t.HIDE_WINDOW }
    store.dispatch(actions.hideWindow())
    const storedActions = store.getActions()
    expect(storedActions).toContainEqual(expectedAction)
  })

  it('should go fullscreen', () => {
    const expectedAction = { type: t.FULLSCREEN }
    store.dispatch(actions.showFullscreen())
    const storedActions = store.getActions()
    expect(storedActions).toContainEqual(expectedAction)
  })

  it('should go windowed', () => {
    const expectedAction = { type: t.WINDOWED }
    store.dispatch(actions.showWindowed())
    const storedActions = store.getActions()
    expect(storedActions).toContainEqual(expectedAction)
  })
})
