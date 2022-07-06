//  Redux Thunk

import { cartActions } from "./cart-slice";
import { UISliceActions } from "./ui-slice";

// an action will fire automatically another action as a side effect
export const sendingCartRequest = (cart) => {
  // this returned function will execute automatically as a side effect by redux after calling  function
  return async (dispatch) => {
    dispatch(
      UISliceActions.showNotification({
        status: "pending",
        title: "sending.....",
        message: "Cart data is sending now",
      })
    );

    try {
      const res = await fetch(
        "https://react-demo-37e14-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            cartItems: cart.cartItems,
            totalQuantity: cart.totalQuantity,
            totalPrice: cart.totalPrice,
          }),
        }
      );

      dispatch(
        UISliceActions.showNotification({
          status: "success",
          title: "Success sending",
          message: "Cart data sent successfully to DB",
        })
      );
    } catch (err) {
      dispatch(
        UISliceActions.showNotification({
          status: "error",
          title: "Error happen !",
          message: "Sending data failed",
        })
      );
    }
  };
};

export const getCartRequest = () => {
  return async (dispatch) => {
    try {
      dispatch(
        UISliceActions.showNotification({
          status: "pending",
          title: "getting cart.....",
          message: "Fetching cart content",
        })
      );

      const res = await fetch(
        "https://react-demo-37e14-default-rtdb.firebaseio.com/cart.json"
      );
      if (!res.ok) throw new Error("failed to fetch data");
      const resJSON = await res.json();
      console.log(resJSON.cartItems || []);

      dispatch(
        cartActions.replaceCartInDB({
          cartItems: resJSON.cartItems || [],
          totalQuantity: resJSON.totalQuantity || 0,
          totalPrice: resJSON.totalPrice || 0,
        })
      );

      dispatch(
        UISliceActions.showNotification({
          status: "success",
          title: "Success fetching",
          message: "Cart data fetched  successfully from  DB",
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(
        UISliceActions.showNotification({
          status: "error",
          title: "Error happen !",
          message: "failed to get cart data ",
        })
      );
    }
  };
};
