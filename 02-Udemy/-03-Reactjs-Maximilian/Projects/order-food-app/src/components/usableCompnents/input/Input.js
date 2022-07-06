import React from "react";

import inputStyles from "./Input.module.css";
// React.forwardRef()
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={inputStyles.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input ref={ref} {...props.input}></input>
    </div>
  );
});
export default Input;
