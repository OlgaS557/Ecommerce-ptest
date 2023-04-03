import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import cartReducer  from '../slices/cartSlice';
import filterReducer from '../slices/filterSlice';

// export const store = configureStore ({
// reducer:{cart: cartReducer}
// });



export const store = configureStore ({
    reducer:{
        filterReducer,
        cartReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;