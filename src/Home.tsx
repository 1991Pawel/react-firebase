/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { useCollection } from './hook/useCollection';
import { CollectionItem } from './types/types';

const ListItem = (post: CollectionItem) => <li>{post.title}</li>;

const Home = () => {
  const [posts, setPosts] = useState<CollectionItem[]>([]);
  const data = useCollection('projects');

  useEffect(() => {
    setPosts(data);
  }, [data]);

  return (
    <div>
      <h2>Home</h2>
      {posts && posts.map((item) => <li key={item.id}>{item.title}</li>)}
    </div>
  );
};

export default Home;
