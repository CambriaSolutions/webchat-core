var _templateObject = _taggedTemplateLiteralLoose(
  [
    "\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 9999;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n  & > * {\n    box-sizing: border-box;\n    font-family: 'Roboto', sans-serif;\n  }\n",
  ],
  [
    "\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 9999;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n  box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n  & > * {\n    box-sizing: border-box;\n    font-family: 'Roboto', sans-serif;\n  }\n",
  ]
);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === 'object' || typeof call === 'function')
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

function _taggedTemplateLiteralLoose(strings, raw) {
  strings.raw = raw;
  return strings;
}

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import WebFont from 'webfontloader';

// Components
import ActivatorButton from './ActivatorButton';
import ChatContainer from './ChatContainer';

// Redux
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import rootReducer from './reducers/rootReducer';
import { initialize } from './actions/initialization';

WebFont.load({
  google: {
    families: ['Roboto:300,400,500'],
  },
});

var OuterContainer = styled.div(_templateObject);

var ChatFrame = (function(_PureComponent) {
  _inherits(ChatFrame, _PureComponent);

  function ChatFrame(props) {
    _classCallCheck(this, ChatFrame);

    var _this = _possibleConstructorReturn(
      this,
      _PureComponent.call(this, props)
    );

    _this.store = createStore(
      rootReducer,
      composeWithDevTools(applyMiddleware(thunkMiddleware))
    );
    _this.currentValue = null;
    return _this;
  }

  ChatFrame.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    // We load the initial options into the Redux store inside of the
    // componentDidMount() lifecycle hook. This lets us use Redux to manage
    // state instead of passing props down manually.
    this.store.dispatch(initialize(this.props));

    // In order to expose when a webhook payload of custom data is received,
    // we manually create a subscription to the data piece we want to expose
    this.unsubscribe = this.store.subscribe(function() {
      return _this2.handleChange(_this2.store);
    });
  };

  ChatFrame.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  ChatFrame.prototype.select = function select(state) {
    return state.conversation.webhookPayload;
  };

  ChatFrame.prototype.handleChange = function handleChange(store) {
    var previousValue = this.currentValue;
    this.currentValue = this.select(store.getState());
    if (previousValue !== this.currentValue && this.props.onPayload) {
      this.props.onPayload(this.currentValue);
    }
  };

  ChatFrame.prototype.render = function render() {
    return React.createElement(
      Provider,
      { store: this.store },
      React.createElement(
        OuterContainer,
        null,
        React.createElement(ChatContainer, null),
        React.createElement(ActivatorButton, { variant: 'fab' })
      )
    );
  };

  return ChatFrame;
})(PureComponent);

export default ChatFrame;
