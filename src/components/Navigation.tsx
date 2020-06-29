import React from 'react';
import styled from 'styled-components';
import { doSignOut } from '../firebase/auth';
import Button from './Button';

const HeaderWrapper = styled.header`
  padding: 1.5rem;

  li {
    list-style: none;
  }
`;

const Navigation = () => {
  const logoutHandler = () => {
    doSignOut();
  };

  return (
    <HeaderWrapper>
      <nav>
        <ul>
          <li>
            <Button primary onClick={logoutHandler}>
              Logout
            </Button>
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  );
};

export default Navigation;
