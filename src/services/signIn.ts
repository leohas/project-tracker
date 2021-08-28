// Importing Firebase Authentication Instance
import { auth } from './firebase-config'
// Importing Functions to sign the user in with Github
import { signInWithPopup, GithubAuthProvider } from 'firebase/auth'

// Creating a Github Provider
const githubProvider = new GithubAuthProvider()

// Function that signs in the user using Github Provider
const signInUser = () => {
  return signInWithPopup(auth, githubProvider).then((res) => {
    return res
  }).catch(err => {
    return err
  })
}

export default signInUser