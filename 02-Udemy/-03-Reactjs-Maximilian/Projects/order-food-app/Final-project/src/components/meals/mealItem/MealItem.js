import React, { useContext } from "react";
import CartContext from "../../../contextAPI/cart-context";
import Form from "./form/Form";

import mealStyles from "./MealItem.module.css";

export default function MealItem(props) {
  const cartContext = useContext(CartContext);
  const { addItem } = cartContext;
  const addToCartHandler = (amount) => {
    // console.log(props.meal);
    const item = {
      id: props.meal.id,
      name: props.meal.name,
      price: props.meal.price,
      amount: amount,
    };
    addItem(item);
  };
  return (
    <li className={`${mealStyles.meal}`}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={`${mealStyles.description}`}>
          {props.meal.description}
        </div>
        <div className={`${mealStyles.price}`}>{`${props.meal.price.toFixed(
          2
        )}`}</div>
      </div>
      <div>
        <Form onAddToCart={addToCartHandler} id={props.meal.id} />
      </div>
    </li>
  );
}
