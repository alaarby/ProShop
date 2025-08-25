import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type Product from "../data/products";

interface WishlistState{
  [userId: string]: Product[];
}

const initialState: WishlistState = {};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleToWishlist(state, action: PayloadAction<{ userId: string; product: Product}>){
      const { userId, product } = action.payload;

      if(!state[userId]){
        state[userId] = [];
      }

      const exist = state[userId].some((p) => p.id === product.id);

      if(!exist){
        state[userId].push(product);
      }
      else{
        state[userId] = state[userId].filter((p) => p.id !== product.id);
      }
    },
    clearWishlist: (state, action: PayloadAction<{ userId: string }>) => {
      const { userId } = action.payload;
      state[userId] = [];
    },
  }
})

export const { toggleToWishlist, clearWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;