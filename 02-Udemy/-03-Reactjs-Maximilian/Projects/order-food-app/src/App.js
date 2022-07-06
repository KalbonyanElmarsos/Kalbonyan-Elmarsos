import React, { useState } from "react";

import Cart from "./components/cart/Cart";
import Header from "./components/header/Header";
import Meals from "./components/meals/Meals";
import CartProvider from "./contextAPI/cart-provider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const shoCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };
  return (
    <CartProvider>
      {showCart && <Cart onClose={hideCartHandler} />}
      <Header onShow={shoCartHandler} />
      <Meals />
    </CartProvider>
  );
}

export default App;
