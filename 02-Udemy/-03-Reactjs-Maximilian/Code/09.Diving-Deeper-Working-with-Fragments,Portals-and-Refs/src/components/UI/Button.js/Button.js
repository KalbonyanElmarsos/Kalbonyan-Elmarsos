import React from "react";

import btnStyles from "./Button.module.css";

export default function Button(props) {
  return (
    <button
      className={btnStyles.button}
      type={props.type ? props.type : "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
