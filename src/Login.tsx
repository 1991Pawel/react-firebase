/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import app from './firebase';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [data, setData] = useState('');

  const handleLogin = async (event: any) => {
    event.preventDefault();

    try {
      await app.auth().signInWithEmailAndPassword(email, password);

      history.push('/');
      setError(false);
    } catch (err) {
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
