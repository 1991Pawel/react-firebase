import React from 'react';
import styled, { css } from 'styled-components';
import { SideBarToggle } from '../types/types';

const SideBarWrapper = styled.div<{ show: boolean }>`
  position: fixed;
  z-index: 1;
  height: 100vh;
  width: 250px;
  background: #fff;
  box-shadow: 2px 2px 2px #ccc;
  transform: translateX(-100%);
  transition: 0.5s ease-in-out transform;

  @media screen and (min-width: 1000px) {
    transform: translateX(0%);
    position: static;
  }

  ${({ show }) =>
    show &&
    css`
      transform: translateX(0%);
    `};
`;

const SideBar = ({ show, setShow }: SideBarToggle) => {
  return (
    <SideBarWrapper show={show}>
      <button type="button" onClick={() => setShow(false)}>
        X
      </button>
      sidebar
    </SideBarWrapper>
  );
};

export default SideBar;
