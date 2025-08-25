import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from "uuid";

interface User{
  id: string,
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
    registerUser(state, action:  PayloadAction<{ name: string; email: string; password: string }>) {
      const { name, email, password } = action.payload;
      const newUser: User = {
        id: uuidv4(),
        name,
        email,
        password,
      };
      state.users.push(newUser);

      state.users.push(newUser);
    },
    login(state, action: PayloadAction<{email: string; password: string}>){
      const { email, password } = action.payload;
      const found = state.users.find(
        (u) => u.email === email && u.password === password
      );
      if(found){
        state.currentUser = found;
        localStorage.setItem("currentUser", JSON.stringify(found));
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