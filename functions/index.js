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



setInterval(function () {
  maptt('ICE');
  }, 100)
exports.api = functions.https.onRequest(app);
