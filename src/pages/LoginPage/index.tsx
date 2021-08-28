import React from 'react';
// Importing signIn function
import GlobalStyles from '../../styles/GlobalStyles'; // Importing GlobalStyles
import { Container, HeaderDiv, ContentDiv } from './styles';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase, { FbAuth } from '../../services/firebaseConfig'

const LoginPage: React.FC = () => {
  const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [
      firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
  };
  // Function to handle when Login button is clicked
  return (
    <>
      <GlobalStyles />
      <Container>
        {/* Login Button */}
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
