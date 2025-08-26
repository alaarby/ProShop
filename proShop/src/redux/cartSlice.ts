import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type Product from '../data/products';

export type CartItem = Product & { quantity: number };

interface UserCart{
  items: CartItem[],
  totalQuantity: number,
  totalPrice: number,
  totalPriceWithDiscount: number,
}
interface State {
  [userId: string]:UserCart
}
const initialState: State = {};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action:  PayloadAction<{ userId: string; product: Product }>) {
      const { userId, product } = action.payload;
      const { id, price, discount} = product;

      if(!state[userId]){
        state[userId] = {
          items: [],
          totalQuantity: 0,
          totalPrice: 0,
          totalPriceWithDiscount: 0,
        }
      }

      const cart = state[userId];
      const existiongItem = cart.items.find(item => item.id === id);
      if(existiongItem){
        existiongItem.quantity += 1;
      }
      else{
        cart.items.push({ ...product, quantity: 1 });
      }

      cart.totalQuantity += 1;
      cart.totalPrice += price;
      if(discount != undefined){
        cart.totalPriceWithDiscount += price * (1 - discount / 100);
      }
      else{
        cart.totalPriceWithDiscount += price;
      }
    },
    removeItem(state, action:  PayloadAction<{ userId: string; id: number}>) {
      const { userId, id } = action.payload;
      const cart = state[userId];
      if(!cart) return;

      const index = cart.items.findIndex(item => item.id === id);
      if(index !== -1) {
        const item = cart.items[index];
        cart.totalQuantity -= item.quantity;
        cart.totalPrice -= item.price * item.quantity;
        if(item.discount != undefined){
          cart.totalPriceWithDiscount -= (item.price * (1 - item.discount / 100)) * item.quantity
        }
        else{
          cart.totalPriceWithDiscount -= item.price * item.quantity;
        }
        cart.items.splice(index, 1);
      }
      },
      incrementQuantity(state, action: PayloadAction<{ userId: string; id: number}>) {
        const { userId, id } = action.payload;
        const cart = state[userId];
        if(!cart) return;

        const item = cart.items.find(item => item.id == id);
        if(item) {
          item.quantity += 1;
          cart.totalQuantity += 1;
          cart.totalPrice += item.price;
          if(item.discount != undefined){
            cart.totalPriceWithDiscount -= (item.price * (1 - item.discount / 100)) * item.quantity
          }
          else{
            cart.totalPriceWithDiscount -= item.price * item.quantity;
          }
        }
      },
      decrementQuantity(state, action: PayloadAction<{ userId: string; id: number }>) {
        const { userId, id } = action.payload;
        const cart = state[userId];
        if (!cart) return;

        const item = cart.items.find(item => item.id == id);
        if(item) {
          if(item.quantity > 1) {
            item.quantity -= 1;
          }
          else {
            cart.items = cart.items.filter(i => i.id !== item.id);
          }
          cart.totalQuantity -= 1;
          cart.totalPrice -= item.price;
          if(item.discount != undefined){
            cart.totalPriceWithDiscount -= (item.price * (1 - item.discount / 100)) * item.quantity
          }
          else{
            cart.totalPriceWithDiscount -= item.price * item.quantity;
          }
        }
      },
      clearCart(state, action: PayloadAction<{ userId: string }>) {
        const { userId } = action.payload;
        state[userId] = {
          items: [],
          totalQuantity: 0,
          totalPrice: 0,
          totalPriceWithDiscount: 0,
      }
      console.log("hi");
    }
  }
})

export const { addItem, removeItem, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;