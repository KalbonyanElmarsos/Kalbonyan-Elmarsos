import { configureStore } from "@reduxjs/toolkit";
import UIReducer from "./slices/ui-slice.js";
import cartReducer from "./slices/cart-slice.js";

const store = configureStore({ reducer: { UI: UIReducer, cart: cartReducer } });
export default store;
