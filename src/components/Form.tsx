import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const WrapperForm = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;
const WrapperInput = styled.div`
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.lightGrey};
  padding: 0.5rem;
  display: flex;
  flex-direction: column;

  label {
    font-size: 0.8rem;
    margin: 0.2rem 0;
    font-weight: ${({ theme }) => theme.fontWeight.semi};
  }
  input {
    padding: 0.2rem;
    color: ${({ theme }) => theme.colors.primary};
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
    outline: none;
  }
`;

const WrapperFormButton = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const Form = () => {
  return (
    <WrapperForm>
      <WrapperInput>
        <label htmlFor="email">Email Adress</label>
        <input id="email" name="email" type="text" />
      </WrapperInput>
      <WrapperInput>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
      </WrapperInput>
      <WrapperFormButton>
        <Button primary>Login</Button>
        <Button>Sign Up</Button>
      </WrapperFormButton>
    </WrapperForm>
  );
};

export default Form;
