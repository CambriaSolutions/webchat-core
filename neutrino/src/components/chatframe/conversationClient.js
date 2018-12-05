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
  }

  encodeQueryData(data) {
    const params = []
    for (const d in data) {
      params.push(`${encodeURIComponent(d)}=${encodeURIComponent(data[d])}`)
    }
    return params.join('&')
  }

  textRequest(query) {
    if (!query) {
      throw new Error('Query should not be empty')
    }
    const params = {
      query,
    }

    const queryParams = this.encodeQueryData(params)
    const url = `${this.textUrl}?${queryParams}`

    return fetch(url)
      .then(response => {
        return response.json()
      })
      .catch(err => {
        throw new Error(err)
      })
  }

  eventRequest(query) {
    if (!query) {
      throw new Error('Query should not be empty')
    }

    const params = {
      query,
    }

    const queryParams = this.encodeQueryData(params)
    const url = `${this.eventUrl}?${queryParams}`

    return fetch(url)
      .then(response => {
        return response.json()
      })
      .catch(err => {
        throw new Error(err)
      })
  }
}
