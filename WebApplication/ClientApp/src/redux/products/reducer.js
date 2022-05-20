import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async function() {
    console.log("https://localhost:5001")
    const response = await fetch("https://localhost:5001/products/get");
    const data = await response.json();
    return data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    currentProduct: null,
    status: null,
    productsList: [],
    error: null
  },
  reducers: {
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.status = "loading...";
      state.error = null;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = "resolved"
      state.productsList = action.payload;
    },
    [fetchProducts.rejected]: (state, action) => {

    },
  } 
});

export const { setCurrentProduct } = productsSlice.actions;
export default productsSlice.reducer;