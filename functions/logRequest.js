const admin = require('firebase-admin')
const db = admin.firestore()
const settings = { timestampsInSnapshots: true }
db.settings(settings)

async function logRequest(userRequest) {
  try {
    await db.collection('requests').add(userRequest)
    const userSays = userRequest.userSays.toLowerCase()
    const intent = userRequest.intent
    const docRef = db.collection('analytics').doc('summaryData')
    const doc = await db.runTransaction(t => t.get(docRef))
    let newTotalNumRequests = 1
    let newUserSays = {}
    let newIntentCollection = {}

    newUserSays[userSays] = 1
    newIntentCollection[intent] = 1

    if (doc.exists && typeof doc.data().totalNumRequests !== 'undefined') {
      newTotalNumRequests = doc.data().totalNumRequests + 1
    }

    if (doc.exists && typeof doc.data().userSays[userSays] !== 'undefined') {
      newUserSays[userSays] = doc.data().userSays[userSays] + 1
    }

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
