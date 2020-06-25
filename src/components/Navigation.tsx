import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';
import { AuthContext } from '../Auth';
import 'firebase/firestore';

const Navigation = () => {
  const user = useContext(AuthContext);

  const logoutHandler = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log('wylogowany');
      })
      .catch((error) => {
        // An error happened.
        console.log('coś poszło nie tak');
      });
  };

  const userLinks = (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link onClick={logoutHandler} to="/login">
          Logout
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/signup">SignUp</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <header>
      <nav>{user ? userLinks : guestLinks}</nav>
    </header>
  );
};

export default Navigation;
