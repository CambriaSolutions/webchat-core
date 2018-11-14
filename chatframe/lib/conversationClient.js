'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var Client = (exports.Client = (function() {
  function Client(options) {
    _classCallCheck(this, Client);

    if (!options || !options.textUrl) {
      throw new Error(
        'Fulfillment URL is required to generate a conversation client'
      );
    }
    this.textUrl = options.textUrl;
    this.eventUrl = options.eventUrl;
    this.apiKey = options.apiKey;
  }

  Client.prototype.textRequest = function textRequest(query) {
    if (!query) {
      throw new Error('Query should not be empty');
    }

    var url = new URL(this.textUrl);
    var params = {
      query: query,
    };
    if (this.apiKey) {
      params['x-api-key'] = this.apiKey;
    }
    Object.keys(params).forEach(function(key) {
      return url.searchParams.append(key, params[key]);
    });
    return fetch(url).then(function(response) {
      return response.json();
    });
  };

  Client.prototype.eventRequest = function eventRequest(query) {
    if (!query) {
      throw new Error('Query should not be empty');
    }

    var url = new URL(this.eventUrl);
    var params = {
      query: query,
    };
    if (this.apiKey) {
      params['x-api-key'] = this.apiKey;
    }
    Object.keys(params).forEach(function(key) {
      return url.searchParams.append(key, params[key]);
    });
    return fetch(url).then(function(response) {
      return response.json();
    });
  };

  return Client;
})());
