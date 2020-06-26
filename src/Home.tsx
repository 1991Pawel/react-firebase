/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { useCollection } from './hook/useCollection';

const ListItem = (post: any) => <li>{post.post.title}</li>;

const Home = () => {
  const [posts, setPosts] = useState([]);
  const data = useCollection('projects');

  useEffect(() => {
    setPosts(data);
  }, [data]);

  return (
    <div>
      <h2>Home</h2>
      {posts &&
        posts.map((post: { title: any }) => (
          <ListItem key={post.title} post={post} />
        ))}
    </div>
  );
};

export default Home;
