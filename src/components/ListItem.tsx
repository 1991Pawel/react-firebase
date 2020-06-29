import React from 'react';
import styled from 'styled-components';
import { CollectionItem } from '../types/types';

const ListItemWrapper = styled.li`
  display: flex;
  font-size: 2rem;
  margin: 2rem;

  button {
    margin-left: 1rem;
  }
`;

interface Item {
  item: CollectionItem;
  removeItem: () => void;
  key: string;
}

const ListItem = ({ removeItem, item }: Item) => (
  <ListItemWrapper key={item.id}>
    <p>{item.title}</p>
    <button type="button" onClick={removeItem}>
      X
    </button>
  </ListItemWrapper>
);

export default ListItem;
