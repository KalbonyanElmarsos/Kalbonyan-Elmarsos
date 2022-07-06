import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  console.log("Custom Btn running now");
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
// export default Button;
