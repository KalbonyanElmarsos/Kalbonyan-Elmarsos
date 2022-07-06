import { useDispatch } from "react-redux";
import { cartActions } from "../../store/slices/cart-slice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id } = props.item;
  const addItemBtnHandler = () => {
    dispatch(cartActions.addItem({ title, total, price, id }));
  };
  const removeItemBtnHandler = () => {
    dispatch(cartActions.removeItem(id));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}
          <span className={classes.item}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemBtnHandler}>-</button>
          <button onClick={addItemBtnHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
