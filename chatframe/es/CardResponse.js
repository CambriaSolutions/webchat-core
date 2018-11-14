var _templateObject = _taggedTemplateLiteralLoose(
    ['\n  && {\n    margin: 16px auto;\n    white-space: pre-line;\n  }\n'],
    ['\n  && {\n    margin: 16px auto;\n    white-space: pre-line;\n  }\n']
  ),
  _templateObject2 = _taggedTemplateLiteralLoose(
    [
      '\n  && {\n    height: ',
      ';\n    background-size: cover;\n    background-position: center center;\n  }\n',
    ],
    [
      '\n  && {\n    height: ',
      ';\n    background-size: cover;\n    background-position: center center;\n  }\n',
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
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { format } from 'date-fns';

var CardContainer = styled(Card)(_templateObject);

var CardImage = styled(CardMedia)(_templateObject2, function(p) {
  return p.image && p.image !== '' ? '200px' : '0px';
});

var CardResponse = (function(_PureComponent) {
  _inherits(CardResponse, _PureComponent);

  function CardResponse() {
    _classCallCheck(this, CardResponse);

    return _possibleConstructorReturn(
      this,
      _PureComponent.apply(this, arguments)
    );
  }

  CardResponse.prototype.render = function render() {
    var _props$data = this.props.data,
      title = _props$data.title,
      subtitle = _props$data.subtitle,
      imageUrl = _props$data.imageUrl,
      buttons = _props$data.buttons;

    return React.createElement(
      CardContainer,
      null,
      React.createElement(CardImage, { image: encodeURI(imageUrl), title: '' }),
      React.createElement(
        CardContent,
        null,
        React.createElement(
          Typography,
          { gutterBottom: true, variant: 'headline', component: 'h2' },
          title
        ),
        React.createElement(Typography, { component: 'p' }, subtitle)
      ),
      React.createElement(
        CardActions,
        null,
        buttons.map(function(b, index) {
          return React.createElement(
            Button,
            {
              href: b.postback,
              target: '_blank',
              size: 'small',
              color: 'primary',
              key: 'card-' + index + format(new date(), 'MMDDYYYYhhmmssSSS'),
            },
            b.text
          );
        })
      )
    );
  };

  return CardResponse;
})(PureComponent);

var mapStateToProps = function mapStateToProps(state) {
  return {
    inputValue: state.userInput,
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    saveUserInput: function saveUserInput(e) {},
    submitUserInput: function submitUserInput() {},
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardResponse);
