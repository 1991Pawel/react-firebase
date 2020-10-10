/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form } from '../../types/types';
import Button from '../Button';
import FormFields from './FormFields';
import { doSignInWithEmailAndPassword } from '../../firebase/auth';
import {
  AccountMessage,
  FormFooter,
  WrapperForm,
  ErrorMessage,
  FormHeading,
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
    loading,
    setLoading
  } = useForm();

  const loginHandler = async (event: MouseEvent) => {
    event.preventDefault();

    try {
      setLoading(true);
      await doSignInWithEmailAndPassword(email, password);
      setError(false);
      history.push('/dashboard');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      setErrorMessage(err.message);
      setLoading(false);
      setError(true);
  
    }
  };

  return (
    <WrapperForm>
      <FormHeading>Logowanie</FormHeading>
      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <FormFields
        password={password}
        setPassword={setPassword}
        email={email}
        setEmail={setEmail}
        loading={loading}
      />
      <FormFooter>
        <Button onClick={loginHandler} primary>
          {loading ? 'Logowanie...' : 'Zaloguj'}
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
