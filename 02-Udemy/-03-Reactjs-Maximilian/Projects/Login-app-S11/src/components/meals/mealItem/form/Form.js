import React, { useRef, useState } from "react";
import Input from "../../../usableCompnents/input/Input";

import formStyles from "./Form.module.css";

export default function Form(props) {
  const amountRef = useRef();
  const [isAmountValid, setIsAmountValid] = useState(true);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const amount = +amountRef.current.value;

    if (amount === 0 || amount < 0 || amount > 5) {
      setIsAmountValid(false);
      return;
    }
    props.onAddToCart(amount);
  };
  return (
    <form className={`${formStyles.form}`} onSubmit={onSubmitHandler}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isAmountValid && <p> Invalid Amount plz use value in 1-5</p>}
    </form>
  );
}
