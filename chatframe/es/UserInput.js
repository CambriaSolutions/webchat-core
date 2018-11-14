var _templateObject = _taggedTemplateLiteralLoose(
    [
      '\n  background: #fff;\n  flex: 1 0 48px;\n  max-height: 48px;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  box-shadow: 0px -1px 3px 0px rgba(0, 0, 0, 0.23);\n',
    ],
    [
      '\n  background: #fff;\n  flex: 1 0 48px;\n  max-height: 48px;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  box-shadow: 0px -1px 3px 0px rgba(0, 0, 0, 0.23);\n',
    ]
  ),
  _templateObject2 = _taggedTemplateLiteralLoose(
    [
      '\n  flex: 0;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  color: ',
      ';\n  padding: 0 16px;\n  cursor: pointer;\n  &:hover {\n    color: ',
      ';\n  }\n',
    ],
    [
      '\n  flex: 0;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  color: ',
      ';\n  padding: 0 16px;\n  cursor: pointer;\n  &:hover {\n    color: ',
      ';\n  }\n',
    ]
  ),
  _templateObject3 = _taggedTemplateLiteralLoose(
    [
      '\n  width: 100%;\n  height: 100%;\n  font-size: 16px;\n  line-height: 16px;\n  outline: none;\n  border: none;\n  padding: 0 16px;\n',
    ],
    [
      '\n  width: 100%;\n  height: 100%;\n  font-size: 16px;\n  line-height: 16px;\n  outline: none;\n  border: none;\n  padding: 0 16px;\n',
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

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Send from '@material-ui/icons/Send';
import styled from 'styled-components';

// Redux
import {
  saveUserInput as _saveUserInput,
  submitUserInput as _submitUserInput,
} from './actions/userInput';

var OuterFrame = styled.div(_templateObject);
var SendButton = styled.div(
  _templateObject2,
  function(p) {
    return p.theme.palette.primary.dark;
  },
  function(p) {
    return p.theme.palette.primary.dark;
  }
);

var TextInput = styled.input(_templateObject3);

var UserInput = (function(_PureComponent) {
  _inherits(UserInput, _PureComponent);

  function UserInput() {
    _classCallCheck(this, UserInput);

    var _this = _possibleConstructorReturn(this, _PureComponent.call(this));

    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    return _this;
  }

  UserInput.prototype.handleKeyPress = function handleKeyPress(e) {
    // Enter was pressed
    if (e.charCode === 13) {
      this.props.submitUserInput();
    }
  };

  UserInput.prototype.render = function render() {
    var _props = this.props,
      saveUserInput = _props.saveUserInput,
      inputValue = _props.inputValue,
      theme = _props.theme;

    return React.createElement(
      OuterFrame,
      null,
      React.createElement(TextInput, {
        type: 'text',
        placeholder: 'Send a message',
        onChange: saveUserInput,
        value: inputValue,
        onKeyPress: this.handleKeyPress,
      }),
      React.createElement(
        SendButton,
        { onClick: this.props.submitUserInput, theme: theme },
        React.createElement(Send, null)
      )
    );
  };

  return UserInput;
})(PureComponent);

var mapStateToProps = function mapStateToProps(state) {
  return {
    inputValue: state.userInput,
    theme: state.config.theme,
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    saveUserInput: function saveUserInput(e) {
      dispatch(_saveUserInput(e.target.value));
    },
    submitUserInput: function submitUserInput() {
      dispatch(_submitUserInput());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInput);
