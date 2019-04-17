import uuidv4 from 'uuid/v4'

const fetchRetry = (url, n) =>
  fetch(url)
    .then(response => {
      return response.json()
    })
    .catch(error => {
      if (n === 1) throw error
      return fetchRetry(url, n - 1)
    })

export class Client {
  constructor(options) {
    if (!options || !options.textUrl) {
      throw new Error(
        'Fulfillment URL is required to generate a conversation client'
      )
    }
    this.textUrl = options.textUrl
    this.eventUrl = options.eventUrl
    this.uuid = uuidv4()
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
      uuid: this.uuid,
    }

    const queryParams = this.encodeQueryData(params)
    const url = `${this.textUrl}?${queryParams}`

    return fetchRetry(url, 2)
  }

  eventRequest(query) {
    if (!query) {
      throw new Error('Query should not be empty')
    }

    const params = {
      query,
      uuid: this.uuid,
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
