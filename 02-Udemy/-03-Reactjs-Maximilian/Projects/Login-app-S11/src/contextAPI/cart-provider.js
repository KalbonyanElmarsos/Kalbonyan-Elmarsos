import React, { useReducer } from "react";

import CartContext from "./cart-context.js";

const initialState = { items: [], amount: 0 };

const Reducer = (prevState, action) => {
  let updatedTotalAmount;
  let updatedItems;

  if (action.type === "ADD_ITEM") {
    const itemIndex = prevState.items.findIndex(
      (item) => item.id === action.payload.id
    );

    const currentItem = prevState.items[itemIndex];
    if (currentItem) {
      const updatedItem = {
        ...currentItem,
        amount: currentItem.amount + action.payload.amount,
      };
      // - take a copy to avoid state mutation
      updatedItems = [...prevState.items];
      updatedItems[itemIndex] = updatedItem;
      // console.log("item exist");
    } else {
      updatedItems = prevState.items.concat(action.payload);
      // console.log("item not exist");
    }
    // - In the 2 actions update the Total cart Amount price
    updatedTotalAmount =
      prevState.amount + action.payload.price * action.payload.amount;
    // console.log(currentItemIndex);
    return { items: updatedItems, amount: updatedTotalAmount };
  }
  if (action.type === "REMOVE_ITEM") {
    const itemIndex = prevState.items.findIndex(
      (item) => item.id === action.payload
    );

    const currentItem = prevState.items[itemIndex];

    if (currentItem) {
      // 1) if item amount more than 1 then just decrease it by 1 {do not forget any way to decrease cart total amount by 1 }
      if (currentItem.amount === 1) {
        console.log(currentItem);
        updatedItems = prevState.items.filter(
          (item) => item.id !== action.payload
        );
        console.log(updatedItems);
        // 2) if item amount ==1 then remove it from the cart { do not forget any way to decrease cart total amount by 1 }
      } else {
        const updatedItem = { ...currentItem, amount: currentItem.amount - 1 };

        updatedItems = [...prevState.items];
        updatedItems[itemIndex] = updatedItem;
      }

      // 3) update total Amount
      updatedTotalAmount = prevState.amount - currentItem.price;

      return { items: updatedItems, amount: updatedTotalAmount };
    } else {
      console.log("item not exist");
    }
  }
  return initialState;
};

const CartProvider = (props) => {
  const [currentState, dispatchStateAction] = useReducer(Reducer, initialState);

  const addItemHandler = (item) => {
    dispatchStateAction({ type: "ADD_ITEM", payload: item });
  };
  const removeItemHandler = (id) => {
    dispatchStateAction({ type: "REMOVE_ITEM", payload: id });
  };
  const cartContext = {
    items: currentState.items,
    amount: currentState.amount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
