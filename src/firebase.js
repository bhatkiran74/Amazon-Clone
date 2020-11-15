import firebase from 'firebase'




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcNwk1Yp44HEotAWVTGVZ1y-iqT6mT9JA",
    authDomain: "clone-1fa6b.firebaseapp.com",
    databaseURL: "https://clone-1fa6b.firebaseio.com",
    projectId: "clone-1fa6b",
    storageBucket: "clone-1fa6b.appspot.com",
    messagingSenderId: "211456875008",
    appId: "1:211456875008:web:2740a4b0b00510914556e5",
    measurementId: "G-8K27J1XT8G"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig)  // initialze the firebase 

const db = firebaseApp.firestore()
const auth = firebase.auth()
export { db, auth }