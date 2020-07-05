import { useTaskContext } from './useTaskContext';
import { CollectionItem } from '../types/types';

export const useFilter = () => {
  const { search, tasks, filter } = useTaskContext();

  const filterArray = tasks?.filter((item: CollectionItem) =>
    item.title.toUpperCase().includes(search.toUpperCase())
  );
  if (
    search === '' &&
    filter === 'ALL' &&
    tasks?.length === filterArray?.length
  )
    return tasks;
  if (filter === 'TODO') {
    return filterArray?.filter((task: CollectionItem) => !task.isDone);
  }
  if (filter === 'DONE') {
    return filterArray?.filter((task: CollectionItem) => task.isDone);
  }
  return filterArray;
};
