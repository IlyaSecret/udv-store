import productsReducer from "./products/reducer";
import cartReducer from "./cart/reducer";
import userReducer from "./user/reducer";
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        user: userReducer
    }
})