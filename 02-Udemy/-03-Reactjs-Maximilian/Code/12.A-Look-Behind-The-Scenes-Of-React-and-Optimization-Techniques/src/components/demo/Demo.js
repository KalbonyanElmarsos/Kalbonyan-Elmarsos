import React, { useMemo } from "react";

import classes from "./Demo.module.css";

const Demo = (props) => {
  const { items } = props;

  console.log("Demo RUNNING");
  const sortedList = useMemo(() => {
    items.sort((a, b) => {
      console.log("sorting");
      return a - b;
    });
  }, [items]);

  // const sortedList = items.sort((a, b) => {
  //   console.log("sorting");
  //   return a - b;
  // });
  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Demo);
