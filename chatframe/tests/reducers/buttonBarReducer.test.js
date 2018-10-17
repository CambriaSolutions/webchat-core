import reducer from './../../src/reducers/buttonBarReducer';
import * as types from './../../src/actions/ActionTypes';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ buttons: [], visible: false });
  });
  it('should handle SHOW_BUTTON_BAR', () => {
    expect(
      reducer([], {
        type: types.SHOW_BUTTON_BAR,
        text: 'Run the tests',
      })
    ).toEqual({ visible: true });
    expect(
      reducer(
        [
          {
            text: 'Use Redux',
            visible: false,
            id: 0,
          },
        ],
        { type: types.SHOW_BUTTON_BAR, text: 'Run the tests' }
      )
    ).toEqual({
      '0': { id: 0, text: 'Use Redux', visible: false },
      visible: true,
    });
  });

  it('should handle HIDE_BUTTON_BAR', () => {
    expect(
      reducer([], {
        type: types.HIDE_BUTTON_BAR,
        text: 'Run the tests',
      })
    ).toEqual({ visible: false });
    expect(
      reducer(
        [
          {
            text: 'Use Redux',
            visible: true,
            id: 0,
          },
        ],
        { type: types.HIDE_BUTTON_BAR, text: 'Run the tests' }
      )
    ).toEqual({
      '0': { id: 0, text: 'Use Redux', visible: true },
      visible: false,
    });
  });
});
