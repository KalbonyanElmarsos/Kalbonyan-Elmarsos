import React, { useContext } from "react";
import CartContext from "../../contextAPI/cart-context";
import Modal from "../usableCompnents/modal/Modal";

import cardStyles from "./Cart.module.css";
import CartItem from "./cartItem/CartItem";

export default function Cart(props) {
  const cartContext = useContext(CartContext);
  const { items, amount: totalAmount, addItem, removeItem } = cartContext;
  const isNoItems = items.length !== 0;
  const removeItemHandler = (id) => {
    removeItem(id);
  };

  const addItemHandler = (item) => {
    addItem({ ...item, amount: 1 });
  };
  const cartItems = (
    <ul className={cardStyles["cart-items"]}>
      {items.map((item, index) => (
        <CartItem
          key={index}
          amount={item.amount}
          price={item.price}
          name={item.name}
          // onRemove={()=>{removeItemHandler(id)}}
          onRemove={removeItemHandler.bind(null, item.id)}
          // onAdd={()=>{addItemHandler(item)}}
          onAdd={addItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={cardStyles.total}>
        <span>Amount</span>
        <span>$ {totalAmount.toFixed(2)}</span>
      </div>
      <div className={cardStyles.actions}>
        <button className={cardStyles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {isNoItems && <button className={cardStyles.button}>Order</button>}
      </div>
    </Modal>
  );
}
