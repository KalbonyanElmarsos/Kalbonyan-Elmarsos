import React from "react";
import Wrapper from "./Wrapper";

const CustomP = (props) => {
  console.log("custom P running ");
  return <Wrapper>{props.show ? "Hey im the hidden P" : ""}</Wrapper>;
  // return <p>{props.show ? "Hey im the hidden P" : ""}</p>;
};
export default React.memo(CustomP);
// export default CustomP;
