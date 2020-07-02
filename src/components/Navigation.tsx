import React from 'react';
import styled from 'styled-components';
import { doSignOut } from '../firebase/auth';
import Button from './Button';
import { Nav } from '../types/types';

const HeaderWrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 1rem;
  @media only screen and (min-width: 600px) {
    padding: 1.5rem 5rem;
  }

  ul {
    display: flex;
  }

  li {
    list-style: none;
  }
  li:nth-of-type(1) {
    margin-left: auto;
    margin-right: 1rem;
  }

  button {
    margin: 0;
  }
`;

const Navigation = ({ setShowSideBar, setModalOpen }: Nav) => {
  const logoutHandler = () => {
    doSignOut();
  };

  return (
    <HeaderWrapper>
      <button onClick={() => setShowSideBar(true)} type="button">
        X
      </button>
      <nav>
        <ul>
          <li>
            <Button primary onClick={() => setModalOpen(true)}>
              Dodaj
            </Button>
          </li>
          <li>
            <Button onClick={logoutHandler}>Wyloguj</Button>
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  );
};

export default Navigation;
