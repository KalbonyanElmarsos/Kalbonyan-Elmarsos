import React, { useRef, useImperativeHandle } from "react";

import inputStyles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };
  useImperativeHandle(ref, () => {
    return { activate: activate };
  });
  return (
    <div
      className={`${inputStyles.control} ${
        props.isValid === false ? inputStyles.invalid : ""
      }`}
    >
      <label htmlFor={props.d}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        // value={enteredEmail}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});
export default Input;
