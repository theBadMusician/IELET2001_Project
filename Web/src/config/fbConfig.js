import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyB34Q-ZtPNxtgnDv1r9uNX1eBMx08gh8aE",
    authDomain: "mcuniversity-543e3.firebaseapp.com",
    databaseURL: "https://mcuniversity-543e3.firebaseio.com",
    projectId: "mcuniversity-543e3",
    storageBucket: "mcuniversity-543e3.appspot.com",
    messagingSenderId: "178428471211",
    appId: "1:178428471211:web:5b1806be76202ce630d4ee",
    measurementId: "G-S1YW4TXFC5"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;