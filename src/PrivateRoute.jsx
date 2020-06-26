/* eslint-disable react/jsx-curly-newline */
import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './context/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser, loading } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
