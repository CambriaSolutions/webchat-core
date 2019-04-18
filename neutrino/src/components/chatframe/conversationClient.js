import uuidv4 from 'uuid/v4'

const fetchRetry = async (url, n) => {
  console.log(n)
  const message = await fetch(url)
    .then(response => {
      console.log('inside response')
      return response.json()
    })
    .catch(error => {
      //
      console.log(error)
      if (n === 1) throw error
      setTimeout(() => {
        fetchRetry(url, n - 1)
      }, 1000)
    })
  console.log('retry ran')
  return message
}

// const fetchRetry = async (url, n) => {
//   try {
//     return await fetch(url)
//   } catch (err) {
//     if (n === 1) throw err
//     return await fetchRetry(url, n - 1)
//   }
// }

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

  textRequest = async query => {
    if (!query) {
      throw new Error('Query should not be empty')
    }
    const params = {
      query,
      uuid: this.uuid,
    }

    const queryParams = this.encodeQueryData(params)
    const url = `${this.textUrl}?${queryParams}`

    const response = await fetchRetry(url, 2)
    console.log('this thing ran')
    return response
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
