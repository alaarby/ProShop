import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type Product from '../data/products';

export type CartItem = Product & { quantity: number };

type State = {
  items: CartItem[],
  totalQuantity: number,
  totalPrice: number,
}
const initialState: State = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action:  PayloadAction<Product>) {
      const { id, price } = action.payload;
      const existiongItem = state.items.find(item => item.id === id);
      if(existiongItem){
        existiongItem.quantity += 1;
      }
      else{
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalPrice += price;
    },
    removeItem(state, action:  PayloadAction<{id: number}>) {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if(index !== -1) {
        const item = state.items[index];
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.items.splice(index, 1);
      }
    },
    incrementQuantity(state, action: PayloadAction<{id: number}>) {
      const item = state.items.find(item => item.id == action.payload.id);
      if(item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += item.price;
      }
    },
    decrementQuantity(state, action: PayloadAction<{id: number}>) {
      const item = state.items.find(item => item.id == action.payload.id);
      if(item) {
        if(item.quantity > 1) {
          item.quantity -= 1;
          state.totalQuantity -= 1;
          state.totalPrice -= item.price;
        }
        else {
          state.totalQuantity -= 1;
          state.totalPrice -= item.price;
          state.items = state.items.filter(i => i.id !== item.id);
        }
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  }
})

export const { addItem, removeItem, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;