/* This is the Login Page. In here you can log as either Admin or Normal User. */

import React, { useEffect } from 'react';
import signInUser from '../services/signIn'; // Importing signIn function
import GlobalStyles from '../styles/GlobalStyles'; // Importing GlobalStyles

function LoginPage() {
  // Function to handle when Login button is clicked
  const Login = async () => {
    const res = await signInUser()
    console.log(res)
  }
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <button onClick={Login}>Login with Github</button>  {/* Login Button */}
      </div>
    </>
  );
}

export default LoginPage;
