import { useContext } from 'react';
import { TaskContext } from '../context/taskContext';

export const useTaskContext = () => {
  const ctx = useContext(TaskContext);
  if (ctx === undefined) {
    throw new Error('useCountState must be used within a CountProvider');
  }

  return { ...ctx };
};
