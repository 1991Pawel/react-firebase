/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, SyntheticEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { doSignInWithEmailAndPassword } from './firebase/auth';

type FirebaseError = firebase.auth.Error | boolean;

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<FirebaseError>(false);

  const handleLogin = async (event: SyntheticEvent) => {
    event.preventDefault();

    try {
      await doSignInWithEmailAndPassword(email, password);
      history.push('/');
      setError(false);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      setError(true);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <form onSubmit={handleLogin}>
          {error && <p> your password or email are wrong</p>}
          <div>
            Email
            <input
              value={email}
              name="email"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
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
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
