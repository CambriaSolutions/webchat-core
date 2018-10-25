import 'isomorphic-fetch'

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

  encodeQueryData(data) {
    const ret = []
    for (let d in data)
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]))
    return ret.join('&')
  }

  textRequest(query) {
    if (!query) {
      throw new Error('Query should not be empty')
    }
    const params = {
      query: query,
    }
    if (this.apiKey) {
      params['x-api-key'] = this.apiKey
    }

    let url = this.textUrl
    const queryParams = this.encodeQueryData(params)
    url = url + '?' + queryParams

    return fetch(url)
      .then(response => {
        return response.json()
      })
      .catch(err => {
        console.log(err)
      })
  }

  eventRequest(query) {
    if (!query) {
      throw new Error('Query should not be empty')
    }

    const params = {
      query: query,
    }

    let url = this.eventUrl
    const queryParams = this.encodeQueryData(params)
    url = url + '?' + queryParams

    return fetch(url)
      .then(response => {
        return response.json()
      })
      .catch(err => {
        console.log(err)
      })
  }
}
