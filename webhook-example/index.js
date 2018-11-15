const functions = require('firebase-functions')
const {
  WebhookClient,
  Card,
  Suggestion,
  Payload
} = require('dialogflow-fulfillment')

process.env.DEBUG = 'dialogflow:debug' // enables lib debugging statements

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(
  (request, response) => {
    if (request.body.result.metadata.intentName === 'payload') {
      payload()
      return
    }

    const agent = new WebhookClient({ request, response })
    console.log(
      'Dialogflow Request headers: ' + JSON.stringify(request.headers)
    )
    console.log('Dialogflow Request body: ' + JSON.stringify(request.body))

    function welcome(agent) {
      agent.add(`Welcome to my agent!`)
    }

    function fallback(agent) {
      agent.add(`I didn't understand`)
      agent.add(`I'm sorry, can you try again?`)
    }

    // Uncomment and edit to make your own intent handler
    // uncomment `intentMap.set('your intent name here', yourFunctionHandler);`
    // below to get this funciton to be run when a Dialogflow intent is matched
    function yourFunctionHandler(agent) {
      console.log('inside custom function handler')
      agent.add(
        `This message is from Dialogflow's Cloud Functions for Firebase editor!`
      )
      agent.add(
        new Card({
          title: `Title: this is a card title`,
          imageUrl:
            'https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png',
          text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
          buttonText: 'This is a button',
          buttonUrl: 'https://assistant.google.com/'
        })
      )
      agent.add(new Suggestion(`Quick Reply`))
      agent.add(new Suggestion(`Suggestion`))
      agent.setContext({
        name: 'weather',
        lifespan: 2,
        parameters: { city: 'Rome' }
      })
    }

    function payload(agent) {
      const payload = {
        messages: [
          {
            payload: {
              test: 'value'
            },
            type: 4
          },
          {
            speech: 'test text',
            type: 0
          }
        ]
      }
      response.send(payload)
    }

    // Run the proper function handler based on the matched Dialogflow intent name
    let intentMap = new Map()
    intentMap.set('Default Welcome Intent', welcome)
    intentMap.set('Default Fallback Intent', fallback)
    intentMap.set('custom intent', yourFunctionHandler)
    intentMap.set('payload', payload)
    agent.handleRequest(intentMap)
  }
)