import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsInCart: [],
    quantity:[
    ],
  },
  reducers: {
    setProductInCart: (state, action) => {
        if(!state.quantity.some(el => el.id === action.payload.id)) {
          state.quantity.push({id: action.payload.id, qantyt: 1, cost: action.payload.price})
          state.itemsInCart.push(action.payload);
        }
        else{
          state.quantity[state.quantity.findIndex(el => el.id == action.payload.id)].qantyt = state.quantity[state.quantity.findIndex(el => el.id == action.payload.id)].qantyt + 1;
          state.quantity[state.quantity.findIndex(el => el.id == action.payload.id)].cost +=  action.payload.price;
        }
        
    },
    deleteProductFromCart: (state, action) => {
        state.quantity = state.quantity.filter(el => el.id != action.payload);
        state.itemsInCart = state.itemsInCart.filter(el => el.id != action.payload);
    },
    clearCartItems: (state, action) => {
      state.itemsInCart = [];
      state.quantity = [];
    },
    increaseCartItem: (state, action) => {
      state.quantity[state.quantity.findIndex(el => el.id == action.payload.id)].qantyt = state.quantity[state.quantity.findIndex(el => el.id == action.payload.id)].qantyt + 1;
      state.quantity[state.quantity.findIndex(el => el.id == action.payload.id)].cost +=  action.payload.price;
    },
    decreaseCartItem: (state, action) => {
      if(state.quantity[state.quantity.findIndex(el => el.id == action.payload.id)].qantyt > 1) {
        state.quantity[state.quantity.findIndex(el => el.id == action.payload.id)].qantyt = state.quantity[state.quantity.findIndex(el => el.id == action.payload.id)].qantyt - 1;
        state.quantity[state.quantity.findIndex(el => el.id == action.payload.id)].cost -=  action.payload.price;
      }
    },

  
  }
});

export const { setProductInCart,  deleteProductFromCart, clearCartItems, increaseCartItem, decreaseCartItem } = cartSlice.actions;
export default cartSlice.reducer;