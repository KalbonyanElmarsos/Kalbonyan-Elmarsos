import React from "react";

const CartContext = React.createContext({
  items: [],
  amount: 20,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
