/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import styled from 'styled-components';
import List from './components/List';
import Navigation from './components/Navigation';
import AddTaskModal from './components/AddTaskModal';
import { useModalContext } from './hook/useModalContext';
import Sidebar from './components/SideBar';

const DashBoardWrapper = styled.div<{ isNotScrollable?: boolean }>`
  display: flex;
  background: #fbfbfb;
  height: 100vh;
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
`;

const DashBoardContentWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  @media only screen and (min-width: 600px) {
    padding: 1.5rem 5rem;
  }
`;

const Home = () => {
  const { isOpen } = useModalContext();
  const [show, setShow] = useState(false);
  return (
    <>
      <Navigation show={show} setShow={setShow} />

      {isOpen && <AddTaskModal />}
      <DashBoardWrapper isNotScrollable={isOpen}>
        <Sidebar show={show} setShow={setShow} />
        <DashBoardContentWrapper>
          <WrapperHeader>
            <h3>Zadania</h3>
          </WrapperHeader>
          <List />
        </DashBoardContentWrapper>
      </DashBoardWrapper>
    </>
  );
};

export default Home;
