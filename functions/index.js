const functions = require('firebase-functions');
const express = require('express');
const app = express();
const cors= require('cors');
const bodyParser = require('body-parser');
const cron = require("node-cron"); 
const scheduleHelper = require('./scheduleHelper')
const notificationRouter = require('./routes/notification');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/',notificationRouter)

cron.schedule("*/10 * * * * *", scheduleHelper
}); 

exports.api = functions.https.onRequest(app);
