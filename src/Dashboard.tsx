/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import styled from 'styled-components';
import { db } from './firebase/firebase';
import { useCurrentUser } from './hook/useCurrentUser';
import List from './components/List';
import Navigation from './components/Navigation';
import SideBar from './components/SideBar';

const DashBoardWrapper = styled.div`
  border: 5px solid red;
  margin-top: 5rem;
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
      </DashBoardWrapper>
    </>
  );
};

export default Home;
