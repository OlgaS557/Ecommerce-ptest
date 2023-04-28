import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FilterState = {
    categoryItem: string,
    priceItem: number,
    sort: string,
    currentPage: number
}

const initialState: FilterState = {
    categoryItem: 'All',
    priceItem: 35,
    sort: '',
    currentPage: 1
}

const filterSlice = createSlice ({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryItem(state, action: PayloadAction<string>) {
            console.log('action',action);
            state.categoryItem = action.payload;
        },
        setPriceItem(state, action: PayloadAction<number>) {
            console.log('action', action);
            state.priceItem = action.payload;
        },
        setSort(state, action: PayloadAction<any>) {
            console.log('action',action);
            state.sort = action.payload;
        },
        setCurrentPage(state, action) {
            console.log('action',action);
            state.currentPage = action.payload;
        },
    },
});

export const {setCategoryItem, setPriceItem, setSort, setCurrentPage } = filterSlice.actions;
export default filterSlice.reducer;

// setSortPriceUp(state, action) {
//     console.log('action',action);
//     state.sortPriceUp = action.payload;
// },
// setSortPriceDown(state, action) {
//     console.log('action',action);
//     state.sortPriceDown = action.payload;
// },
// setSortDiscount(state, action) {
//     console.log('action',action);
//     state.sortDiscount = action.payload;
// },
// setSortRaiting(state, action) {
//     console.log('action',action);
//     state.sortRaiting = action.payload;
// },