// ---Assignment 1: Time to Practice: React & Component Basics---
import React, { useState } from "react";
import AllExpenses from "./components/AllExpenses/AllExpenses";
import NewExpense from "./components/newExpense/NewExpense";
const initialExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [displayPanel, setDisplayPanel] = useState(false);
  const addingExpenseHandler = (expense) => {
    setExpenses((prevState) => [...prevState, expense]);
    // console.log(expense);
  };
  return (
    <div>
      {displayPanel ? (
        <NewExpense
          setDisplayPanel={setDisplayPanel}
          onNewExpense={addingExpenseHandler}
        />
      ) : (
        <div className="new-expense__actions center-btn ">
          <button
            onClick={() => {
              setDisplayPanel(true);
            }}
            type="submit"
          >
            Add New expense
          </button>
        </div>
      )}
      <AllExpenses expenses={expenses} />
    </div>
  );
}

export default App;
