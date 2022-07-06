import React from "react";

export default function Input(props) {
  return (
    <div
      className={
        !props.valueIsValid && props.valueIsTouched
          ? `form-control invalid`
          : "form-control"
      }
    >
      <label htmlFor={props.id}>{props.title}</label>
      <input
        value={props.value}
        onChange={props.valueHandler}
        onBlur={props.blurHandler}
        type={props.type}
        id={props.id}
      />
      {!props.valueIsValid && props.valueIsTouched && (
        <p className={"error-text"}>{props.errorMesg}</p>
      )}
    </div>
  );
}
