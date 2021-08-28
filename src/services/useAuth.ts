import { useState, useEffect } from 'react'
import { getGlobal, setGlobal } from 'reactn'
import { FbAuth, FbDb } from '../services/firebaseConfig'

export const useAuth = () => {
  const [authState, setAuthState] = useState({ isSignedIn: false })
  useEffect(() => {
    const unregisterAuthObserver = FbAuth.onAuthStateChanged(async user => {
      const userUid = user?.uid || null

      if (userUid) {
        const userAlreadyExists = (await FbDb.child('users')
          .child(userUid).once('value')).val() || null

        if (!userAlreadyExists) {
          await FbDb.child('users').child(userUid).set({
            admin: false
          })
          const userIsAdmin = (await FbDb.child('users').child(userUid).child('admin')
            .once('value')).val()
          setGlobal({ user: { ...user, admin: userIsAdmin } })
        } else {
          const userIsAdmin = (await FbDb.child('users').child(userUid).child('admin')
            .once('value')).val()
          setGlobal({ user: { ...user, admin: userIsAdmin } })
        }
        console.log(getGlobal())
        return setAuthState({ isSignedIn: !!user })
      }

    }
    )

    return () => unregisterAuthObserver()
  }, [])

  return { FbAuth, ...authState }
}
