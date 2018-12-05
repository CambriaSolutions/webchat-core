const functions = require('firebase-functions')
const { WebhookClient } = require('dialogflow-fulfillment')
const {
  Text,
  Card,
  Image,
  Suggestion,
  Payload
} = require('dialogflow-fulfillment')

// const admin = require('firebase-admin')
// const db = admin.firestore()
// const settings = { timestampsInSnapshots: true }
// db.settings(settings)

// Wikipedia link and image URLs
const wikipediaTemperatureUrl = 'https://en.wikipedia.org/wiki/Temperature'
const wikipediaTemperatureImageUrl =
  'https://upload.wikimedia.org/wikipedia/commons/2/23/Thermally_Agitated_Molecule.gif'
const wikipediaCelsiusUrl = 'https://en.wikipedia.org/wiki/Celsius'
const wikipediaCelsiusImageUrl =
  'https://upload.wikimedia.org/wikipedia/commons/a/ad/Celsius_original_thermometer.png'
const wikipediaFahrenheitUrl = 'https://en.wikipedia.org/wiki/Fahrenheit'
const wikipediaFahrenheitImageUrl =
  'https://upload.wikimedia.org/wikipedia/commons/b/bd/Fahrenheit_small.jpg'
const wikipediaKelvinUrl = 'https://en.wikipedia.org/wiki/Kelvin'
const wikipediaKelvinImageUrl =
  'https://upload.wikimedia.org/wikipedia/commons/a/a0/Lord_Kelvin_photograph.jpg'
const wikipediaRankineUrl = 'https://en.wikipedia.org/wiki/Rankine_scale'
const wikipediaRankineImageUrl =
  'https://upload.wikimedia.org/wikipedia/commons/5/58/Rankine_William_signature.jpg'

exports = module.exports = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response })

  function welcome(agent) {
    agent.add(`Welcome to my agent!`)
  }

  // User says = multiple
  function multipleResponses(agent) {
    agent.add(`These`)
    agent.add(`Are`)
    agent.add(`Multiple`)
    agent.add(`Responses`)
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
        buttonUrl: wikipediaTemperatureUrl
      })
    )
  }

  // User says = image
  function imageResponse(agent) {
    agent.add(new Image(wikipediaKelvinImageUrl))
  }

  let intentMap = new Map()
  intentMap.set('Default Welcome Intent', welcome)
  intentMap.set('multipleResponses', multipleResponses)
  intentMap.set('cardResponse', cardResponse)
  intentMap.set('imageResponse', imageResponse)

  agent.handleRequest(intentMap)
})
