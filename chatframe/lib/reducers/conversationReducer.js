'use strict';

exports.__esModule = true;

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

var _actionTypes = require('../actions/actionTypes');

var t = _interopRequireWildcard(_actionTypes);

var _dateFns = require('date-fns');

var _dateFormats = require('../config/dateFormats');

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          newObj[key] = obj[key];
      }
    }
    newObj.default = obj;
    return newObj;
  }
}

var initialState = {
  client: null,
  clientName: null,
  messages: [],
  webhookPayload: null,
  lastUpdateTime: (0, _dateFns.format)(new Date(), _dateFormats.sysTimeFormat),
  currentTime: (0, _dateFns.format)(new Date(), _dateFormats.sysTimeFormat),
  headerTime: 'Now',
  timer: null,
};
function conversation() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : initialState;
  var action = arguments[1];

  switch (action.type) {
    case t.SAVE_CLIENT:
      return _extends({}, state, {
        client: action.client,
        clientName: action.clientName,
      });

    case t.UPDATE_CURRENT_TIME:
      var now = new Date();
      var lastUpdate = (0, _dateFns.parse)(
        state.lastUpdateTime,
        _dateFormats.sysTimeFormat,
        new Date(state.lastUpdateTime)
      );
      var diffMinutes = (0, _dateFns.differenceInMinutes)(now, lastUpdate);
      var diffSeconds = (0, _dateFns.differenceInSeconds)(now, lastUpdate);
      var headerTime = 'Now';
      if (diffMinutes >= 1) {
        headerTime = diffMinutes + ' min ago';
      } else if (diffSeconds >= 9) {
        headerTime = diffSeconds + ' sec ago';
      }

      return _extends({}, state, {
        headerTime: headerTime,
        currentTime: (0, _dateFns.format)(now, _dateFormats.sysTimeFormat),
      });

    case t.TIMER_START:
      return _extends({}, state, {
        timer: action.timer,
      });

    case t.INITIATE_LOADING:
      var newMessage = {
        loading: true,
        entity: 'bot',
        systemTime: (0, _dateFns.format)(
          new Date(),
          _dateFormats.sysTimeFormat
        ),
      };
      return _extends({}, state, {
        messages: [].concat(state.messages, [newMessage]),
      });

    case t.SAVE_RESPONSE:
      var newArray = state.messages.map(function(msg, index) {
        return msg.loading ? action.data : msg;
      });
      return _extends({}, state, {
        lastUpdateTime: (0, _dateFns.format)(
          new Date(),
          _dateFormats.sysTimeFormat
        ),
        headerTime: 'Now',
        messages: newArray.sort(function(a, b) {
          var dateA = (0, _dateFns.parse)(
            a.systemTime,
            _dateFormats.sysTimeFormat,
            new Date(a.systemTime)
          );
          var dateB = (0, _dateFns.parse)(
            b.systemTime,
            _dateFormats.sysTimeFormat,
            new Date(b.systemTime)
          );
          var diff = (0, _dateFns.differenceInMilliseconds)(dateA, dateB);
          return diff;
        }),
      });

    case t.SAVE_USER_RESPONSE:
      return _extends({}, state, {
        lastUpdateTime: (0, _dateFns.format)(
          new Date(),
          _dateFormats.sysTimeFormat
        ),
        headerTime: 'Now',
        messages: []
          .concat(state.messages, [action.response])
          .sort(function(a, b) {
            var dateA = (0, _dateFns.parse)(
              a.systemTime,
              _dateFormats.sysTimeFormat,
              new Date(a.systemTime)
            );
            var dateB = (0, _dateFns.parse)(
              b.systemTime,
              _dateFormats.sysTimeFormat,
              new Date(b.systemTime)
            );
            var diff = (0, _dateFns.differenceInMilliseconds)(dateB, dateA);
            return diff;
          }),
      });

    case t.RECEIVE_WEBHOOK_DATA:
      return _extends({}, state, {
        webhookPayload: action.webhookPayload,
      });

    default:
      return state;
  }
}

exports.default = conversation;
module.exports = exports['default'];
