const functions = require('firebase-functions');
const express = require('express');
const app = express();
const cors= require('cors');
const bodyParser = require('body-parser');

const notificationRouter = require('./routes/notification');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/',notificationRouter)


exports.api = functions.https.onRequest(app);
