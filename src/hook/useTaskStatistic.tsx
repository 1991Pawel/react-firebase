import { useTaskContext } from './useTaskContext';

export const useTaskStatistic = () => {
  const { tasks } = useTaskContext();
  const totalTasks = tasks?.length;
  const doneTasks = tasks?.filter((task) => task.isDone === true).length;

  return { totalTasks, doneTasks };
};
