/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useHistory } from 'react-router-dom';
import app from './firebase';

const SignUp = () => {
  const history = useHistory();

  const handleSignUp = async (event: any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push('/');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <div>
          Email
          <input name="email" type="email" placeholder="Email" />
        </div>
        <label>Password</label>
        <input name="password" type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
export default SignUp;
