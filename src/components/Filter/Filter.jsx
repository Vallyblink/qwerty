import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/filter/filterSlice';
import { FilterContainer, FilterInput, Label } from './styledFilter';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  console.log('Filter');

  return (
    <FilterContainer>  
      <Label> Find contacts by name!
        <FilterInput
          type="text"
          value={filter}
          onChange={handleFilterChange}
        />
      </Label>
    </FilterContainer>
  );
};

export default Filter;