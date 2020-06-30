import styled from 'styled-components';

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
const ErrorMessage = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.light};
  margin: 1rem 0;
  font-weight: ${({ theme }) => theme.fontWeight.semi};
  background: red;
  padding: 0.5rem;
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

export { AccountMessage, FormFooter, WrapperInput, WrapperForm, ErrorMessage };
