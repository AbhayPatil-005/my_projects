import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState: { isAuthenticated: false },
  reducers: {
    login: (state) => { state.isAuthenticated = true; },
    logout: (state) => { state.isAuthenticated = false; },
  },
});

export const { login, logout } = authSlice.actions;

const store  = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authSlice.reducer
  }
});

export default store;