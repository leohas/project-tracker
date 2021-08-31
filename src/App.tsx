import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import Panel from './pages/Panel';
import { useAuth } from './services/useAuth';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  const { isSignedIn } = useAuth()
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route exact path='/login'>
            {isSignedIn ? <Redirect to='/userPage' /> : <LoginPage />}
          </Route>
          <Route exact path='/'>
            {!isSignedIn ? <Redirect to='/login' /> : <Panel />}
          </Route>
          <Route exact path="*" component={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
