const admin = require('firebase-admin')
const db = admin.firestore()
const settings = { timestampsInSnapshots: true }
db.settings(settings)

async function logRequest(userRequest) {
  try {
    console.log('started')
    db.collection('interactions').add(userRequest)
    const docRef = admin
      .firestore()
      .collection('analytics')
      .doc('summaryData')

    const doc = db.runTransaction(t => t.get(docRef))
    let newTotalNumInteractions = 1
    let newUserSays = {}
    let newIntentsList = {}

    console.log(doc)
    if (doc.exists && typeof doc.data().totalNumInteractions !== 'undefined') {
      newTotalNumInteractions = doc.data().totalNumInteractions + 1
    }
    // if (doc.exists && typeof doc.data().userSays !== 'undefined') {
    //   newUserSays = doc.data().userSays
    // }
    // if (doc.exists && typeof doc.data().intents !== 'undefined') {
    //   newIntentsList = doc.data().userSays
    // }

    await doc.ref.set(
      {
        totalNumInteractions: newTotalNumInteractions,
        userSays: userRequest.userSays,
        intent: userRequest.intent,
      },
      { merge: true }
    )
  } catch (err) {
    console.error(err)
  }
}

module.exports = logRequest
