/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form } from '../../types/types';
import FormFields from './FormFields';

import Button from '../Button';
import { doCreateUserWithEmailAndPassword } from '../../firebase/auth';
import {
  AccountMessage,
  FormFooter,
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
    loading,
    setLoading,
  } = useForm();

  const handleSignUp = async (event: MouseEvent) => {
    event.preventDefault();
    try {
      setLoading(true);
      await doCreateUserWithEmailAndPassword(email, password);
      setError(false);
      history.push('/dashboard');
    } catch (err) {
      setLoading(false);
      setErrorMessage(err.message);
      setError(true);
    }
  };

  

  return (
    <WrapperForm>
      <FormHeading>Rejestracja</FormHeading>
      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <FormFields
        password={password}
        setPassword={setPassword}
        email={email}
        setEmail={setEmail}
        loading={loading}
      />
      <FormFooter>
        <Button onClick={(e: MouseEvent) => handleSignUp(e)} primary>
          {loading ? 'Rejestracja...' : 'Zarejestruj'}
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
