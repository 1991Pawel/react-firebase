import React from 'react';
import styled from 'styled-components';
import Form from './components/Form';
import Button from './components/Button';

const WelcomeWrapper = styled.div`
  border: 1px solid red;
`;

const GlobalContainer = styled.div`
  padding: 2rem;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const WelcomeHeading = styled.h2`
  font-size: 1.7rem;
  margin: 3rem 0 1rem;
  color: ${({ theme }) => theme.colors.dark};
`;
const WelcomeSubheading = styled.h3`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.grey};
  font-weight: ${({ theme }) => theme.fontWeight.semi};
`;

const Welcome = () => {
  const clickHandler = () => {
    console.log('fafa');
  };
  return (
    <GlobalContainer>
      <WelcomeWrapper>
        <Logo>YourTask</Logo>
        <WelcomeHeading>Zacznij zarządzać swoimi zadaniami</WelcomeHeading>
        <WelcomeSubheading>
          Zaloguj się na swoje konto, i zarządzaj swoimi zadaniami
        </WelcomeSubheading>
        <Form />
      </WelcomeWrapper>
    </GlobalContainer>
  );
};

export default Welcome;
