import React from 'react';
import { useTaskContext } from '../hook/useTaskContext';

const FilterPanel = () => {
  const { filter, setFilter } = useTaskContext();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.currentTarget.value);
  };
  return (
    <>
      <select value={filter} onChange={handleChange}>
        <option value="ALL">Wszystkie</option>
        <option value="DONE">Wykonane</option>
        <option value="TODO">Niewykonane</option>
      </select>
    </>
  );
};

export default FilterPanel;
