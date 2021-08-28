import React, { useEffect } from 'react';
import signInUser from '../services/signIn';
import GlobalStyles from '../styles/GlobalStyles';

function LoginPage() {
  const githubLogin = async () => {
    const res = await signInUser()
    console.log(res)
  }
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <button onClick={githubLogin}>GithubLogin</button>
        <h1 style={{ textAlign: 'center', marginTop: '100px' }}>Project is running... Code something great :D</h1>
      </div>
    </>
  );
}

export default LoginPage;
