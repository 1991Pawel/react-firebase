import React, { useState } from 'react';
import styled from 'styled-components';
import LoginForm from './components/Form/LoginForm';
import RegisterForm from './components/Form/RegisterForm';
import BackgroundWelcome from './assets/welcomeBg.svg';
import welcomeImg from './assets/welcomeImg.svg';

const WelcomeWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
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

const WelcomeContentWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem;

  header {
    margin: 0 auto;
  }
`;
const WelcomeImageWrapper = styled.div`
  background: #d9e5f9;
  height: 100vh;
  width: 100%;
  background-image: url(${BackgroundWelcome});
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  display: none;

  @media screen and (min-width: 500px) {
    display: flex;
    width: 30%;
  }
  @media screen and (min-width: 700px) {
    width: 80%;
  }
  @media screen and (min-width: 1000px) {
    width: 100%;
  }
`;

const StyledImage = styled.img`
  display: none;
  @media screen and (min-width: 700px) {
    display: block;
    height: auto;
    width: 80%;
  }
  @media screen and (min-width: 1000px) {
    max-width: 500px;
  }
`;

const Welcome = () => {
  const [haveAccount, setHaveAccount] = useState(true);

  return (
    <WelcomeWrapper>
      <WelcomeContentWrapper>
        <header>
          <Logo>YourTask</Logo>
          <WelcomeHeading>Zacznij zarządzać swoimi zadaniami</WelcomeHeading>
          <WelcomeSubheading>
            Zaloguj się na swoje konto, i zarządzaj swoimi zadaniami
          </WelcomeSubheading>
          {haveAccount ? (
            <LoginForm setHaveAccount={setHaveAccount} />
          ) : (
            <RegisterForm setHaveAccount={setHaveAccount} />
          )}
        </header>
      </WelcomeContentWrapper>
      <WelcomeImageWrapper>
        <StyledImage src={welcomeImg} alt="task decoration" />
      </WelcomeImageWrapper>
    </WelcomeWrapper>
  );
};

export default Welcome;
