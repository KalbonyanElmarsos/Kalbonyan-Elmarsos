import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter-slice.js";
import authReducer from "./slices/auth-slice.js";

// const initialState = { counter: 0, show: true };

// const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     increaseBy5: (prevState, action) => {
//       prevState.counter = prevState.counter + action.payload;
//     },
//     increment: (prevState, action) => {
//       prevState.counter = prevState.counter + 1; // her we explicitly can mutate the state, but implicitly this not happen
//     },
//     decrement: (prevState, action) => {
//       prevState.counter = prevState.counter - 1; // her we explicitly can mutate the state, but implicitly this not happen
//     },
//     toggle: (prevState, action) => {
//       prevState.show = !prevState.show; // her we explicitly can mutate the state, but implicitly this not happen
//     },
//   },
// });
// const initialStateAuth = { isAuthenticated: false };
// const AuthSlice = createSlice({
//   name: "auth",
//   initialState: initialStateAuth,
//   reducers: {
//     login: (state) => {
//       state.isAuthenticated = true;
//     },
//     logout: (state) => {
//       state.isAuthenticated = false;
//     },
//   },
// });

const store = configureStore({
  // reducer: { counter: counterSlice.reducer, auth: AuthSlice.reducer },
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;

// import { createStore } from "redux";

// const reducer = (prevState = { counter: 0, show: false }, action) => {
//   if (action.type === "INCREMENT") {
//     return {
//       counter: prevState.counter + action.payload,
//       show: prevState.show,
//     };
//   }
//   if (action.type === "DECREMENT") {
//     return { counter: prevState.counter - 1, show: prevState.show };
//   }
//   if ((action.type = "TOGGLE")) {
//     return { counter: prevState.counter, show: !prevState.show };
//   }
//   // Default state
//   return prevState;
// };
// const store = createStore(reducer);

// export default store;
