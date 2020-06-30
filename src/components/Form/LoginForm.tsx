/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import Button from '../Button';
import { doSignInWithEmailAndPassword } from '../../firebase/auth';
import {
  AccountMessage,
  FormFooter,
  WrapperInput,
  WrapperForm,
} from './StyledForm';
import { useForm } from '../../hook/useForm';

type FirebaseError = firebase.auth.Error | boolean;

const LoginForm = ({ setHaveAccount }: any) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    history,
    error,
    setError,
  } = useForm();

  const loginHandler = async (event: any) => {
    event.preventDefault();

    try {
      await doSignInWithEmailAndPassword(email, password);
      history.push('/dashboard');
      setError(false);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);

      setError(true);
    }
  };

  return (
    <WrapperForm>
      <WrapperInput>
        {error && 'błąd logowania'}
        <label htmlFor="email">Email Adress</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          name="email"
          type="text"
          value={email}
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          name="password"
          type="password"
          value={password}
        />
      </WrapperInput>
      <FormFooter>
        <Button onClick={loginHandler} primary>
          Zaloguj
        </Button>
        <AccountMessage>
          <button onClick={() => setHaveAccount(false)} type="button">
            Zarejestruj
          </button>
          się jeśli nie posiadasz konta
        </AccountMessage>
      </FormFooter>
    </WrapperForm>
  );
};

export default LoginForm;
