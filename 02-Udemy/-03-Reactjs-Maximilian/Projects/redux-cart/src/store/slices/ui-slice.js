import { createSlice } from "@reduxjs/toolkit";

const initialState = { showCart: true, notification: null };
const UISlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle: (prevState) => {
      console.log(prevState.showCart);
      prevState.showCart = !prevState.showCart;
    },
    showNotification: (prevState, action) => {
      prevState.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const UISliceActions = UISlice.actions;
export default UISlice.reducer;
