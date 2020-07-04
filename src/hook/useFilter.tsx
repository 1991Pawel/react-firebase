import { useTaskContext } from './useTaskContext';
import { CollectionItem } from '../types/types';

export const useFilter = () => {
  const { search, tasks } = useTaskContext();
  return tasks?.filter((item: CollectionItem) =>
    item.title.toUpperCase().includes(search.toUpperCase())
  );
};
