import { useDispatch, useSelector } from 'react-redux';
import { FilterWrapper, Input } from './Filter.styled';
import { changeFilter } from '../../redux/filter/filterSlice';

export const FilterField = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <FilterWrapper>
      Filter contacts by name:
      <Input
        name="filter"
        type="text"
        placeholder="Search"
        value={filter}
        onChange={event => dispatch(changeFilter(event.target.value))}
      />
    </FilterWrapper>
  );
};