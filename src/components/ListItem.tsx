import React from 'react';
import { CollectionItem } from '../types/types';

const ListItem = (item: CollectionItem) => <li key={item.id}>{item.title}</li>;

export default ListItem;
