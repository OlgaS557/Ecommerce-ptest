import * as React from 'react';
import { useAppSelector, useAppDispatch } from '../../hook/redux';
import {setSort} from '../../redux/slices/filterSlice';
import { Box, InputLabel, MenuItem, FormControl, Select, SelectChangeEvent } from '@mui/material';
import Raiting from './Rating'

import PriceSlider from './PriceSlider'


// export default function SortPopup() {
//   const [sort, setSort] = React.useState('');

//   const handleChange = (event: SelectChangeEvent) => {
//     setSort(event.target.value as string);
//   };

//   return (
//     <Box sx={{ minWidth: 130, minHeight: 20 }}>
//       <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={sort}
//           label="Sort by"
//           onChange={handleChange}
//         >
//           <MenuItem value={'By price'}>By price</MenuItem>
//           <MenuItem value={'By size'}>By size</MenuItem>
//           <MenuItem value={'By category'}>By category</MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//   );
// }

// type propsType = {
//   value: string,
//   onClickSortItem: (i: string) => void; 
// }

// export default function SortPopup({value, onClickSortItem}: propsType)
export default function SortPopup() {
  const dispatch = useAppDispatch();
  const sort = useAppSelector((state) => state.filterReducer.sort);
  console.log('sort', sort);
 
  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
     dispatch(setSort(event.target.value));
  };

  return (
    <Box sx={{ minWidth: 130, minHeight: 20 }}>
      <FormControl fullWidth>
        <InputLabel >Sort by</InputLabel>
        <Select
          size='small'
          value={sort}
          label="Sort by"
          onChange={handleChange}
        >
          <MenuItem value={'Price: Low-High'}>Price: Low-High</MenuItem>
          <MenuItem value={'Price: High-Low'}>Price: High-Low</MenuItem>
          <MenuItem value={'By discont'}>By discount</MenuItem>
          <MenuItem value={'By rating'}>By rating</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

  // const handleChange = (event: SelectChangeEvent) => {
  //   // onClickSortItem(event.target.sort);
  // };