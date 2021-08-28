/* This is the User page. In here, the user can add Projects and check their
status */

import React, { useEffect } from 'react'
import GlobalStyles from '../../styles/GlobalStyles'  // Importing GlobalStyles
import { FbAuth } from '../../services/firebaseConfig'
const UserPage: React.FC = () => {
  const signOutHandler = async () => {
    await FbAuth.signOut()
    window.location.reload()
    return true
  }

  return (
    <>
      <GlobalStyles />
      <h1> UserPage </h1>
      <button onClick={signOutHandler}>Log Out</button> {/* Log Out Button */}
    </>
  )
}

export default UserPage