import React from 'react';
import { useTaskContext } from '../hook/useTaskContext';
import { filterValue } from '../helpers/getFilters';

const FilterPanel = () => {
  const { filter, setFilter } = useTaskContext();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.currentTarget.value);
  };
  return (
    <>
      <select value={filter} onChange={handleChange}>
        <option value={filterValue.ALL}>Wszystkie</option>
        <option value={filterValue.DONE}>Wykonane</option>
        <option value={filterValue.TODO}>Niewykonane</option>
      </select>
    </>
  );
};

export default FilterPanel;
