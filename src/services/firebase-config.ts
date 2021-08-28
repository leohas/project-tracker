// This is the file where Firebase is configured.

// Importing Function necessary for initializing Firebase
import { initializeApp } from 'firebase/app'
// Importing function to create an instance to Firebase Authentication
import { getAuth } from 'firebase/auth';

// This is the configuration for my App 'project-tracker' available on Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA3LuOH-sAo0l4dzpW2IbsRhlAz4zQFl7U",
  authDomain: "project-tracker-6dd0c.firebaseapp.com",
  projectId: "project-tracker-6dd0c",
  storageBucket: "project-tracker-6dd0c.appspot.com",
  messagingSenderId: "388220096345",
  appId: "1:388220096345:web:afc4832483f6b819198648"
};

// Initializing Firebase App using 'project-tracker' configuration data
export const firebaseApp = initializeApp(firebaseConfig)
// Creating an instance to Firebase Authentication
export const auth = getAuth(firebaseApp)


