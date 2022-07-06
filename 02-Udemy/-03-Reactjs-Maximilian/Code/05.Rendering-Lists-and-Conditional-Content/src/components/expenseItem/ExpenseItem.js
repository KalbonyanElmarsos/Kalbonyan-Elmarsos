//   -----------------39. Splitting Components Into Multiple Components---------------
import React, { useState } from "react";
import Card from "../card/Card";
import ExpenseDate from "../expenseDate/ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  // let title = props.title;
  const btnHandler = () => {
    // title = "new title";
    setTitle("new title");
    console.log("btn clicked");
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />

        <div className="expense-item__description">
          <h2>{title}</h2>
          {/* <h2>{props.title}</h2> */}

          <div className="expense-item__price">{props.amount}</div>
          <button onClick={btnHandler}> change title</button>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
