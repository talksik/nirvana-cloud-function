import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello no!", {structuredData: true});
  response.send("Hello from woahhhhhh!");
});

// exports.agoraToken = functions.https.onCall((data, context) => {
//   console.log(data);

//   console.log("user's id: " + context.auth?.uid);
//   const channelName = data.channelName;

//   let token = agora.getAgoraToken(channelName);

//   return { token };
// });
