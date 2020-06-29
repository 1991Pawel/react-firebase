/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Button from './Button';
import { doCreateUserWithEmailAndPassword } from '../firebase/auth';

type FirebaseError = firebase.auth.Error | boolean;

const WrapperForm = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;
const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.lightGrey};
  padding: 1rem;

  label {
    font-size: 0.8rem;
    margin: 1rem 0;
    font-weight: ${({ theme }) => theme.fontWeight.semi};
  }

  label:first-of-type {
    margin-top: 0;
  }

  input {
    padding: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
    border: none;
    box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.lightGrey};
    outline: none;
  }
`;

const FormFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 2rem;
`;
const AccountMessage = styled.p`
  margin: 1rem 0;
  font-size: 0.8rem;
  button {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.fontWeight.semi};
    cursor: pointer;
    background: transparent;
    border: none;
    margin-right: 0.2rem;
  }
`;

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
