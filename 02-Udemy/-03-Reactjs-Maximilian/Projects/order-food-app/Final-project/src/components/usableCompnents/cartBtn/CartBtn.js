import React, { useContext, useState, useEffect } from "react";
import CartContext from "../../../contextAPI/cart-context";
import CartIcon from "../cartIcon/CartIcon";

import cartBtnStyles from "./CartBtn.module.css";

export default function CartBtn(props) {
  const [isBumped, setIsBumped] = useState(false);
  const cartContext = useContext(CartContext);
  const { items } = cartContext;
  const totalBadge = cartContext.items.reduce(
    (sum, currentItem) => sum + currentItem.amount,
    0
  );
  useEffect(() => {
    if (items.length > 0) {
      setIsBumped(true);
    }
    const address = setTimeout(() => {
      setIsBumped(false);
    }, 300);
    return () => {
      // Clean up function
      clearTimeout(address);
    };
  }, [items]);

  return (
    <button
      className={`${cartBtnStyles.button} ${
        isBumped ? cartBtnStyles.bump : ""
      }`}
      onClick={props.onClick}
    >
      <span className={`${cartBtnStyles.icon}`}>
        <CartIcon />
      </span>
      <span>Your Card</span>
      <span className={`${cartBtnStyles.badge}`}>{totalBadge}</span>
    </button>
  );
}
