var admin = require("firebase-admin");

var serviceAccount = require("./sahpathi-14655-firebase-adminsdk-sc4gl-53d19d3629.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sahpathi-14655.firebaseio.com"
})
const db =admin.firestore();
const apiUrl=null;

const registrationToken= function(){
  db.collection('tokens').orderBy('createdAt','desc').get().then(data=>{
    return data[0]
}).catch(err=>{
    console.log(err)
})
};
module.exports.registrationtoken = registrationToken
module.exports.apiurl = apiUrl
module.exports.admin = admin