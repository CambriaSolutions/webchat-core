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

import * as t from '../actions/actionTypes';
import {
  parse,
  format,
  differenceInMinutes,
  differenceInSeconds,
  differenceInMilliseconds,
} from 'date-fns';
import { sysTimeFormat } from '../config/dateFormats';

var initialState = {
  client: null,
  clientName: null,
  messages: [],
  webhookPayload: null,
  lastUpdateTime: format(new Date(), sysTimeFormat),
  currentTime: format(new Date(), sysTimeFormat),
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
      var lastUpdate = parse(
        state.lastUpdateTime,
        sysTimeFormat,
        new Date(state.lastUpdateTime)
      );
      var diffMinutes = differenceInMinutes(now, lastUpdate);
      var diffSeconds = differenceInSeconds(now, lastUpdate);
      var headerTime = 'Now';
      if (diffMinutes >= 1) {
        headerTime = diffMinutes + ' min ago';
      } else if (diffSeconds >= 9) {
        headerTime = diffSeconds + ' sec ago';
      }

      return _extends({}, state, {
        headerTime: headerTime,
        currentTime: format(now, sysTimeFormat),
      });

    case t.TIMER_START:
      return _extends({}, state, {
        timer: action.timer,
      });

    case t.INITIATE_LOADING:
      var newMessage = {
        loading: true,
        entity: 'bot',
        systemTime: format(new Date(), sysTimeFormat),
      };
      return _extends({}, state, {
        messages: [].concat(state.messages, [newMessage]),
      });

    case t.SAVE_RESPONSE:
      var newArray = state.messages.map(function(msg, index) {
        return msg.loading ? action.data : msg;
      });
      return _extends({}, state, {
        lastUpdateTime: format(new Date(), sysTimeFormat),
        headerTime: 'Now',
        messages: newArray.sort(function(a, b) {
          var dateA = parse(
            a.systemTime,
            sysTimeFormat,
            new Date(a.systemTime)
          );
          var dateB = parse(
            b.systemTime,
            sysTimeFormat,
            new Date(b.systemTime)
          );
          var diff = differenceInMilliseconds(dateA, dateB);
          return diff;
        }),
      });

    case t.SAVE_USER_RESPONSE:
      return _extends({}, state, {
        lastUpdateTime: format(new Date(), sysTimeFormat),
        headerTime: 'Now',
        messages: []
          .concat(state.messages, [action.response])
          .sort(function(a, b) {
            var dateA = parse(
              a.systemTime,
              sysTimeFormat,
              new Date(a.systemTime)
            );
            var dateB = parse(
              b.systemTime,
              sysTimeFormat,
              new Date(b.systemTime)
            );
            var diff = differenceInMilliseconds(dateB, dateA);
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

export default conversation;
