/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { db } from './firebase/firebase';
import List from './components/List';

const Home = () => {
  const [project, setProject] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    db.collection('projects').add({
      title: project,
      city: 'random',
    });
  };

  return (
    <div className="home">
      <h2>Add</h2>
      <form className="home__form" onSubmit={(e) => onSubmit(e)}>
        <input
          value={project}
          onChange={(e) => setProject(e.target.value)}
          type="text"
        />
        <button type="submit">Send</button>
      </form>
      <List />
    </div>
  );
};

export default Home;
