import { configureStore } from '@reduxjs/toolkit';
import basketSlice from './slices/basketSlice';

const store= configureStore({
    reducer: {
       basket: basketSlice
    },
    devTools: process.env.NODE_ENV !== 'production',
 })


export default store;