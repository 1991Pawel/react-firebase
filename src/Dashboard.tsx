/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import styled from 'styled-components';
import { db } from './firebase/firebase';
import { useCurrentUser } from './hook/useCurrentUser';
import List from './components/List';
import Navigation from './components/Navigation';
import SideBar from './components/SideBar';

const DashBoardWrapper = styled.div`
  display: flex;
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
  const [project, setProject] = useState('');
  const [error, setError] = useState(false);
  const context = useCurrentUser();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (project.trim().length) {
      db.collection('projects').add({
        title: project,
        city: 'any',
        userId: context?.uid,
      });
      setError(false);
    } else {
      setError(true);
    }
    setProject('');
  };

  return (
    <>
      <Navigation />
      <DashBoardWrapper>
        <SideBar />
        <DashBoardContentWrapper>
          <WrapperHeader>
            <h3>zadania</h3>
            <div>
              NIEDZIELA
              <span>28.06.2020</span>
            </div>
          </WrapperHeader>
          <h2>Add</h2>
          {error && <p>input is empty</p>}
          <form className="home__form" onSubmit={(e) => onSubmit(e)}>
            <input
              value={project}
              onChange={(e) => setProject(e.target.value)}
              type="text"
            />
            <button type="submit">Send</button>
          </form>
          <List />
        </DashBoardContentWrapper>
      </DashBoardWrapper>
    </>
  );
};

export default Home;
