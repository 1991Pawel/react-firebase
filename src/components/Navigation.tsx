import React from 'react';
import styled from 'styled-components';
import { doSignOut } from '../firebase/auth';
import Button from './Button';

const HeaderWrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 1.5rem;

  li {
    list-style: none;
  }
  button {
    margin-left: auto;
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
              Wyloguj
            </Button>
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  );
};

export default Navigation;
