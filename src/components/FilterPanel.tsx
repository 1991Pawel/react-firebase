import React from 'react';
import styled from 'styled-components';
import { useTaskContext } from '../hook/useTaskContext';
import { filterValue } from '../helpers/getFilters';

const StyledSelect = styled.select`
  margin-top:.2rem;
  padding:.5rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius:5px;
  background-color:${({ theme }) => theme.colors.light};
  color:${({ theme }) => theme.colors.textDark};

`;


const FilterPanel = () => {
  const { filter, setFilter } = useTaskContext();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.currentTarget.value);
  };
  return (
    <>
      <StyledSelect value={filter} onChange={handleChange}>
        <option value={filterValue.ALL}>Wszystkie</option>
        <option value={filterValue.DONE}>Wykonane</option>
        <option value={filterValue.TODO}>Niewykonane</option>
      </StyledSelect>
    </>
  );
};

export default FilterPanel;
