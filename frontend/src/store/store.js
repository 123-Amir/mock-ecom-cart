import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const exist = state.find(item => item.id === action.payload.id);
      if (exist) {
        exist.qty += action.payload.qty;
      } else {
        state.push(action.payload);
      }
    },
    removeFromCart: (state, action) => state.filter(item => item.id !== action.payload),
    updateQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload.id);
      if (item) item.qty = action.payload.qty;
    },
    clearCart: () => []
  }
});
export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export const store = configureStore({ reducer: { cart: cartSlice.reducer } });
