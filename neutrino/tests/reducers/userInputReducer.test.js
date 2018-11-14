import reducer from './../../src/components/chatframe/reducers/userInputReducer';
import * as types from './../../src/components/chatframe/actions/ActionTypes';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual('');
  });

  it('should handle SHOW_BUTTON_BAR', () => {
    expect(
      reducer([], {
        type: types.SAVE_USER_INPUT,
        text: 'test save upser input',
      })
    ).toEqual(undefined);
    expect(
      reducer([{ text: 'test save user input', id: 0 }], {
        type: types.SAVE_USER_INPUT,
        text: 'oops',
      })
    ).toEqual(undefined);
  });
});
