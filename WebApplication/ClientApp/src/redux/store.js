import productsReducer from "./products/reducer";
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        products: productsReducer
    }
})