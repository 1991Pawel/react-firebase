import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
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
  };
  const doneItem = (id: string) => {
    db.collection('projects').doc(id).update({
      isDone: true,
    });
  };

  useEffect(() => {
    setPosts(data);
  }, [data]);

  return (
    <>
      <ListWrapper>
        {posts &&
          posts.map((item) => (
            <ListItem
              removeItem={() => removeItem(item.id)}
              key={item.id}
              item={item}
              doneItem={() => doneItem(item.id)}
            />
          ))}
      </ListWrapper>
    </>
  );
};

export default List;
