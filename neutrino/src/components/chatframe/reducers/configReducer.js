import * as t from '../actions/actionTypes'

const initialState = {
  avatar: null,
  title: 'Chat Window',
  windowVisible: false,
  fullscreen: false,
  feedbackSurveyVisible: false,
  privacyPolicyVisible: false,
  googleMapsKey: '',
  centerCoordinates: '',
  privacyPolicy:
    'Please do not enter any personally identifiable information such as SSN, Date of Birth, Case Number or last name.',
  feedbackSurvey: 'Test Test Test',
}

function config(state = initialState, action) {
  switch (action.type) {
    case t.HIDE_PRIVACY_POLICY:
      return { ...state, privacyPolicyVisible: false }

    case t.SHOW_PRIVACY_POLICY:
      return { ...state, privacyPolicyVisible: true }

    case t.SET_PRIVACY_POLICY:
      return { ...state, privacyPolicy: action.policyText }

    case t.HIDE_FEEDBACK_SURVEY:
      return { ...state, feedbackSurveyVisible: false }

    case t.SHOW_FEEDBACK_SURVEY:
      return { ...state, feedbackSurveyVisible: true }

    case t.SET_FEEDBACK_SURVEY:
      return { ...state, feedbackSurvey: action.feedbackSurveyText }

    case t.SET_GOOGLE_MAPS_KEY:
      return { ...state, googleMapsKey: action.googleMapsKey }

    case t.SET_CENTER_COORDINATES:
      return { ...state, centerCoordinates: action.centerCoordinates }

    case t.SET_AVATAR:
      return { ...state, avatar: action.avatar }

    case t.SET_TITLE:
      return { ...state, title: action.title }

    case t.SHOW_WINDOW:
      return { ...state, windowVisible: true }

    case t.HIDE_WINDOW:
      return { ...state, windowVisible: false }

    case t.FULLSCREEN:
      return { ...state, fullscreen: true }

    case t.WINDOWED:
      return { ...state, fullscreen: false }

    default:
      return state
  }
}

export default config
