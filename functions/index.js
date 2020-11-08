const functions = require('firebase-functions');

const express = require('express');
const app = express();
const cors= require('cors');
const bodyParser = require('body-parser');
const scheduleHelper = require('./scheduleHelper')
const notificationRouter = require('./routes/notification');
const tokenRouter = require('./routes/token')
const maptt = require('./maptt')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/',notificationRouter)
app.use('/token',tokenRouter)

var tt=[]
tt = maptt('ICE');
console.log(tt)

// tt.forEach((c)=>{
//     cron.schedule(`${c.time}**${c.day}`, scheduleHelper('class',c.link)
// ); 
// }
// );
 
// setInterval(function () {
//     cron.schedule("*/60 * * * * *", scheduleHelper('from api','every 10 sec'));
//   }, 100)
exports.api = functions.https.onRequest(app);
