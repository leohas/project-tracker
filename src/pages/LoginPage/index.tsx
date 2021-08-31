import React from 'react';
import { PaperHeader, PaperContent, PaperLogin } from './styles';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase, { FbAuth } from '../../services/firebaseConfig'

const LoginPage: React.FC = () => {
  const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
  }

  return (
    <PaperLogin>
      <PaperHeader>
        <h1>Project Tracker</h1>
      </PaperHeader>
      <PaperContent>
        <p>
          Welcome to Project Tracker. You can track the status of your projects
          on Github through here! Just click the Button below to Log In with
          your Github Account!
        </p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={FbAuth}>
        </StyledFirebaseAuth>
      </PaperContent>
    </PaperLogin>
  );
}

export default LoginPage;
