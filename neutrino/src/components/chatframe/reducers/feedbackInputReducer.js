import * as t from '../actions/actionTypes'

const initialState = {
  submitted: false,
  wasHelpful: null,
  helpfulList: [
    { value: 'Had the information I needed', checked: false },
    {
      value: 'I was able to answer my question(s)',
      checked: false,
    },
    {
      value: 'Was easy to ask for assistance',
      checked: false,
    },
    {
      value: 'I prefer using Gen to calling or visiting an office',
      checked: false,
    },
    {
      value: 'Was easy to navigate',
      checked: false,
    },
    {
      value: 'Easy to converse with Gen',
      checked: false,
    },
  ],
  notHelpfulList: [
    { value: 'Did not have the information I needed', checked: false },
    {
      value: "I wasn't able to have my questions answered",
      checked: false,
    },
    {
      value: 'I would prefer calling in or visiting the office to using Gen',
      checked: false,
    },
    {
      value: 'Was not easy conversing wtih Gen',
      checked: false,
    },
    {
      value: 'Was not easy to navigate',
      checked: false,
    },
  ],
}

function feedbackInput(state = initialState, action) {
  switch (action.type) {
    case t.SAVE_FEEDBACK_INPUT:
      return {
        wasHelpful: action.value.wasHelpful,
        helpfulList: state.helpfulList.map(item => {
          if (item.value === action.value.value) {
            return { ...item, checked: action.value.checked }
          }
          return item
        }),
        notHelpfulList: state.notHelpfulList.map(item => {
          if (item.value === action.value.value) {
            return { ...item, checked: action.value.checked }
          }
          return item
        }),
      }
    case t.SET_FEEDBACK_SUBMITTED:
      return { ...state, submitted: true }
    default:
      return state
  }
}

export default feedbackInput
