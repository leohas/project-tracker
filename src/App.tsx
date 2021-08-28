import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/adminPage" component={AdminPage} />
          <Route exact path="*" component={() => <Redirect to="/" />} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
