import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type Product from '../data/products';

export type CartItem = Product & { quantity: number };

type State = {
  items: CartItem[],
  totalQuantity: number,
  totalPrice: number,
  totalPriceWithDiscount: number,
}
const initialState: State = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  totalPriceWithDiscount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action:  PayloadAction<Product>) {
      const { id, price, discount } = action.payload;
      const existiongItem = state.items.find(item => item.id === id);
      if(existiongItem){
        existiongItem.quantity += 1;
      }
      else{
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalPrice += price;
      if(discount != undefined){
        state.totalPriceWithDiscount += price * (1 - discount / 100);
      }
      else{
        state.totalPriceWithDiscount += price;
      }
    },
    removeItem(state, action:  PayloadAction<{id: number}>) {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if(index !== -1) {
        const item = state.items[index];
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        if(item.discount != undefined){
          state.totalPriceWithDiscount -= (item.price * (1 - item.discount / 100)) * item.quantity
        }
        else{
          state.totalPriceWithDiscount -= item.price * item.quantity;
        }
        state.items.splice(index, 1);
      }
    },
    incrementQuantity(state, action: PayloadAction<{id: number}>) {
      const item = state.items.find(item => item.id == action.payload.id);
      if(item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += item.price;
        if(item.discount != undefined){
          state.totalPriceWithDiscount -= (item.price * (1 - item.discount / 100)) * item.quantity
        }
        else{
          state.totalPriceWithDiscount -= item.price * item.quantity;
        }
      }
    },
    decrementQuantity(state, action: PayloadAction<{id: number}>) {
      const item = state.items.find(item => item.id == action.payload.id);
      if(item) {
        if(item.quantity > 1) {
          item.quantity -= 1;
        }
        else {
          state.items = state.items.filter(i => i.id !== item.id);
        }
        state.totalQuantity -= 1;
        state.totalPrice -= item.price;
        if(item.discount != undefined){
          state.totalPriceWithDiscount -= (item.price * (1 - item.discount / 100)) * item.quantity
        }
        else{
          state.totalPriceWithDiscount -= item.price * item.quantity;
        }
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      state.totalPriceWithDiscount = 0;
    },
  }
})

export const { addItem, removeItem, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;