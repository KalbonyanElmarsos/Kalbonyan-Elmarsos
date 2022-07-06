import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, show: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increaseBy5: (prevState, action) => {
      prevState.counter = prevState.counter + action.payload;
    },
    increment: (prevState, action) => {
      prevState.counter = prevState.counter + 1; // her we explicitly can mutate the state, but implicitly this not happen
    },
    decrement: (prevState, action) => {
      prevState.counter = prevState.counter - 1; // her we explicitly can mutate the state, but implicitly this not happen
    },
    toggle: (prevState, action) => {
      prevState.show = !prevState.show; // her we explicitly can mutate the state, but implicitly this not happen
    },
  },
});
export const counterAction = counterSlice.actions;

export default counterSlice.reducer;
