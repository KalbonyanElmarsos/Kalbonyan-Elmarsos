import { createSlice } from "@reduxjs/toolkit";
import { UISliceActions } from "./ui-slice";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
  cartChanged: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      console.log(state);
      const currentItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      // increase total/ totalPrice amount by 1 any way
      state.totalQuantity++;
      state.totalPrice += newItem.price;
      state.cartChanged = true;

      if (!currentItem) {
        state.cartItems.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          title: newItem.title,
          totalPrice: newItem.price,
        });
      } else {
        currentItem.quantity++;
        currentItem.totalPrice = currentItem.totalPrice + newItem.price;
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload; // payload is reserved word we can not change it.
      const currentItem = state.cartItems.find((item) => item.id == itemId);

      // decrease total/ totalPrice amount by 1 any way
      state.totalQuantity--;

      state.totalPrice -= currentItem.price;
      state.cartChanged = true;

      if (currentItem.quantity === 1) {
        // remove item only fromm cart items
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== currentItem.id
        );
      } else {
        //  decrease quantity by 1
        currentItem.quantity--;
        currentItem.totalPrice -= currentItem.price;
        // decrease total item  prices by the item price
        // decrease the cart total price
        //  decrease the cart total quantity by 1
      }
    },
    replaceCartInDB: (state, action) => {
      state.totalQuantity = action.payload.totalQuantity;
      state.totalPrice = action.payload.totalPrice;
      state.cartItems = action.payload.cartItems;
    },
  },
});

// //  Redux Thunk
// // an action will fire automatically another action as a side effect
// export const sendingCartRequest = (cart) => {
//   // this returned function will execute automatically as a side effect by redux after calling  function
//   return async (dispatch) => {
//     dispatch(
//       UISliceActions.showNotification({
//         status: "pending",
//         title: "sending.....",
//         message: "Cart data is sending now",
//       })
//     );

//     try {
//       const res = await fetch(
//         "https://react-demo-37e14-default-rtdb.firebaseio.com/cart.json",
//         {
//           method: "PUT",
//           body: JSON.stringify(cart),
//         }
//       );

//       dispatch(
//         UISliceActions.showNotification({
//           status: "success",
//           title: "Success sending",
//           message: "Cart data sent successfully to DB",
//         })
//       );
//     } catch (err) {
//       if (!res.ok) {
//         dispatch(
//           UISliceActions.showNotification({
//             status: "error",
//             title: "Error happen !",
//             message: "Sending data failed",
//           })
//         );
//       }
//     }
//   };
// };
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
