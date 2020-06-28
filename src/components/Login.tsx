/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, SyntheticEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { doSignInWithEmailAndPassword } from '../firebase/auth';

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
    <div className="login-page">
      <div className="form">
        <h1>Login</h1>
        {error && <p>Błąd logowania </p>}
        <form onSubmit={handleLogin} className="login-form">
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
          <button type="submit">Login</button>
          <p className="message">
            Not registered? <a href="/signup">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;
