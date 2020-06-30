/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Button from '../Button';
import { doCreateUserWithEmailAndPassword } from '../../firebase/auth';
import {
  AccountMessage,
  FormFooter,
  WrapperInput,
  WrapperForm,
} from './StyledForm';
import { useForm } from '../../hook/useForm';

type FirebaseError = firebase.auth.Error | boolean;

const RegisterForm = ({ setHaveAccount }: any) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    history,
    error,
    setError,
  } = useForm();

  const handleSignUp = async (event: any) => {
    event.preventDefault();
    try {
      await doCreateUserWithEmailAndPassword(email, password);
      history.push('/dashboard');
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <WrapperForm>
      <WrapperInput>
        {error && 'błąd rejestracji konta'}
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
        <Button onClick={(e: any) => handleSignUp(e)} primary>
          Zarejestruj
        </Button>
        <AccountMessage>
          <button type="button" onClick={() => setHaveAccount(true)}>
            Zaloguj
          </button>
          się jeśli masz juz konto!
        </AccountMessage>
      </FormFooter>
    </WrapperForm>
  );
};

export default RegisterForm;
