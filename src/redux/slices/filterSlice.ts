import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FilterState = {
    categoryItems: Array<string>,
    priceItem: Array<{
        Label: string,
        valueFrom: number,
        valueTo: number,
    }>,
    brandItem: Array<string>,
    gender: string,
    sort: string,
    currentPage: number,
    searchQuery: string,

}

const initialState: FilterState = {
    categoryItems: ['All'],
    priceItem: [{
        Label: '',
        valueFrom: 0,
        valueTo: Infinity,
    }],
    brandItem: [''],
    gender: '',
    sort: '',
    currentPage: 1,
    searchQuery: '',

}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {      
        setCategoryItem(state, action: PayloadAction<string>) {
            // if (action.payload.includes('All')) { // Проверяем наличие "All" в массиве
            //     state.categoryItems = ['All'];
            // } else if (state.categoryItems.some(item => action.payload.includes(item))) {
            //     state.categoryItems = state.categoryItems.filter(item => !action.payload.includes(item));
            //      // Если категория была выбрана(диселект) и она не 'All', удаляем ее из списка
            //      if (state.categoryItems.length === 0) {
            //         state.categoryItems.push('All');
            //         // Если список категорий пуст, возвращаем 'All'
            //     }
            // } else {
            //     state.categoryItems = [...state.categoryItems.filter(item => item !== 'All'), ...action.payload];
            //     // Если другая категория выбрана, снимаем выбор с 'All' и добавляем выбранные категории 
                
            // }
            //-----------------------
            if (action.payload === 'All') {
                state.categoryItems = ['All'];
            } else if (state.categoryItems.includes(action.payload)) {
                state.categoryItems = state.categoryItems.filter(item => item !== action.payload);
                // Если категория была выбрана(диселект) и она не 'All', удаляем ее из списка
                if (state.categoryItems.length === 0) {
                    state.categoryItems.push('All');
                    // Если список категорий пуст, возвращаем 'All'
                }
            } else {
                state.categoryItems = state.categoryItems.filter(item => item !== 'All');
                // Если другая категория выбрана, снимаем выбор с 'All'
                state.categoryItems.push(action.payload);
            }
        },
        setPriceItem(state, action: PayloadAction<Array<{ Label: string; valueFrom: number; valueTo: number }>>) {            
            console.log('action', action);
            // Если пользователь не выбрал ни одного диапазона, оставляем "по умолчанию"
            state.priceItem = action.payload.length > 0 
            ? action.payload.filter(p => p.valueTo !== Infinity) // Убираем "бесконечность"
            : [{ Label: '', valueFrom: 0, valueTo: Infinity }];
            //-------------------------------
            // const isFilterActive = state.priceItem.valueFrom === valueFrom && state.priceItem.valueTo === valueTo;

            // if (isFilterActive) {
            //     state.priceItem = {
            //         Label: '',
            //         valueFrom: 0,
            //         valueTo: Infinity
            //     };
            // } else {
            //     state.priceItem = action.payload;
            // }
   
        },
        setBrandItem(state, action: PayloadAction<Array<string>>) {
            const selectedBrands = action.payload.filter(brand => brand !== '');

            if (selectedBrands.length === 0) {
                // Если не выбрано ни одного бренда, отменяем фильтрацию
                state.brandItem = [];
            } else {
                state.brandItem = selectedBrands;
            }

        },
        setGender(state, action: PayloadAction<string>) {
            state.gender = action.payload;
        },
        setSort(state, action: PayloadAction<string>) {
            console.log('action', action);
            state.sort = action.payload;
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            console.log('action', action);
            state.currentPage = action.payload;
        },
        setSearchQuery(state, action: PayloadAction<string>) {
            state.searchQuery = action.payload;
        },

    },
});

export const { setCategoryItem, setPriceItem, setBrandItem, setGender, setSort, setCurrentPage, setSearchQuery } = filterSlice.actions;
export default filterSlice.reducer;

// setBrandItem(state, action: PayloadAction<Array<string>>) {
//     const selectedBrands = action.payload.filter(brand => brand !== '');

//     if (selectedBrands.length === 0) {
//         // Если не выбрано ни одного бренда, отменяем фильтрацию
//         state.brandItem = [];
//     } else {
//         state.brandItem = selectedBrands;
//     }

// },