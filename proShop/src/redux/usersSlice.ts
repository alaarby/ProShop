import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type Product from '../data/products';

export type CartItem = Product & { quantity: number };
interface User{
  name: string,
  email: string,
  password: string,
}
interface UsersState{
  users: User[];
  currentUser: User | null;
}

const savedCurrent = localStorage.getItem("currentUser");
const initialState: UsersState = {
  users: [],
  currentUser: savedCurrent ? JSON.parse(savedCurrent) : null,
}

const usersSlice  = createSlice({
  name: 'users',
  initialState,
  reducers: {
    registerUser(state, action:  PayloadAction<User>) {
      state.users.push(action.payload);
    },
    login(state, action: PayloadAction<{email: string; password: string}>){
      const found = state.users.find(
        (u) => u.email === action.payload.email && u.password === action.payload.password
      );
      if(found){
        state.currentUser = found;
        localStorage.setItem("currentUser", JSON.stringify(found.name));
      }else{
        throw new Error("Invalid credentials");
      }
    },
    logout(state){
      state.currentUser = null;
      localStorage.removeItem("currentUser");
    },
    clearUsers(state) {
      state.users = [];
      state.currentUser = null;
      localStorage.removeItem("users");
      localStorage.removeItem("currentUser");
    },
  }
})

export const { registerUser, login, logout, clearUsers } = usersSlice.actions;
export default usersSlice .reducer;