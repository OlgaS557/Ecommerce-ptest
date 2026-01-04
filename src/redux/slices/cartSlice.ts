import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../../types';

type CartState = {
  items: Item [],
  totalPrice: number,
}
const CART_ITEMS_KEY = 'cartItems';

const cartItemsFromLocalStorage = localStorage.getItem(CART_ITEMS_KEY);
const totalPrice = localStorage.getItem('totalPrice');

const initialState: CartState = {
  items: cartItemsFromLocalStorage ? JSON.parse(cartItemsFromLocalStorage) : [],
  totalPrice: totalPrice ? parseFloat(totalPrice) : 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItems(state, action: PayloadAction<Item>) {
      state.items.push(action.payload);
      localStorage.setItem(CART_ITEMS_KEY, JSON.stringify(state.items));
      state.totalPrice = state.items.reduce((sum, item) => {
        const discountedPrice = ((100 - item?.discount) / 100 * item?.price) * item.count;
        return discountedPrice + sum;
      }, 0);
      localStorage.setItem('totalPrice', state.totalPrice.toString());
    },
    plusItem(state, action: PayloadAction<Item>) {
      const findItem = state.items.find((item) => item.id === action.payload.id);
      if (findItem !== undefined) {
        findItem.count++;
        state.totalPrice = state.items.reduce((sum, item) => {
          const discountedPrice = ((100 - item?.discount) / 100 * item?.price) * item.count;
          return discountedPrice + sum;
        }, 0);
        localStorage.setItem('totalPrice', state.totalPrice.toString());
      }
    },
    minusItem(state, action: PayloadAction<Item>) {
      const findItem = state.items.find((item) => item.id === action.payload.id);
      if (findItem) {
        if (findItem.count - 1 > 0) {
          findItem.count--;
        } else {
          findItem.count = 1;
          state.totalPrice = findItem.price;
        }
        state.totalPrice = state.items.reduce((sum, item) => {
          const discountedPrice = ((100 - item?.discount) / 100 * item?.price) * item.count;
          return discountedPrice + sum;
        }, 0);
        localStorage.setItem('totalPrice', state.totalPrice.toString());
      }
    },
    removeItems(state, action: PayloadAction<Item>) {
      const removedItem = state.items.find(item => item.id === action.payload.id);
      if (removedItem !== undefined) {
        // state.totalPrice -= removedItem.price * removedItem.count;
        const discountedPrice = ((100 - removedItem.discount) / 100 * removedItem.price) * removedItem.count;
        state.totalPrice -= discountedPrice;
        localStorage.setItem('totalPrice', state.totalPrice.toString());
        // 
      }
      const filteredItems = state.items.filter(item => item.id !== action.payload.id);
      state.items = filteredItems;
      localStorage.setItem(CART_ITEMS_KEY, JSON.stringify(state.items));
    },
  }
})

export const { addItems, plusItem,minusItem, removeItems } = cartSlice.actions;

export default cartSlice.reducer;

