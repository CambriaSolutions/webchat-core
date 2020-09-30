import uuidv4 from 'uuid/v4'

const constructEmptyResponse = (response) => ({
  ...response,
  queryResult: {
    ...response.queryResult,
    fulfillmentMessages: [{
      message: '',
      platform: 'PLATFORM_UNSPECIFIED',
      text: {
        text: ['']
      }
    }],
    fulfillmentText: ''
  }
})

// Code 0 === Webhook execution successful
// Code 4 === Webhook call failed. Error: DEADLINE_EXCEEDED.
// Code 14 === Webhook call failed. Error: UNAVAILABLE.
async function fetchIntent(url) {
  try {
    // Make the first attempt to fetch intent
    console.log('*** Request 1 ***')
    const req1 = await fetch(url)
    const response1 = await req1.json()

    console.log('response1', response1)

    // If response timed out, try again
    if (response1.webhookStatus.code === 4) {
      console.log('*** Request 2 ***')
      const req2 = await fetch(url)
      const response2 = await req2.json()


      // If the second response timed out, try one last time
      if (response2.webhookStatus.code === 4) {
        console.log('*** Request 3 ***')
        const req3 = await fetch(url)
        const response3 = await req3.json()

        // The request has failed three times in a row. Something is wrong.
        if (response3.webhookStatus.code !== 0) {
          // return a response that indicates there is an issue.
          return constructEmptyResponse(response3)
        }

        // Request 3 was successful. Return response.
        return response3

        // If the second request had an error other than timeout,
        // then we will not retry. Return error message.
      } else if (response2.webhookStatus.code !== 0) {
        // return a response that indicates there is an issue.
        return constructEmptyResponse(response2)
      }

      // Request 2 was successful. Return response.
      return response2

      // If the first request had an error other than timeout,
      // then we will not retry. Return error message.
    } else if (response1.webhookStatus.code !== 0) {
      // return a response that indicates there is an issue.
      return constructEmptyResponse(response1)
    }

    // Request 1 was successful. Return response.
    return response1
  } catch (e) {
    console.error(e)
    return {}
  }
}

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

  async textRequest(query) {
    if (!query) {
      throw new Error('Query should not be empty')
    }
    const params = {
      query,
      uuid: this.uuid,
    }

    const queryParams = this.encodeQueryData(params)
    const url = `${this.textUrl}?${queryParams}`
    return fetchIntent(url)
  }

  async eventRequest(query) {
    if (!query) {
      throw new Error('Query should not be empty')
    }

    const params = {
      query,
      uuid: this.uuid,
    }

    const queryParams = this.encodeQueryData(params)
    const url = `${this.eventUrl}?${queryParams}`

    return fetchIntent(url)
  }
}
