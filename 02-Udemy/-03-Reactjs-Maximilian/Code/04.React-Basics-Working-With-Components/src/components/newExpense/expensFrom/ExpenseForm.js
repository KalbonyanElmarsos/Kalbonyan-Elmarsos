import React, { useState } from "react";
import "./ExpenseForm.css";
export default function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  // const [input, setInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  const titleHandler = (event) => {
    setTitle(event.target.value);

    // setInput({ ...input, title: event.target.value });

    // setInput((prevState) => {
    //   return { ...prevState, title: event.target.value };
    // });
    // console.log(input.title);
  };
  const amountHandler = (event) => {
    setAmount(event.target.value);

    // setInput({ ...input, amount: event.target.value });

    // setInput((prevState) => {
    //   return { ...prevState, amount: event.target.value };
    // });

    // console.log(input.amount);
  };
  const dateHandler = (event) => {
    setDate(event.target.value);

    // setInput({ ...input, date: event.target.value });

    // setInput((prevState) => {
    //   return { ...prevState, date: event.target.value };
    // });
    // console.log(input.date);
  };

  const formHandler = (event) => {
    event.preventDefault();

    const expense = {
      title,
      amount,
      date,
    };
    props.onNewExpense(expense);
    // console.log(expense);
    setAmount("");
    setDate("");
    setTitle("");
  };
  return (
    <form onSubmit={formHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={amountHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={dateHandler}
            min="2020-1-1"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}
