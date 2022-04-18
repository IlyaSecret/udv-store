import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsInCart: []
  },
  reducers: {
    setProductInCart: (state, action) => {
        state.itemsInCart.push(action.payload);
    },
    deleteProductFromCart: (state, action) => {
        state.itemsInCart = state.itemsInCart.filter(el => el.id != action.payload);
    },
    clearCartItems: (state, action) => {
      state.itemsInCart = [];
    }
  }
});

export const { setProductInCart,  deleteProductFromCart, clearCartItems } = cartSlice.actions;
export default cartSlice.reducer;