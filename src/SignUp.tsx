/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, SyntheticEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from './firebase/firebase';

type FirebaseError = firebase.auth.Error | boolean;

const SignUp = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<FirebaseError>();

  const handleSignUp = async (event: SyntheticEvent) => {
    event.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      history.push('/');
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="login-page">
      <div className="form">
        <h1>Sign up</h1>
        {error && <p>Error{error}</p>}

        <form onSubmit={handleSignUp}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
          <button type="submit">Sign Up</button>
          <p className="message">
            you already have account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
