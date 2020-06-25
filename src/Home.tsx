/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const ListItem = (post: any) => <li>{post.post.title}</li>;

const Home = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    const db = firebase.firestore();

    db.collection('projects')
      .get()
      .then((snapshop) => {
        snapshop.docs.forEach((doc) => {
          const item = doc.data();
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          setData((prev: any) => [...prev, item]);
        });
      });
  }, []);

  return (
    <div>
      <h2>Home</h2>
      {data &&
        data.map((post: { title: any }) => (
          <ListItem key={post.title} post={post} />
        ))}
    </div>
  );
};

export default Home;
