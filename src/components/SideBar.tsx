import React from 'react';
import styled, { css } from 'styled-components';
import { SideBarToggle } from '../types/types';
import Logo from './Logo/Logo';

const SideBarWrapper = styled.div<{ show?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  width: 300px;
  background: #fff;
  box-shadow: 2px 2px 2px #ccc;

  padding: 1rem;
  height: 100%;

  @media only screen and (max-width: 800px) {
    transform: translateX(-300px);
    transition: 0.2s ease-in-out transform;
  }
  ${({ show }) =>
    show &&
    css`
      @media only screen and (max-width: 800px) {
        transform: translateX(0px);
      }
    `};
`;

const SideBar = ({ show, setShow }: SideBarToggle) => {
  return (
    <SideBarWrapper show={show}>
      <Logo>yourTask</Logo>
      <button type="button" onClick={() => setShow(false)}>
        X
      </button>
    </SideBarWrapper>
  );
};

export default SideBar;
