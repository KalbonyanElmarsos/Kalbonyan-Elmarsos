import React from "react";

const CartContext = React.createContext({
  items: [],
  amount: 20,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
