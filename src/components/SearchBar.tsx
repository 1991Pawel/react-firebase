import React from 'react';
import { useTaskContext } from '../hook/useTaskContext';

const SearchBar = () => {
  const { search, setSearch } = useTaskContext();
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Szukaj Zadania"
        value={search}
        onChange={changeHandler}
      />
    </div>
  );
};

export default SearchBar;
