import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';
import { useCollection } from '../hook/useCollection';
import { CollectionItem } from '../types/types';
import { db } from '../firebase/firebase';

const List = () => {
  const data = useCollection('projects');
  const [posts, setPosts] = useState<CollectionItem[]>([]);

  const removeItem = (id: string) => {
    db.collection('projects').doc(id).delete();
  };

  useEffect(() => {
    setPosts(data);
  }, [data]);

  return (
    <ul className="list">
      {posts &&
        posts.map((item) => (
          <ListItem
            removeItem={() => removeItem(item.id)}
            key={item.id}
            item={item}
          />
        ))}
    </ul>
  );
};

export default List;
