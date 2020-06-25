import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import SingUp from './SignUp';
import Login from './Login';
import Home from './Home';
import PrivateRoute from './PrivateRoute';
import Navigation from './components/Navigation';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SingUp} />
      </Router>
    </AuthProvider>
  );
}

export default App;
