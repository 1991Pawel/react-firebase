/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import app from './firebase';

const SignUp = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<any>(false);

  const handleSignUp = async (event: any) => {
    event.preventDefault();
    try {
      await app.auth().createUserWithEmailAndPassword(email, password);
      history.push('/');
      setError('');
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Sign up</h1>
      {error && `${error.message}`}
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
