import React from 'react';
import styled, { css } from 'styled-components';
import { SideBarToggle } from '../types/types';
import Logo from './Logo/Logo';
import { useTaskStatistic } from '../hook/useTaskStatistic';

const StatisticList = styled.ul`
  list-style: none;
  margin-top: 5rem;
`;

const StatisticListItem = styled.li`
  font-size: 0.9rem;
  font-weight: ${({ theme }) => theme.fontWeight.semi};
  color: ${({ theme }) => theme.colors.dark};
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;

  span {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.light};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
  }
`;
const StatisticBarWrapper = styled.div`
  height: 1rem;
`;
const StatisticBar = styled.div<{ procent?: string }>`
  border: 1px solid #ccc;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #b4ffcf;
  position: relative;

  &:after {
    position: absolute;
    content: '';
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: ${({ procent }) => `translatex(${procent}%)`};
    background: #fff;
  }
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

  span {
    font-size: 1rem;
  }

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
  const { doneTasks, totalTasks, procent } = useTaskStatistic();

  return (
    <SideBarWrapper showSideBar={showSideBar}>
      <Logo>yourTask</Logo>
      <button type="button" onClick={() => setShowSideBar(false)}>
        X
      </button>
      <StatisticList>
        <StatisticListItem>
          Wszystkie Zadania <span>{totalTasks}</span>
        </StatisticListItem>
        <StatisticListItem>
          Zadania Wykonane <span> {doneTasks}</span>
        </StatisticListItem>
      </StatisticList>
      <StatisticBarWrapper>
        <span>{`${procent}%`}</span>
        <StatisticBar procent={procent} />
      </StatisticBarWrapper>
    </SideBarWrapper>
  );
};

export default SideBar;
