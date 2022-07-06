import React, { useContext, useState } from "react";
import CartContext from "../../contextAPI/cart-context";
import FormCheckout from "../form/FormCheckout";
import Modal from "../usableCompnents/modal/Modal";

import cardStyles from "./Cart.module.css";
import CartItem from "./cartItem/CartItem";

export default function Cart(props) {
  const [displayForm, setDisplayFrom] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const cartContext = useContext(CartContext);
  const {
    items,
    amount: totalAmount,
    addItem,
    removeItem,
    clearCart,
  } = cartContext;

  const isNoItems = items.length !== 0;
  const removeItemHandler = (id) => {
    removeItem(id);
  };

  const orderHandler = (event) => {
    setDisplayFrom(true);
  };
  const addItemHandler = (item) => {
    addItem({ ...item, amount: 1 });
  };

  const orderSubmitHandler = async (userOrderData) => {
    console.log(userOrderData);

    await fetch(
      "https://react-demo-37e14-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({ userData: userOrderData, orderItems: items }),
        headers: { "Content-type": "application/json" },
      }
    );
    setIsSubmitted(true);
    clearCart();
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

  const btns = !displayForm && (
    <div className={cardStyles.actions}>
      <button className={cardStyles["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {isNoItems && (
        <button className={cardStyles.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const modalContent = (
    <>
      {cartItems}
      <div className={cardStyles.total}>
        <span>Amount</span>
        <span>$ {totalAmount.toFixed(2)}</span>
      </div>
      {displayForm && (
        <FormCheckout
          onOrder={orderSubmitHandler}
          onCloseForm={props.onClose}
        />
      )}
      {btns}
    </>
  );
  const successMesg = (
    <>
      <p>Your order submitted successfully</p>
      <div className={cardStyles.actions}>
        <button className={cardStyles.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitted && modalContent}
      {isSubmitted && successMesg}
    </Modal>
  );
}
