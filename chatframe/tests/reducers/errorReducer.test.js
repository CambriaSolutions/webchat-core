import reducer from '././../../src/reducers/errorReducer';
import * as types from './../../src/actions/ActionTypes';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual('');
  });
  it('should handle SHOW_BUTTON_BAR', () => {
    expect(
      reducer([], {
        type: types.DISPLAY_ERROR,
        text: 'oops',
      })
    ).toEqual(undefined);
    expect(
      reducer([{ text: 'oops test', id: 0 }], {
        type: types.DISPLAY_ERROR,
        text: 'oops',
      })
    ).toEqual(undefined);
  });

  it('should handle HIDE_BUTTON_BAR', () => {
    expect(
      reducer([], {
        type: types.CLEAR_ERROR,
        text: 'clear it',
      })
    ).toEqual('');

    expect(
      reducer(
        [
          {
            text: 'oops test',
            id: 0,
          },
        ],
        { type: types.CLEAR_ERROR, text: 'Run the tests' }
      )
    ).toEqual('');
  });
});
