import React from 'react';
import styled, { css } from 'styled-components';
import { SideBarToggle } from '../types/types';

const SideBarWrapper = styled.div<{ isSmallDevice?: boolean; show?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  width: 300px;
  background: #fff;
  box-shadow: 2px 2px 2px #ccc;
  transform: translateX(-100%);
  transition: 0.2s ease-in-out transform;
  padding: 1rem;

  ${({ show }) =>
    show &&
    css`
      transform: translateX(0%);
      @media only screen and (min-width: 800px) {
        position: ${(isSmallDevice) => (isSmallDevice ? 'static' : 'fixed')};
      }
    `};
`;

const SideBar = ({ show, setShow, isSmallDevice }: SideBarToggle) => {
  return (
    <SideBarWrapper isSmallDevice={isSmallDevice} show={show}>
      <button type="button" onClick={() => setShow(false)}>
        X
      </button>
      sidebar{JSON.stringify(show)}
    </SideBarWrapper>
  );
};

export default SideBar;
