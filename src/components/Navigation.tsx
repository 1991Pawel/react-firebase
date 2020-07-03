import React from 'react';
import styled from 'styled-components';
import { doSignOut } from '../firebase/auth';
import Button from './Button';
import { Nav } from '../types/types';
import { SideBarButton } from './SideBar';

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
  nav {
    display: flex;
    justify-content: space-between;
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

const ButtonWrapper = styled.div`
  button {
    position: static;
    height: 100%;
    width: 2rem;
    font-size: 0.7rem;
    @media only screen and (min-width: 370px) {
      font-size: 1rem;
      width: 3rem;
    }
  }
`;

const Navigation = ({ setShowSideBar, setModalOpen }: Nav) => {
  const logoutHandler = () => {
    doSignOut();
  };

  return (
    <HeaderWrapper>
      <nav>
        <ButtonWrapper>
          <SideBarButton onClick={() => setShowSideBar(true)} type="button">
            Menu
          </SideBarButton>
        </ButtonWrapper>
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
