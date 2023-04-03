import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Item } from '../../types';

type CartState = {
  items: Item [],
  totalPrice: number
}

const initialState: CartState = {
  items: [],
  totalPrice: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItems (state, action: PayloadAction<Item>) {
      state.items.push(action.payload);
      state.totalPrice = state.items.reduce((sum, item) => {
        return (item.price * state.items.length) + sum;
      }, 0);
    },
    plusItem (state, action: PayloadAction<Item>) {
      const findItem = state.items.find((item) => item.id === action.payload.id);
      if (findItem) {
        //findItem.count++;
      }
    },
    minusItem (state, action: PayloadAction<Item>) {
      const findItem = state.items.find((item) => item.id === action.payload.id);
      if (findItem) {
        //findItem.count - 1 > 1 ? findItem.count-- : 1;
      }
      // state.totalPrice -= findItem.price;
    },

    removeItems (state, action) {
      state.items.filter(item => item.id !== action.payload)
      // const findItem = state.items.find(obj => obj.id === action.payload);
      // state.totalPrice -= findItem.price * findItem.count;
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addItems, plusItem,minusItem, removeItems } = cartSlice.actions;

export default cartSlice.reducer;