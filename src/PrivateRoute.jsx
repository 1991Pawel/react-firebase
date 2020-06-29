/* eslint-disable react/jsx-curly-newline */
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './context/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser, loading } = useContext(AuthContext);
  if (loading) {
    return <div>Ładowanie</div>;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
