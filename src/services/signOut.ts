import { auth } from './firebase-config'
import { signOut } from 'firebase/auth'

const signOutUser = () => {
  signOut(auth).then((res) => {
    return res
  }
  ).catch(err => {
    return err
  })
}

export default signOutUser