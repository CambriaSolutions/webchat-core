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
  const language = request.body.queryResult.languageCode
  const userSays = request.body.queryResult.queryText
  const userRequest = { intent, userSays, language }

  // Run analytics on the incoming request
  logRequest(userRequest)

  async function welcome(agent) {
    try {
      await agent.add(`Welcome to my agent!`)
    } catch (err) {
      console.error(err)
    }
  }

  async function fallbackIntent(agent) {
    try {
      await agent.add(`Sorry I didn't get that.`)
    } catch (err) {
      console.error(err)
    }
  }

  // User says = multiple
  async function multipleResponses(agent) {
    try {
      await agent.add(`These`)
      await agent.add(`Are`)
      await agent.add(`Multiple`)
      await agent.add(`Responses`)
    } catch (err) {
      console.error(err)
    }
  }

  // User says = card
  async function cardResponse(agent) {
    try {
      await agent.add(
        new Card({
          title: 'Vibrating molecules',
          imageUrl: wikipediaTemperatureImageUrl,
          text:
            'Did you know that temperature is really just a measure of how fast molecules are vibrating around?! 😱',
          buttonText: 'Temperature Wikipedia Page',
          buttonUrl: wikipediaTemperatureUrl,
        })
      )
    } catch (err) {
      console.error(err)
    }
  }

  // User says = image
  async function imageResponse(agent) {
    try {
      await agent.add(new Image(wikipediaKelvinImageUrl))
    } catch (err) {
      console.error(err)
    }
  }

  // User says = suggestions or chips
  async function suggestionsResponse(agent) {
    try {
      await agent.add(`These are suggestions`)
      await agent.add(new Suggestion(`No`))
      await agent.add(new Suggestion(`Yes`))
    } catch (err) {
      console.error(err)
    }
  }

  // User says = text
  async function textResponse(agent) {
    try {
      await agent.add(new Text('This is text'))
    } catch (err) {
      console.error(err)
    }
  }

  // User says = payload
  async function payloadResponse(agent) {
    try {
      await agent.add(
        new Payload(
          agent.UNSPECIFIED,
          { test: 'this' },
          { sendAsMessage: true, rawPayload: true }
        )
      )
    } catch (err) {
      console.error(err)
    }
  }

  // User says = context
  async function contextSetting(agent) {
    try {
      await agent.add(`Context set for welcome intent`)
      await agent.setContext({
        name: 'waiting-context-setting',
        lifespan: 2,
      })
    } catch (err) {
      console.error(err)
    }
  }

  let intentMap = new Map()
  intentMap.set('Default Welcome Intent', welcome)
  intentMap.set('Default Fallback Intent', fallbackIntent)
  intentMap.set('multipleResponses', multipleResponses)
  intentMap.set('cardResponse', cardResponse)
  intentMap.set('imageResponse', imageResponse)
  intentMap.set('suggestionsResponse', suggestionsResponse)
  intentMap.set('textResponse', textResponse)
  intentMap.set('payloadResponse', payloadResponse)
  intentMap.set('contextSetting', contextSetting)

  agent.handleRequest(intentMap)
})
