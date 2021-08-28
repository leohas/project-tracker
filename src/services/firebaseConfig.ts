import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA3LuOH-sAo0l4dzpW2IbsRhlAz4zQFl7U",
  authDomain: "project-tracker-6dd0c.firebaseapp.com",
  databaseURL: "https://project-tracker-6dd0c-default-rtdb.firebaseio.com",
  projectId: "project-tracker-6dd0c",
  storageBucket: "project-tracker-6dd0c.appspot.com",
  messagingSenderId: "388220096345",
  appId: "1:388220096345:web:afc4832483f6b819198648"
};

const app = firebase.initializeApp(firebaseConfig)
export const FbDb = app.database().ref()
export const FbAuth = app.auth()

export default firebase


