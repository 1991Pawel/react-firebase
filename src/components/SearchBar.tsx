import React from 'react';
import styled from 'styled-components';
import { useTaskContext } from '../hook/useTaskContext';

const StyledInput = styled.input`
	padding:.5rem;
	width:100%;
	outline:none;
  border: 2px solid ${({ theme }) => theme.colors.primary};
	border-radius:5px;
	display:inline-block;
	box-sizing:border-box;
	transition:0.2s ease all;
  background-color:${({ theme }) => theme.colors.light};
`;

const SearchBar = () => {
  const { search, setSearch } = useTaskContext();
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };

  return (
    <div>
      <StyledInput
        type="text"
        placeholder="Szukaj Zadania"
        value={search}
        onChange={changeHandler}
      />
    </div>
  );
};

export default SearchBar;
