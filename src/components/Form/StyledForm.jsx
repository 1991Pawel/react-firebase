import styled from 'styled-components';

const WrapperForm = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

const FormHeading = styled.h3`
  margin: 1rem 0;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.dark};
  @media only screen and (min-width: 600px) {
    font-size: 1.2rem;
  }
`;

const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.lightGrey};
  opacity:  ${({ loading }) => loading ? '.2' : '1'};
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
    border-bottom: 1px solid #ccc;
    box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.lightGrey};
    outline: none;
  }
`;

const FormFooter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  @media only screen and (max-width: 600px) {
    flex-wrap: wrap;
    button {
      width: 100%;
      margin: 0;
    }
    div {
      text-align: center;
      width: 100%;
    }
  }
`;
const ErrorMessage = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.light};
  margin: 1rem 0;
  font-weight: ${({ theme }) => theme.fontWeight.semi};
  background: red;
  padding: 0.5rem;
`;
const AccountMessage = styled.div`
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
  button:hover {
    opacity: 0.8;
  }
`;

export {
  AccountMessage,
  FormFooter,
  WrapperInput,
  WrapperForm,
  ErrorMessage,
  FormHeading,
};
