const {apiUrl ,registrationToken} = require('./config')
const axios = require('axios');
const { apiurl,registrationtoken} = require('./config')


scheduleHelper = function(title,body){
    const message_notification = {
        notification: {
           title: title,
           body:body
               }
        };
    const payload = {
        message:message_notification,
        registrationToken:"fMFPdH5-Rsm9b2j4b2qAhT:APA91bE43ikzcxwFPcbqSHXDHgtqxvdMUgFRM0TfkY5G_xTIBu04p2dsz5jpHNPsLtRRDuhD3JAPCZ45ImgdlkC4SutWIDv_plTz7zqfgB5mWAccLMOCHe3TAwQPrUg7R0JvdHS8E5lr"

    }
    axios.post(apiurl,payload)
    .then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = scheduleHelper;