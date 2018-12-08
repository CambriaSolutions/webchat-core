const functions = require('firebase-functions')
const { WebhookClient } = require('dialogflow-fulfillment')
const {
  Text,
  Card,
  Image,
  Suggestion,
  Payload,
} = require('dialogflow-fulfillment')
const logRequest = require('./logRequest.js')

// Examples taken from https://github.com/dialogflow/dialogflow-fulfillment-nodejs

// Wikipedia link and image URLs
const wikipediaTemperatureUrl = 'https://en.wikipedia.org/wiki/Temperature'
const wikipediaTemperatureImageUrl =
  'https://upload.wikimedia.org/wikipedia/commons/2/23/Thermally_Agitated_Molecule.gif'
const wikipediaKelvinImageUrl =
  'https://upload.wikimedia.org/wikipedia/commons/a/a0/Lord_Kelvin_photograph.jpg'

exports = module.exports = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response })
  const intent = request.body.queryResult.intent.displayName
  const userSays = request.body.queryResult.queryText
  const userRequest = { intent, userSays }

  function welcome(agent) {
    agent.add(`Welcome to my agent!`)
  }

  // User says = multiple
  async function multipleResponses(agent) {
    try {
      await logRequest(userRequest)
      agent.add(`These`)
      agent.add(`Are`)
      agent.add(`Multiple`)
      agent.add(`Responses`)
    } catch (err) {
      console.error(err)
    }
  }

  // User says = card
  function cardResponse(agent) {
    agent.add(
      new Card({
        title: 'Vibrating molecules',
        imageUrl: wikipediaTemperatureImageUrl,
        text:
          'Did you know that temperature is really just a measure of how fast molecules are vibrating around?! 😱',
        buttonText: 'Temperature Wikipedia Page',
        buttonUrl: wikipediaTemperatureUrl,
      })
    )
  }

  // User says = image
  function imageResponse(agent) {
    agent.add(new Image(wikipediaKelvinImageUrl))
  }

  // User says = suggestions or chips
  function suggestionsResponse(agent) {
    agent.add(`These are suggestions`)
    agent.add(new Suggestion(`No`))
    agent.add(new Suggestion(`Yes`))
  }

  // User says = text
  function textResponse(agent) {
    agent.add(new Text('This is text'))
  }

  // User says = payload
  function payloadResponse(agent) {
    agent.add(
      new Payload(
        agent.UNSPECIFIED,
        { test: 'this' },
        { sendAsMessage: true, rawPayload: true }
      )
    )
  }

  // User says = context
  function contextSetting(agent) {
    agent.add(`Context set for welcome intent`)
    agent.setContext({
      name: 'waiting-context-setting',
      lifespan: 2,
    })
  }

  let intentMap = new Map()
  intentMap.set('Default Welcome Intent', welcome)
  intentMap.set('multipleResponses', multipleResponses)
  intentMap.set('cardResponse', cardResponse)
  intentMap.set('imageResponse', imageResponse)
  intentMap.set('suggestionsResponse', suggestionsResponse)
  intentMap.set('textResponse', textResponse)
  intentMap.set('payloadResponse', payloadResponse)
  intentMap.set('contextSetting', contextSetting)

  agent.handleRequest(intentMap)
})
