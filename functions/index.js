const functions = require('firebase-functions');
const admin = require('firebase-admin');

var express = require('express');
const app = express();

admin.initializeApp();

app.get('/', (req, res) => res.send('Hello World!'));

exports.helloworld = functions.https.onRequest(app);

const agora = require('./agora');
exports.agoraToken = functions.https.onCall((data, context) => {
  console.log(data);

  console.log("user's id: " + context.auth.uid);
  const channelName = data.channelName;

  let token = agora.getAgoraToken(channelName);

  return { token };
});
