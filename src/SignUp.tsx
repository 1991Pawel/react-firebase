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
      setError(err);
    }
  };

  return (
    <div>
      <h1>Sign up</h1>
      {error && <p>Error{`${error}`}</p>}
      <form onSubmit={handleSignUp}>
        <div>
          Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          type="password"
          placeholder="Password"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
export default SignUp;
