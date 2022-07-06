// import {use}from 'react-redux'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Notification from "./components/notification/Notification";
import Products from "./components/Shop/Products";
import {
  sendingCartRequest,
  getCartRequest,
} from "./store/slices/cart-actions";
// import { UISliceActions } from "./store/slices/ui-slice";

function App() {
  // const dispatch= useDispatch()
  const { showCart, notification } = useSelector((state) => state.UI);
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartRequest());
  }, []);

  useEffect(() => {
    // if cart empty then do not send any requests
    if (cart.cartItems.length !== 0) {
      // redux thunk which is an action that  let redux fire another action automatically by calling a first action
      if (cart.cartChanged) dispatch(sendingCartRequest(cart)); // the returned action fired automatically by redux
    }
  }, [cart, dispatch]);

  //  how we use  useEffect to Handle redux  side effect inside the component .... another way by using redux thunk
  // useEffect(() => {
  //   const request = async () => {
  //     dispatch(
  //       UISliceActions.showNotification({
  //         status: "pending",
  //         title: "sending.....",
  //         message: "Cart data is sending now",
  //       })
  //     );
  //     const res = await fetch(
  //       "https://react-demo-37e14-default-rtdb.firebaseio.com/cart.json",
  //       {
  //         method: "PUT",
  //         body: JSON.stringify(cart),
  //       }
  //     );

  //     if (!res.ok) {
  //       dispatch(
  //         UISliceActions.showNotification({
  //           status: "error",
  //           title: "Error happen !",
  //           message: "Sending data failed",
  //         })
  //       );
  //     }

  //     const resJSON = await res.json();

  //     dispatch(
  //       UISliceActions.showNotification({
  //         status: "success",
  //         title: "Success sending",
  //         message: "Cart data sent successfully to DB",
  //       })
  //     );
  //   };
  //   // if cart empty then do not send any requests
  //   if (cart.cartItems.length !== 0) {
  //     request().catch((err) => {
  //       dispatch(
  //         UISliceActions.showNotification({
  //           status: "error",
  //           title: "Error happen  ",
  //           message: "something went wrong now ",
  //         })
  //       );
  //     });
  //   }
  // }, [cart]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
