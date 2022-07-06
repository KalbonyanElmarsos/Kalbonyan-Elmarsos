import { useState, useEffect } from "react";
import useCounter from "../custom-hooks/useCounter";

import Card from "./Card";

const BackwardCounter = () => {
  const decrease = 0;
  const counter = useCounter(decrease);

  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter - 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
