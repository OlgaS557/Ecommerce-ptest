import { configureStore, Middleware } from '@reduxjs/toolkit';
import cartReducer  from '../slices/cartSlice';
import filterReducer from '../slices/filterSlice';
import userReducer from '../slices/userSlice';
//import tokenRefreshMiddleware from './middleware';



export const store = configureStore ({
    reducer:{
        filterReducer,
        cartReducer, 
        userReducer
    },
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(tokenRefreshMiddleware as Middleware),
    
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
