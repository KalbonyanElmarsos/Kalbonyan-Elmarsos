import { useReducer } from "react";

const reducerCallBack = (prevState, action) => {
  if (action.type === "TOUCHED") {
    return { ...prevState, isTouched: true };
  }
  if (action.type === "NEW_VALUE") {
    return { ...prevState, value: action.value };
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }
  return initialState;
};

const initialState = { value: "", isTouched: false };

const useInput = (validateFunc) => {
  const [state, dispatchState] = useReducer(reducerCallBack, initialState);
  const { value, isTouched } = state;

  const valueHandler = (event) => {
    if (value.trim().length === 1) {
      dispatchState({ type: "TOUCHED", isTouched: true });
    }
    dispatchState({ type: "NEW_VALUE", value: event.target.value });
  };
  const isValid = validateFunc(value);
  const blurHandler = () => {
    dispatchState({ type: "TOUCHED", isTouched: true });
  };
  const reset = () => {
    dispatchState({ type: "RESET", payload: null });
  };
  return { value, isValid, isTouched, valueHandler, blurHandler, reset };
};

export default useInput;

// import { useState } from "react";

// const useInput = (validateFunc) => {
//   const [value, setValue] = useState("");
//   const [isTouched, setIsTouched] = useState(false);
//   const valueHandler = (event) => {
//     if (value.trim().length === 1) {
//       setIsTouched(true);
//     }
//     setValue(event.target.value);
//   };
//   const isValid = validateFunc(value);
//   const blurHandler = () => {
//     setIsTouched(true);
//   };
//   const reset = () => {
//     setValue("");
//     setIsTouched(false);
//   };
//   return { value, isValid, isTouched, valueHandler, blurHandler, reset };
// };

// export default useInput;
