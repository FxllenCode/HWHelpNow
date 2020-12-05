const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyDJbtVAA3u9sPmrFjEximfNQ0LQ89_FYlU',
  authDomain: 'hwhelp.firebaseapp.com',
  projectId: 'hwhelp'
  
});

var db = firebase.firestore();
db.collection("users").add({
  first: "Ada",
  last: "Lovelace",
  born: 1815
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});
