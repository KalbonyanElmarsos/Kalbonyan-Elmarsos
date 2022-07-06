import React, { useState } from "react";
import Output from "./Output";

export default function Greeting() {
  const [showText, setShowText] = useState(false);
  const btnHandler = () => {
    setShowText((prevState) => (prevState = !showText));
  };
  return (
    <div>
      <h2>Hello react-testing</h2>
      {!showText && <Output> testing is very useful</Output>}
      {showText && <Output> text changed</Output>}
      <button
        style={{
          cursor: "pointer",
          backgroundColor: "red",
          color: "#fff",
          padding: "1rem",
        }}
        onClick={btnHandler}
      >
        Change text
      </button>
    </div>
  );
}
