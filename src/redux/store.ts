import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './api/baseApi';
import cartReducer from './features/cartSlice'
import filterSlice from './features/filterSlice';
import categoriesSlice from './features/categoriesSlice';
export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        cart: cartReducer,
        filters: filterSlice,
        category: categoriesSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
