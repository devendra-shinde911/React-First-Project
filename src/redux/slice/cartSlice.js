import { createSlice } from '@reduxjs/toolkit'


const  initialState = {
  cartItems: []
  }

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addInCart: (state, action) => {
        const item = action.payload;
        const existing = state.cartItems.find(i => i.id === item.id);
  
        if (existing) {
          existing.quantity += 1;
        } else {
          state.cartItems.push({ ...item, quantity: 1 });
        }
        
      },

      increaseQuantity: (state, action) => {
        const item = state.cartItems.find(i => i.id === action.payload);
        if (item) {
          item.quantity += 1;         
        }
      },
      decreaseQuantity: (state, action) => {
        const item = state.cartItems.find(i => i.id === action.payload);
        if (item && item.quantity > 1) {
          item.quantity -= 1;
        }
      },

      removeFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
      }
    }

})

export const { addInCart, removeFromCart, increaseQuantity,  decreaseQuantity} = cartSlice.actions

export default cartSlice.reducer