import React from 'react';
import styled, { css } from 'styled-components';
import ArticleWidget from './ArticleWidget';
import { SideBarToggle } from '../types/types';
import { Logo } from './Logo/Logo';
import { useTaskStatistic } from '../hook/useTaskStatistic';
import cross  from '../assets/cross.svg';


export const SideBarButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  height: 2rem;
  width: 2rem;
  color: ${({ theme }) => theme.colors.light};
  background-image: linear-gradient(90deg, #5c51f2, #234bcf);
  border: none;
  cursor: pointer;
  display:flex;
  justify-content:center;

  img {
    height:1.1rem;
    width:1.1rem;
    color:#fff;
  }

  @media only screen and (min-width: 801px) {
    display: none;
  }
`;

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
    width: 1.2rem;
    height: 1.2rem;
    font-size: 0.8rem;
    
  }
`;
const StatisticBarWrapper = styled.div`
  height: 1rem;

  span {
    font-size: 2rem;
  }
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
    transition: 0.5s ease-in-out;
    
    
  }
`;

const ArticleWrapper = styled.section`
  margin-top:1rem;
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
  overflow-y:auto;
  scrollbar-width: none;
 
 

  @media only screen and (max-width: 800px) {
    transform: translateX(-300px);
    transition: 0.2s ease-in-out transform;
 
  }
  ${({ showSideBar }) =>
    showSideBar &&
    css`
      @media only screen and (max-width: 800px) {
        transform: translateX(0px);
        width:320px;
      }
    `};
`;

const SideBar = ({ showSideBar, setShowSideBar }: SideBarToggle) => {
  const { doneTasks, totalTasks, procent } = useTaskStatistic();

  return (
    <SideBarWrapper showSideBar={showSideBar}>
      <Logo>yourTask</Logo>
      <SideBarButton type="button" onClick={() => setShowSideBar(false)}>
        <img src={cross} alt="close menu icon" />
      </SideBarButton>
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
        <ArticleWrapper>
          <ArticleWidget />
        </ArticleWrapper>
      </StatisticBarWrapper>
    </SideBarWrapper>
  );
};

export default SideBar;
