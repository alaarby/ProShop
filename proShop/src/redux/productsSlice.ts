
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type Product from '../data/products';
import { products } from '../data/products';

type State = {
  products: Product[],
}
const initialState: State = {
  products: products,
};

const productsSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action:  PayloadAction<Product>) {
      state.products.push(action.payload)
    },
    removeProduct(state, action:  PayloadAction<{id: number}>) {
      const index = state.products.findIndex(product => product.id === action.payload.id);
      if(index !== -1) {
        state.products.splice(index, 1);
      }
    },
    clearProducts(state) {
      state.products = [];
    },
  }
})

export const { addProduct, removeProduct, clearProducts } = productsSlice.actions;
export default productsSlice.reducer;