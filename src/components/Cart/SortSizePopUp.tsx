import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hook/redux';
import { setSort } from '../../redux/slices/filterSlice';


export default function SortSizePopup() {
  const dispatch = useAppDispatch();
  const sort = useAppSelector((state) => state.filterReducer.sort);
  console.log('sort', sort);

  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
     dispatch(setSort(event.target.value));
  };

  return (
    <Box sx={{ minWidth: 110 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Size</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="Size"
          onChange={handleChange}
        >
          <MenuItem value={'XXL'}>XXL</MenuItem>
          <MenuItem value={'XL'}>XL</MenuItem>
          <MenuItem value={'L'}>L</MenuItem>
          <MenuItem value={'M'}>M</MenuItem>
          <MenuItem value={'S'}>S</MenuItem>
          <MenuItem value={'XS'}>XS</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}