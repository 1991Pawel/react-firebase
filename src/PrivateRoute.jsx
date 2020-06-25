/* eslint-disable react/jsx-curly-newline */
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './context/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const currentUser = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser !== null ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
