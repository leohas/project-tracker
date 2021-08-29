import React, { useState } from 'react';
import GlobalStyles from '../../styles/GlobalStyles';
import { Container, HeaderDiv, ContentDiv } from './styles';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase, { FbAuth } from '../../services/firebaseConfig'

const LoginPage: React.FC = () => {
  const [adminState, setAdminState] = useState(false)
  const [switchState, setSwitchState] = useState(false)

  const handleSwitch = () => {

  }

  const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [
      firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
  };
  return (
    <>
      <GlobalStyles />
      <Container>
        <HeaderDiv>
          <h1>Project Tracker</h1>
        </HeaderDiv>
        <ContentDiv>
          <p>
            Welcome to Project Tracker. You can track the status of your projects
            on Github through here! Just click the Button below to Log In with
            your Github Account!
          </p>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={FbAuth}>
          </StyledFirebaseAuth>
        </ContentDiv>
      </Container>
    </>
  );
}

export default LoginPage;
