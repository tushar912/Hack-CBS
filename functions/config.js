var admin = require("firebase-admin");

var serviceAccount = require("./julla-tutorial.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sample-project-e1a84.firebaseio.com"
})
const apiUrl;
const registrationToken;
module.exports.registrationToken = registrationToken
module.exports.apiUrl = apiUrl
module.exports.admin = admin