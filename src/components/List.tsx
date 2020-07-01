import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListItem from './ListItem';
import { useCollection } from '../hook/useCollection';
import { CollectionItem } from '../types/types';
import { db } from '../firebase/firebase';

const ListWrapper = styled.ul`
  margin-top: 2rem;
`;

const List = () => {
  const data = useCollection('projects');
  const [posts, setPosts] = useState<CollectionItem[]>([]);

  const removeItem = (id: string) => {
    db.collection('projects').doc(id).delete();
    toast.error('Zadanie zostało usuniete', {
      position: 'bottom-right',
    });
  };
  const doneItem = (item: CollectionItem) => {
    try {
      db.collection('projects').doc(item.id).update({
        isDone: !item.isDone,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setPosts(data);
  }, [data]);

  return (
    <div>
      <ToastContainer
        style={{ fontSize: '.8rem' }}
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={2}
      />
      <ListWrapper>
        {posts &&
          posts.map((item) => (
            <ListItem
              removeItem={() => removeItem(item.id)}
              key={item.id}
              item={item}
              doneItem={() => doneItem(item)}
            />
          ))}
      </ListWrapper>
    </div>
  );
};

export default List;
