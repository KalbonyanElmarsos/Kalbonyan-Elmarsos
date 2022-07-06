import React from "react";
import ExpenseForm from "./expensFrom/ExpenseForm";
import "./NewExpense.css";
export default function NewExpense(props) {
  const NewExpenseHandler = (expense) => {
    // console.log(expense);
    props.onNewExpense(expense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onNewExpense={NewExpenseHandler} />
    </div>
  );
}
