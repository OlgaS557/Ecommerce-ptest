import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hook/redux';
import { setCurrentPage } from '../../redux/slices/filterSlice';

export default function PaginationRounded() {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams(); // Получаем параметры из URL
  const currentPage = useAppSelector((state) => state.filterReducer.currentPage);// Читаем номер страницы из URL или из стэйта
  console.log('searchParams', searchParams);
  console.log('currentPage', currentPage);

  const handlePageChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
    console.log(event, newPage);
    setSearchParams({ page: newPage.toString() }); // Добавляем номер страницы в URL
    dispatch(setCurrentPage(newPage));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Stack spacing={2}>
      <Pagination 
        page={currentPage} 
        onChange={handlePageChange} 
        count={10} 
        size="large" 
        color="primary" 
        shape="rounded" 
      />
    </Stack>
  );
}