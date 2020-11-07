var admin = require("firebase-admin");

var serviceAccount = require("./sahpathi-14655-firebase-adminsdk-sc4gl-53d19d3629.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sahpathi-14655.firebaseio.com"
})
const apiUrl;

const registrationToken= function(){
  db.collection('tokens').get().then(data=>{
    return data[0]
}).catch(err=>{
    console.log(err)
})
};
module.exports.registrationToken = registrationToken
module.exports.apiUrl = apiUrl
module.exports.admin = admin