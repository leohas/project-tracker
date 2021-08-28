/* This is the User page. In here, the user can add Projects and check their
status */

import React, { useEffect } from 'react'
import signOutUser from '../services/signOut' // Importing signOut function
import GlobalStyles from '../styles/GlobalStyles'  // Importing GlobalStyles

function UserPage() {
  // Function to handle when user clicks on LogOut Button
  const LogOut = () => {
    const res = signOutUser()
    console.log(res)
  }

  return (
    <>
      <GlobalStyles />
      <button onClick={LogOut}>Log Out</button> {/* Log Out Button */}
    </>
  )
}

export default UserPage