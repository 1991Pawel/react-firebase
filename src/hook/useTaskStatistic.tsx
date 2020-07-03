// eslint-disable-next-line import/named
import { useTaskContext } from './useTaskContext';
import { CollectionItem } from '../types/types';

export const useTaskStatistic = () => {
  const { tasks } = useTaskContext();
  let totalTasks = 0;
  let doneTasks = 0;
  let procent: string = '0';
  if (tasks !== undefined && tasks.length) {
    totalTasks = tasks.length;
    doneTasks = tasks.filter((task: CollectionItem) => task.isDone === true)
      .length;
    procent = ((doneTasks * 100) / totalTasks).toFixed();
  }
  return { totalTasks, doneTasks, procent };
};
