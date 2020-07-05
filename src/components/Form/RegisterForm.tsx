/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form } from '../../types/types';

import Button from '../Button';
import { doCreateUserWithEmailAndPassword } from '../../firebase/auth';
import {
  AccountMessage,
  FormFooter,
  WrapperInput,
  WrapperForm,
  ErrorMessage,
  FormHeading,
} from './StyledForm';
import { useForm } from '../../hook/useForm';

const RegisterForm = ({ setHaveAccount }: Form) => {
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

  const handleSignUp = async (event: MouseEvent) => {
    event.preventDefault();
    try {
      await doCreateUserWithEmailAndPassword(email, password);
      setError(false);
      history.push('/dashboard');
    } catch (err) {
      setErrorMessage(err.message);
      setError(true);
    }
  };

  return (
    <WrapperForm>
      <FormHeading>Rejestracja</FormHeading>
      <WrapperInput>
        {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <label htmlFor="email">Adres Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          name="email"
          type="text"
          value={email}
        />
        <label htmlFor="password">Hasło</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          name="password"
          type="password"
          value={password}
        />
      </WrapperInput>
      <FormFooter>
        <Button onClick={(e: MouseEvent) => handleSignUp(e)} primary>
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
