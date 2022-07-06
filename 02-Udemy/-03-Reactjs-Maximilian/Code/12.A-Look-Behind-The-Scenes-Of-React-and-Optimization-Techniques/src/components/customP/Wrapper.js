import React from "react";

export default function Wrapper(props) {
  console.log("Wrapper comp running");
  return <p>{props.children}</p>;
}
