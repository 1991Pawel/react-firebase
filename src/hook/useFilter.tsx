import { useTaskContext } from './useTaskContext';
import { CollectionItem } from '../types/types';
import { filterValue } from '../helpers/getFilters';

export const useFilter = () => {
  const { search, tasks, filter } = useTaskContext();

  const filterArray = tasks?.filter((item: CollectionItem) =>
    item.title.toUpperCase().includes(search.toUpperCase())
  );
  if (
    search === '' &&
    filter === filterValue.ALL &&
    tasks?.length === filterArray?.length
  )
    return tasks;
  if (filter === filterValue.TODO) {
    return filterArray?.filter((task: CollectionItem) => !task.isDone);
  }
  if (filter === filterValue.DONE) {
    return filterArray?.filter((task: CollectionItem) => task.isDone);
  }
  return filterArray;
};
