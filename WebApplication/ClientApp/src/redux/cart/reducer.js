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
    }
  }
});

export const { setProductInCart,  deleteProductFromCart} = cartSlice.actions;
export default cartSlice.reducer;