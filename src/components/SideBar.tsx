import React from 'react';
import styled, { css } from 'styled-components';
import { SideBarToggle } from '../types/types';
import Logo from './Logo/Logo';

const StatisticList = styled.ul`
  list-style: none;
  margin-top: 5rem;
`;

const StatisticListItem = styled.li`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeight.semi};
  color: ${({ theme }) => theme.colors.dark};
  margin: 1rem 0;
`;

const SideBarWrapper = styled.div<{ showSideBar?: boolean }>`
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
  ${({ showSideBar }) =>
    showSideBar &&
    css`
      @media only screen and (max-width: 800px) {
        transform: translateX(0px);
      }
    `};
`;

const SideBar = ({ showSideBar, setShowSideBar }: SideBarToggle) => {
  return (
    <SideBarWrapper showSideBar={showSideBar}>
      <Logo>yourTask</Logo>
      <button type="button" onClick={() => setShowSideBar(false)}>
        X
      </button>
      <StatisticList>
        <StatisticListItem>Wszystkie Zadania: 10</StatisticListItem>
        <StatisticListItem>Zadania Wykonane: 2</StatisticListItem>
      </StatisticList>
    </SideBarWrapper>
  );
};

export default SideBar;
