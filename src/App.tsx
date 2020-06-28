import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import Welcome from './Welcome';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';
import Navigation from './components/Navigation';
import GlobalStyle from './GlobalStyles/GlobalStyles';

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Router>
        <Navigation />
        <PrivateRoute exact path="/" component={Dashboard} />
        <Route exact path="/welcome" component={Welcome} />
      </Router>
    </AuthProvider>
  );
}

export default App;
