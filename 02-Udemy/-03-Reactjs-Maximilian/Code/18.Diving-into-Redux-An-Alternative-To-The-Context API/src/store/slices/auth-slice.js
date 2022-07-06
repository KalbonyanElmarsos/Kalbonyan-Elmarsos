import { createSlice } from "@reduxjs/toolkit";

const initialStateAuth = { isAuthenticated: false };
const AuthSlice = createSlice({
  name: "auth",
  initialState: initialStateAuth,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});
export const authAction = AuthSlice.actions;
export default AuthSlice.reducer;
