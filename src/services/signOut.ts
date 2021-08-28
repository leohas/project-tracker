// Importing Firebase Authentication Instance
import { auth } from './firebase-config'
// Importing Function to sign the user out
import { signOut } from 'firebase/auth'

// Function that signs the user out
const signOutUser = () => {
  signOut(auth).then((res) => {
    return res
  }
  ).catch(err => {
    return err
  })
}

export default signOutUser