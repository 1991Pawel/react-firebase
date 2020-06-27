import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';
import { useCollection } from '../hook/useCollection';
import { CollectionItem } from '../types/types';

const List = () => {
  const data = useCollection('projects');
  const [posts, setPosts] = useState<CollectionItem[]>([]);
  console.log(posts);
  useEffect(() => {
    setPosts(data);
  }, [data]);

  return (
    <ul>
      {posts && posts.map((item) => <ListItem key={item.id} {...item} />)}
    </ul>
  );
};

export default List;
