/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { db } from './firebase/firebase';
import List from './components/List';

const Home = () => {
  const [project, setProject] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('działa');
    db.collection('projects').add({
      title: project,
      city: 'Kolno',
    });
  };

  return (
    <div>
      <h2>Home</h2>
      <div>
        <h2>Add</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <input
            value={project}
            onChange={(e) => setProject(e.target.value)}
            type="text"
          />
          <button type="submit">Send</button>
        </form>
        <List />
      </div>
    </div>
  );
};

export default Home;
