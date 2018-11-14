var _templateObject = _taggedTemplateLiteralLoose(
    [
      '\n  && {\n    background: ',
      ';\n    padding: 16px;\n    color: ',
      ';\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    border-bottom-left-radius: 0px;\n    border-bottom-right-radius: 0px;\n    position: relative;\n    z-index: 1;\n  }\n',
    ],
    [
      '\n  && {\n    background: ',
      ';\n    padding: 16px;\n    color: ',
      ';\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    border-bottom-left-radius: 0px;\n    border-bottom-right-radius: 0px;\n    position: relative;\n    z-index: 1;\n  }\n',
    ]
  ),
  _templateObject2 = _taggedTemplateLiteralLoose(
    ['\n  flex: 0;\n'],
    ['\n  flex: 0;\n']
  ),
  _templateObject3 = _taggedTemplateLiteralLoose(
    ['\n  flex: 1;\n'],
    ['\n  flex: 1;\n']
  ),
  _templateObject4 = _taggedTemplateLiteralLoose(
    ['\n  font-size: 16px;\n  line-height: 16px;\n  padding-left: 16px;\n'],
    ['\n  font-size: 16px;\n  line-height: 16px;\n  padding-left: 16px;\n']
  ),
  _templateObject5 = _taggedTemplateLiteralLoose(
    [
      '\n  padding-top: 2px;\n  font-size: 10px;\n  line-height: 10px;\n  padding-left: 16px;\n',
    ],
    [
      '\n  padding-top: 2px;\n  font-size: 10px;\n  line-height: 10px;\n  padding-left: 16px;\n',
    ]
  ),
  _templateObject6 = _taggedTemplateLiteralLoose(
    [
      '\n  flex: 0;\n  cursor: pointer;\n  height: 28px;\n  color: ',
      ';\n  padding: 2px;\n  &:hover {\n    background: rgba(255, 255, 255, 0.24);\n  }\n',
    ],
    [
      '\n  flex: 0;\n  cursor: pointer;\n  height: 28px;\n  color: ',
      ';\n  padding: 2px;\n  &:hover {\n    background: rgba(255, 255, 255, 0.24);\n  }\n',
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
import Paper from '@material-ui/core/Paper';
import Fullscreen from '@material-ui/icons/Fullscreen';
import FullscreenExit from '@material-ui/icons/FullscreenExit';
import Close from '@material-ui/icons/Close';
import Chat from '@material-ui/icons/Chat';
import styled from 'styled-components';
import {
  hideWindow as _hideWindow,
  showFullscreen as _showFullscreen,
  showWindowed as _showWindowed,
} from './actions/initialization';

var Container = styled(Paper)(
  _templateObject,
  function(p) {
    return p.theme.palette.primary.dark;
  },
  function(p) {
    return p.theme.palette.getContrastText(p.theme.palette.primary.dark);
  }
);

var HeaderImage = styled.div(_templateObject2);

var HeaderText = styled.div(_templateObject3);

var PrimaryHeaderText = styled.div(_templateObject4);

var SecondaryHeaderText = styled.div(_templateObject5);

var HeaderButton = styled.div(_templateObject6, function(p) {
  return p.theme.palette.getContrastText(p.theme.palette.primary.dark);
});

var Header = (function(_PureComponent) {
  _inherits(Header, _PureComponent);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(
      this,
      _PureComponent.apply(this, arguments)
    );
  }

  Header.prototype.render = function render() {
    var _props = this.props,
      title = _props.title,
      timestamp = _props.timestamp,
      theme = _props.theme,
      hideWindow = _props.hideWindow,
      showWindowed = _props.showWindowed,
      showFullscreen = _props.showFullscreen,
      fullscreen = _props.fullscreen;

    return React.createElement(
      Container,
      { elevation: 3, theme: theme },
      React.createElement(HeaderImage, null, React.createElement(Chat, null)),
      React.createElement(
        HeaderText,
        null,
        React.createElement(PrimaryHeaderText, null, title),
        React.createElement(SecondaryHeaderText, null, 'Active ', timestamp)
      ),
      fullscreen
        ? React.createElement(
            HeaderButton,
            { theme: theme, onClick: showWindowed },
            React.createElement(FullscreenExit, null)
          )
        : React.createElement(
            HeaderButton,
            { theme: theme, onClick: showFullscreen },
            React.createElement(Fullscreen, null)
          ),
      React.createElement(
        HeaderButton,
        { theme: theme, onClick: hideWindow },
        React.createElement(Close, null)
      )
    );
  };

  return Header;
})(PureComponent);

var mapStateToProps = function mapStateToProps(state) {
  return {
    title: state.config.title,
    timestamp: state.conversation.headerTime,
    theme: state.config.theme,
    fullscreen: state.config.fullscreen,
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    hideWindow: function hideWindow() {
      dispatch(_hideWindow());
    },
    showFullscreen: function showFullscreen() {
      dispatch(_showFullscreen());
    },
    showWindowed: function showWindowed() {
      dispatch(_showWindowed());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
