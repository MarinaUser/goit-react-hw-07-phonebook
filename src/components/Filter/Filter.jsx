import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setFilter } from 'redux/filterSlice';
import { selectValueFilter } from 'redux/selectors'
// import { getFilter } from 'redux/selectors';
import { FilterLabel, FilterInput } from './Filter.styled';


export const Filter = () => {
  const dispatch = useDispatch(setFilter);
  const filter = useSelector(selectValueFilter);

  return (
    <div>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          name="filter"
          value={filter}
          onChange={evt => dispatch(setFilter(evt.target.value))}
          type="text"
        />
      </FilterLabel>
    </div>
  );
};




