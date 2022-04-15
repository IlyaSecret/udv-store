import { configureStore } from "@reduxjs/toolkit";
import { setCurrentProduct } from "./products/product-reducer";


export const store = configureStore({
    reducer: {
      products: setCurrentProduct,
    },
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch