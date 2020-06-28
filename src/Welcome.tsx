import React from 'react';
import styled from 'styled-components';

const WelcomeWrapper = styled.div`
  background: #ccc;
`;

const Logo = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const WelcomeHeading = styled.h2`
  font-size: 2.5rem;
`;
const WelcomeSubheading = styled.h3`
  font-size: 1.6rem;
`;

const Welcome = () => {
  return (
    <WelcomeWrapper>
      <Logo>YourTask</Logo>
      <WelcomeHeading>Zacznij zarządzać swoimi zadaniami</WelcomeHeading>
      <WelcomeSubheading>
        Zarejestruj się aby korzystać bezpłatnie z your Task
      </WelcomeSubheading>
    </WelcomeWrapper>
  );
};

export default Welcome;
