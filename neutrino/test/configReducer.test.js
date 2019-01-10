import reducer from '../src/components/chatframe/reducers/configReducer'
import * as types from '../src/components/chatframe/actions/ActionTypes'

describe('reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      avatar: null,
      title: 'Chat Window',
      windowVisible: false,
      privacyPolicyVisible: false,
      fullscreen: false,
    }
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle SET_AVATAR', () => {
    expect(
      reducer([], {
        type: types.SET_AVATAR,
        avatar: 'avatar',
      })
    ).toEqual({ avatar: 'avatar' })
    expect(
      reducer([{ text: 'test save user input', id: 0 }], {
        type: types.SET_AVATAR,
        avatar: 'oops',
      })
    ).toEqual({ '0': { id: 0, text: 'test save user input' }, avatar: 'oops' })
  })

  it('should handle SET_TITLE', () => {
    expect(
      reducer([], {
        type: types.SET_TITLE,
        title: 'test title',
      })
    ).toEqual({ title: 'test title' })
    expect(
      reducer([{ text: 'test', id: 0 }], {
        type: types.SET_TITLE,
        text: 'oops',
      })
    ).toEqual({ '0': { id: 0, text: 'test' }, title: undefined })
  })

  it('should handle SHOW_WINDOW', () => {
    expect(
      reducer([], {
        type: types.SHOW_WINDOW,
        text: 'test save upser input',
      })
    ).toEqual({ windowVisible: true })
    expect(
      reducer([{ text: 'test save user input', id: 0 }], {
        type: types.SHOW_WINDOW,
        text: 'oops',
      })
    ).toEqual({
      '0': { id: 0, text: 'test save user input' },
      windowVisible: true,
    })
  })
  it('should handle HIDE_WINDOW', () => {
    expect(
      reducer([], {
        type: types.HIDE_WINDOW,
        text: 'test save upser input',
      })
    ).toEqual({ windowVisible: false })
    expect(
      reducer([{ text: 'test save user input', id: 0 }], {
        type: types.HIDE_WINDOW,
        text: 'oops',
      })
    ).toEqual({
      '0': { id: 0, text: 'test save user input' },
      windowVisible: false,
    })
  })
  it('should handle FULLSCREEN', () => {
    expect(
      reducer([], {
        type: types.FULLSCREEN,
        text: 'test save upser input',
      })
    ).toEqual({ fullscreen: true })
    expect(
      reducer([{ text: 'test save user input', id: 0 }], {
        type: types.FULLSCREEN,
        text: 'oops',
      })
    ).toEqual({
      '0': { id: 0, text: 'test save user input' },
      fullscreen: true,
    })
  })
  it('should handle WINDOWED', () => {
    expect(
      reducer([], {
        type: types.WINDOWED,
        text: 'test save upser input',
      })
    ).toEqual({ fullscreen: false })
    expect(
      reducer([{ text: 'test save user input', id: 0 }], {
        type: types.WINDOWED,
        text: 'oops',
      })
    ).toEqual({
      '0': { id: 0, text: 'test save user input' },
      fullscreen: false,
    })
  })
})
