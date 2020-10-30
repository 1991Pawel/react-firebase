/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import styled from 'styled-components';
import List from './components/List';
import Navigation from './components/Navigation';
import AddTaskModal from './components/AddTaskModal';
import { useModalContext } from './hook/useModalContext';
import Sidebar from './components/SideBar';
import SearchBar from './components/SearchBar';
import FilterPanel from './components/FilterPanel';

const DashBoardWrapper = styled.div<{ isNotScrollable?: boolean }>`
  display: flex;
  background: ${({ theme }) => theme.colors.light};
  min-height: 100vh;
  overflow: ${(props) => (props.isNotScrollable ? 'hidden' : 'none')};
`;

const WrapperHeader = styled.header`
  border-bottom: 1px solid #d1d1d1;
  margin-top: 10rem;
  padding-bottom: 1rem;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
  }
  span {
    font-size: 2rem;
  }
  h3 {
    color: ${({ theme }) => theme.colors.textDark};
  }
`;

const DashBoardContentWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  @media only screen and (min-width: 600px) {
    padding: 1.5rem 5rem;
  }
  @media only screen and (min-width: 801px) {
    width: calc(100% - 300px);
    margin-left: auto;
  }
`;

const Home = () => {
  const { isModalOpen, setModalOpen } = useModalContext();
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <>
      <Navigation setModalOpen={setModalOpen} setShowSideBar={setShowSideBar} />
      {isModalOpen && <AddTaskModal />}
      <DashBoardWrapper isNotScrollable={isModalOpen}>
        <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <DashBoardContentWrapper>
          <WrapperHeader>
            <h3>Zadania</h3>
            <div>
              <SearchBar />
              <FilterPanel />
            </div>
          </WrapperHeader>
          <List />
        </DashBoardContentWrapper>
      </DashBoardWrapper>
    </>
  );
};

export default Home;
