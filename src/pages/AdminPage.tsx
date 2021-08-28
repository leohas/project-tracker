/* This is the Admin Page. In here, the admin can check how many projects a 
determined user has */

import React, { useEffect } from 'react'
import signOutUser from "../services/signOut"; // Importing signOut function
import GlobalStyles from "../styles/GlobalStyles"; // Importing GlobalStyles

function AdminPage() {
  // Function to handle when admin clicks on LogOut Button
  const LogOut = () => {
    const res = signOutUser()
    console.log(res)
  }

  return (
    <>
      <GlobalStyles />
      <button onClick={LogOut}>LogOut</button> {/* Log Out Button */}
    </>
  )
}

export default AdminPage