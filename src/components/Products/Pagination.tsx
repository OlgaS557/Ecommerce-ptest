import * as React from 'react';
import { useAppSelector, useAppDispatch } from '../../hook/redux';
import {setCurrentPage} from '../../redux/slices/filterSlice';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

// type propsType = {
//     value: number;
//     onChangePage: (event: React.ChangeEvent<unknown>, page: number) => void;
// }



export default function PaginationRounded() {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state: any) => state.filterReducer.currentPage);
console.log('currentPage', currentPage)

  const handleChange = (event: React.ChangeEvent<unknown>, currentPage: any) => {
   console.log(event, currentPage)
    dispatch(setCurrentPage(currentPage));
  };

    return (
      <Stack spacing={2}>
        <Pagination onChange={handleChange} count={10} size="large" color="primary" shape="rounded" />
      </Stack>
    );
  }