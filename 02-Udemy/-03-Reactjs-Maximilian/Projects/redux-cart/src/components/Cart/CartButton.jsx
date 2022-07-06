import { useDispatch, useSelector } from "react-redux";
import { UISliceActions } from "../../store/slices/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const { totalQuantity } = useSelector((state) => state.cart);
  const cartBtnHandler = () => {
    dispatch(UISliceActions.toggle());
  };
  UISliceActions;
  return (
    <button onClick={cartBtnHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
