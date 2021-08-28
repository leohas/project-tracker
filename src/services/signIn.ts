import { auth } from './firebase-config'
import { signInWithPopup, GithubAuthProvider } from 'firebase/auth'

const githubProvider = new GithubAuthProvider()

const signInUser = () => {
  return signInWithPopup(auth, githubProvider).then((res) => {
    return res
  }).catch(err => {
    return err
  })
}

export default signInUser