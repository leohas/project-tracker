import React from 'react'
import signOutUser from "../services/signOut";
import GlobalStyles from "../styles/GlobalStyles";

function AdminPage() {
  const githubLogOut = () => {
    const res = signOutUser()
    console.log(res)
  }

  return (
    <>
      <GlobalStyles />
      <button onClick={githubLogOut}>GithubLogout</button>
    </>
  )
}

export default AdminPage