import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import usersReducer from './usersSlice';
import productsReducer from './productsSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    users: usersReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;