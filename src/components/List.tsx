import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';
import { useCollection } from '../hook/useCollection';
import { CollectionItem } from '../types/types';

const List = () => {
  const data = useCollection('projects');
  const [posts, setPosts] = useState<CollectionItem[]>([]);
  useEffect(() => {
    setPosts(data);
  }, [data]);

  return (
    <ul className="list">
      {posts && posts.map((item) => <ListItem key={item.id} {...item} />)}
    </ul>
  );
};

export default List;
