/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { useCollection } from './hook/useCollection';
import { CollectionItem } from './types/types';
import { db } from './firebase/firebase';

const ListItem = (post: CollectionItem) => <li>{post.title}</li>;

const Home = () => {
  const [posts, setPosts] = useState<CollectionItem[]>([]);
  const data = useCollection('projects');
  const [project, setProject] = useState('');

  useEffect(() => {
    setPosts(data);
  }, [data]);

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
      {posts && posts.map((item) => <li key={item.id}>{item.title}</li>)}
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
      </div>
    </div>
  );
};

export default Home;
