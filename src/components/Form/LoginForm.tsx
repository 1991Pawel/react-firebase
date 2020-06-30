/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form } from '../../types/types';
import Button from '../Button';
import { doSignInWithEmailAndPassword } from '../../firebase/auth';
import {
  AccountMessage,
  FormFooter,
  WrapperInput,
  WrapperForm,
  ErrorMessage,
} from './StyledForm';
import { useForm } from '../../hook/useForm';

const LoginForm = ({ setHaveAccount }: Form) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    history,
    error,
    setError,
    setErrorMessage,
    errorMessage,
  } = useForm();

  const loginHandler = async (event: MouseEvent) => {
    event.preventDefault();

    try {
      await doSignInWithEmailAndPassword(email, password);
      history.push('/dashboard');
      setError(false);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      setErrorMessage(err.message);
      setError(true);
    }
  };

  return (
    <WrapperForm>
      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <WrapperInput>
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
            Zarejestruj się
          </button>
          jeśli nie posiadasz konta
        </AccountMessage>
      </FormFooter>
    </WrapperForm>
  );
};

export default LoginForm;
