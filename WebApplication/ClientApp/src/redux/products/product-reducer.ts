import { createSlice } from "@reduxjs/toolkit";

export interface ProductState {
    currentProduct: null
  }

const initialState: ProductState = {
    currentProduct: null
}
const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setCurrentProduct: (state, action) => {
            state.currentProduct = action.payload;
        }
    }
})

export const { setCurrentProduct } = productsSlice.actions
export default productsSlice.reducer;