const admin = require('firebase-admin')
const db = admin.firestore()
const settings = { timestampsInSnapshots: true }
db.settings(settings)

async function logRequest(userRequest) {
  try {
    // Log the raw request and intent
    await db.collection('requests').add(userRequest)
    const rawUserSays = userRequest.userSays.toLowerCase()

    const spaceRegex = new RegExp('\\s+', 'g')
    const charactorRegex = new RegExp('[^\\w\\s+]', 'g')

    // Remove extra spaces
    const noSpaces = rawUserSays.replace(spaceRegex, ' ')
    const userSays = noSpaces.replace(charactorRegex, '')

    const intent = userRequest.intent
    const docRef = db.collection('analytics').doc('summaryData')
    const doc = await db.runTransaction(t => t.get(docRef))
    let newTotalNumRequests = 1
    let newUserSays = {}
    let newIntentCollection = {}

    newUserSays[userSays] = 1
    newIntentCollection[intent] = 1

    // Add one to the total number of requests
    if (doc.exists && typeof doc.data().totalNumRequests !== 'undefined') {
      newTotalNumRequests = doc.data().totalNumRequests + 1
    }

    // Check to see if someone has asked this question before, if so,
    // add one to count of times this has been asked
    if (doc.exists && typeof doc.data().userSays[userSays] !== 'undefined') {
      newUserSays[userSays] = doc.data().userSays[userSays] + 1
    }

    // Check to see if this intent has been hit before, if so,
    // and on to the count of times this intent has been hit
    if (
      doc.exists &&
      typeof doc.data().intentCollection[intent] !== 'undefined'
    ) {
      newIntentCollection[intent] = doc.data().intentCollection[intent] + 1
    }

    await doc.ref.set(
      {
        totalNumRequests: newTotalNumRequests,
        userSays: newUserSays,
        intentCollection: newIntentCollection,
      },
      { merge: true }
    )
  } catch (err) {
    console.error(err)
  }
}

module.exports = logRequest
