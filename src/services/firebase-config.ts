import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA3LuOH-sAo0l4dzpW2IbsRhlAz4zQFl7U",
  authDomain: "project-tracker-6dd0c.firebaseapp.com",
  projectId: "project-tracker-6dd0c",
  storageBucket: "project-tracker-6dd0c.appspot.com",
  messagingSenderId: "388220096345",
  appId: "1:388220096345:web:afc4832483f6b819198648"
};

export const firebaseApp = initializeApp(firebaseConfig)
export const auth = getAuth(firebaseApp)


