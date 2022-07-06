import React from "react";
import ExpenseItem from "../expenseItem/ExpenseItem";
import "./ExpensesList.css";
export default function ExpensesList(props) {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses found</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
}
