import React from 'react';
import { CollectionItem } from '../types/types';

interface Item {
  item: CollectionItem;
  removeItem: () => void;
  key: string;
}

const ListItem = ({ removeItem, item }: Item) => (
  <li key={item.id}>
    <p>{item.title}</p>
    <button type="button" onClick={removeItem}>
      X
    </button>
  </li>
);

export default ListItem;
