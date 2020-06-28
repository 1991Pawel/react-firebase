import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/theme';
import { AuthProvider } from './context/authContext';
import Welcome from './Welcome';
import Dashboard from './Dashboard';
import PrivateRoute from './PrivateRoute';
import GlobalStyle from './GlobalStyles/GlobalStyles';

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Welcome} />
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
