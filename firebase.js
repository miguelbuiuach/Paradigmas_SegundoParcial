import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyA_fccVcVIOzPXhAugrNUWXxoW09R7qveo",
    authDomain: "vue-firebase-f7996.firebaseapp.com",
    databaseURL: "https://vue-firebase-f7996.firebaseio.com",
    projectId: "vue-firebase-f7996",
    storageBucket: "vue-firebase-f7996.appspot.com",
    messagingSenderId: "235206517445",
    appId: "1:235206517445:web:b40548cdfac5cd3c7106ac"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();