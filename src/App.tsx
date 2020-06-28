import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
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
      <ThemeProvider theme={theme} />
      <Router>
        <Navigation />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={Welcome} />
      </Router>
    </AuthProvider>
  );
}

export default App;
