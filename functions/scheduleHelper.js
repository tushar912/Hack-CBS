const {apiUrl ,registrationToken} = require('./config')
const axios = require('axios');
const {apiUrl,registrationToken} = require('./config')

const message_notification = {
    notification: {
       title: enter_subject_of_notification_here,
       body: enter_message_here
           }
    };
const payload = {
    message:message_notification,
    registrationToken:registrationToken
}
scheduleHelper = function(){
    axios.post(apiUrl,payload)
    .then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = scheduleHelper;