import React from 'react';
import styled, { css } from 'styled-components';
import BinIcon from '../assets/bin.svg';
import TickIcon from '../assets/tick.svg';
import { CollectionItem } from '../types/types';
import { getData } from '../helpers/getData';

const ListItemWrapper = styled.li<{ isDone: boolean }>`
  position: relative;
  margin: 1rem 0;
  padding: 1rem 0.5rem;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.light};
  list-style: none;
  display: grid;
  transition: 0.5s background-color;
  grid-template-columns: 1fr 0.5fr;
  grid-template-rows: 1fr min-content;
  ${({ isDone }) =>
    isDone &&
    css`
      background-color: #b4ffcf;
    `};
`;
const ListItemContent = styled.h3`
  margin: 1rem 0;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.fontWeight.semi};
  word-break: break-word;
  grid-row: 1 / span 1;
  grid-column: 1 / span 2;
`;
const ButtonWrapper = styled.div`
  grid-row: 2 / span 1;
  justify-self: end;
`;

const ListItemButton = styled.button`
  height: 1.2rem;
  width: 1.2rem;
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.2s opacity;

  &:last-of-type {
    margin-left: 0.6rem;
  }

  &:hover {
    opacity: 0.7;
  }

  img {
    height: 100%;
    width: 100%;
  }
`;
const ListItemData = styled.div`
  font-size: 0.7rem;
  font-weight: ${({ theme }) => theme.fontWeight.semi};
  color: ${({ theme }) => theme.colors.dark};
  grid-row: 2 / span 1;
  grid-column: 1 / span 1;
`;
const ListItemStatus = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  color: ${({ theme }) => theme.colors.light};
  background: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.semi};
  padding: 0.3rem;
  transform: translate(0, 50%);
`;

interface Item {
  item: CollectionItem;
  removeItem: () => void;
  doneItem: () => void;
  key: string;
}

const ListItem = ({ doneItem, removeItem, item }: Item) => {
  const { data, hours, minuts } = getData(item.createdAt.seconds);
  return (
    <ListItemWrapper isDone={item.isDone} key={item.id}>
      <ListItemContent>{item.title}</ListItemContent>
      <ListItemData>
        {`${hours}:${minuts}`}
        <span> {data}</span>
      </ListItemData>
      <ButtonWrapper>
        <ListItemButton type="button" onClick={doneItem}>
          <img src={TickIcon} alt="" />
        </ListItemButton>
        <ListItemButton type="button" onClick={removeItem}>
          <img src={BinIcon} alt="" />
        </ListItemButton>
      </ButtonWrapper>
      <ListItemStatus>{item.isDone ? 'Zrobione' : 'Aktywne'}</ListItemStatus>
    </ListItemWrapper>
  );
};

export default ListItem;
