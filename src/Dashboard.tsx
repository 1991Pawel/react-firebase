/* eslint-disable react/button-has-type */
import React, { useContext } from 'react';
import styled from 'styled-components';
import List from './components/List';
import Navigation from './components/Navigation';
import AddTaskModal from './components/AddTaskModal';
import { ModalContext } from './context/modalContext';

const DashBoardWrapper = styled.div`
  display: flex;
  background: #fbfbfb;
  height: 100vh;
`;

const WrapperHeader = styled.header`
  border-bottom: 1px solid #d1d1d1;
  margin-top: 10rem;
  padding-bottom: 1rem;
  font-size: 2rem;
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
`;

const DashBoardContentWrapper = styled.div`
  width: 100%;
  padding: 0 5rem;
`;

const Home = () => {
  const { isOpen, setIsOpen }: any = useContext(ModalContext);
  return (
    <>
      <Navigation />
      <DashBoardWrapper>
        {isOpen && <AddTaskModal />}
        <DashBoardContentWrapper>
          <WrapperHeader>
            <h3>zadania</h3>
          </WrapperHeader>
          <List />
        </DashBoardContentWrapper>
      </DashBoardWrapper>
    </>
  );
};

export default Home;
