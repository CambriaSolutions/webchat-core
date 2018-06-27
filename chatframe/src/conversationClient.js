export class Client {
  constructor(options) {
    if (!options || !options.textUrl) {
      throw new Error(
        'Fulfillment URL is required to generate a conversation client'
      )
    }
    this.textUrl = options.textUrl
    this.eventUrl = options.eventUrl
    this.apiKey = options.apiKey
  }

  textRequest(query) {
    if (!query) {
      throw new Error('Query should not be empty')
    }
    const options = {
      uri: this.textUrl,
      qs: {
        'x-api-key': this.apiKey,
      },
      json: true,
    }

    let url = new URL(this.textUrl)
    const params = {
      query: query,
      ['x-api-key']: this.apiKey,
    }
    Object.keys(params).forEach(key =>
      url.searchParams.append(key, params[key])
    )
    return fetch(url).then(response => {
      return response.json()
    })
  }

  eventRequest(query) {
    if (!query) {
      throw new Error('Query should not be empty')
    }
    const options = {
      uri: this.eventUrl,
      qs: {
        'x-api-key': this.apiKey,
      },
      json: true,
    }

    let url = new URL(this.eventUrl)
    const params = {
      query: query,
      ['x-api-key']: this.apiKey,
    }
    Object.keys(params).forEach(key =>
      url.searchParams.append(key, params[key])
    )
    return fetch(url).then(response => {
      return response.json()
    })
  }
}