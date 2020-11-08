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
 
<<<<<<< HEAD
// setInterval(function () {
//     cron.schedule("*/60 * * * * *", scheduleHelper('from api','every 10 sec'));
//   }, 100)
exports.api = functions.https.onRequest(app);
=======
setInterval(()=>{
    cron.schedule("*/60 * * * * *", scheduleHelper('from api','every 10 sec'));
  }, 60*1000)
exports.api = functions.https.onRequest(app);//I think this is working fine and sending nootification you just need to 
//implement the query thing to be able to send the right information to the user ----I think this is clear
>>>>>>> 254244419ee6d8fe525a89cae377bd5c03fd87ac
