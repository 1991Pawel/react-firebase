/* eslint-disable @typescript-eslint/indent */
import React, { useState, createContext } from 'react';
import { CollectionItem } from '../types/types';

interface TaskContext {
  tasks: CollectionItem[] | undefined;
  setTasks: React.Dispatch<React.SetStateAction<CollectionItem[] | undefined>>;
}

export const TaskContext = createContext<TaskContext | undefined>(undefined);

export const TaskProvider: React.FC = ({ children }) => {
  const [tasks, setTasks] = useState<CollectionItem[]>();

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
