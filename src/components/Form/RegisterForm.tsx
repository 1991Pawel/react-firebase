/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Button';
import { doCreateUserWithEmailAndPassword } from '../../firebase/auth';
import {
  AccountMessage,
  FormFooter,
  WrapperInput,
  WrapperForm,
} from './StyledForm';

type FirebaseError = firebase.auth.Error | boolean;

const RegisterForm = ({ setHaveAccount }: any) => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<FirebaseError>(false);

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
        <label htmlFor="email">Email Adress</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          name="email"
          type="text"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          name="password"
          type="password"
        />
      </WrapperInput>
      <FormFooter>
        <Button onClick={handleSignUp} primary>
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
