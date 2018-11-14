var _templateObject = _taggedTemplateLiteralLoose(
  ['\n    @media (max-width: ', 'em) {\n      ', ';\n    }\n  '],
  ['\n    @media (max-width: ', 'em) {\n      ', ';\n    }\n  ']
);

function _taggedTemplateLiteralLoose(strings, raw) {
  strings.raw = raw;
  return strings;
}

import { css } from 'styled-components';

var sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 620,

  // iterate through the sizes and create a media template
};
export var media = Object.keys(sizes).reduce(function(accumulator, label) {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  var emSize = sizes[label] / 16;
  accumulator[label] = function() {
    return css(_templateObject, emSize, css.apply(undefined, arguments));
  };
  return accumulator;
}, {});
