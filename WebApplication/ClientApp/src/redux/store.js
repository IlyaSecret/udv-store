import productsReducer from "./products/reducer";
import cartReducer from "./cart/reducer";
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer
    }
})