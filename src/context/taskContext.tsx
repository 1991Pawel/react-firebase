/* eslint-disable @typescript-eslint/indent */
import React, { useState, createContext } from 'react';
import { CollectionItem } from '../types/types';

interface TaskContext {
  tasks: CollectionItem[] | undefined;
  setTasks: React.Dispatch<React.SetStateAction<CollectionItem[] | undefined>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}
export const TaskContext = createContext<TaskContext | undefined>(undefined);

export const TaskProvider: React.FC = ({ children }) => {
  const [tasks, setTasks] = useState<CollectionItem[]>();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('ALL');

  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, search, setSearch, filter, setFilter }}
    >
      {children}
    </TaskContext.Provider>
  );
};
