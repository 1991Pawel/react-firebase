import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { doSignOut } from '../firebase/auth';

const Navigation = () => {
  const currentUser = useContext(AuthContext);

  const logoutHandler = () => {
    doSignOut();
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
      <nav>{currentUser ? userLinks : guestLinks}</nav>
    </header>
  );
};

export default Navigation;
