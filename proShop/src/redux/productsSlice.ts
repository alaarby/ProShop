
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type Product from '../data/products';
import { products } from '../data/products';

type State = {
  products: Product[],
  searchQuery: string,
}
const initialState: State = {
  products: products,
  searchQuery: ""
};

const productsSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action:  PayloadAction<Product>) {
      state.products.push(action.payload)
    },
    removeProduct(state, action:  PayloadAction<{id: string}>) {
      const index = state.products.findIndex(product => product.id === action.payload.id);
      if(index !== -1) {
        state.products.splice(index, 1);
      }
    },
    clearProducts(state) {
      state.products = [];
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  }
})

export const { addProduct, removeProduct, clearProducts, setSearchQuery } = productsSlice.actions;
export default productsSlice.reducer;