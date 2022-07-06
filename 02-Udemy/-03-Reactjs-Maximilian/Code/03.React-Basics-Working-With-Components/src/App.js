// ---Assignment 1: Time to Practice: React & Component Basics---
import React from "react";
import AllExpenses from "./components/AllExpenses/AllExpenses";

function App() {
  const expenses = [
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

  // -----------42. A Closer Look At JSX--------------42. A Closer Look At JSX
  //  this is what happening behind the scenes by react implicitly under the hoods, this is the reason  and why we
  //  in the past needed to import react in every component
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!!!"),
  //   React.createElement(AllExpenses, { expenses })
  // );
  return (
    <div>
      <h2>Let's get started!!!</h2>
      <AllExpenses expenses={expenses} />
    </div>
  );
}

export default App;

// import ExpenseItem from "./components/expenseItem/ExpenseItem";

// function App() {
//   const expenses = [
//     {
//       id: "e1",
//       title: "Toilet Paper",
//       amount: 94.12,
//       date: new Date(2020, 7, 14),
//     },
//     {
//       id: "e2",
//       title: "New TV",
//       amount: 799.49,
//       date: new Date(2021, 2, 12),
//     },
//     {
//       id: "e3",
//       title: "Car Insurance",
//       amount: 294.67,
//       date: new Date(2021, 2, 28),
//     },
//     {
//       id: "e4",
//       title: "New Desk (Wooden)",
//       amount: 450,
//       date: new Date(2021, 5, 12),
//     },
//   ];

//   return (
//     <div>
//       <h2>Let's get started!!!</h2>
//       <ExpenseItem
//         date={expenses[0].date}
//         title={expenses[0].title}
//         amount={expenses[0].amount}
//       ></ExpenseItem>
//       <ExpenseItem
//         date={expenses[1].date}
//         title={expenses[1].title}
//         amount={expenses[1].amount}
//       ></ExpenseItem>
//       <ExpenseItem
//         date={expenses[2].date}
//         title={expenses[2].title}
//         amount={expenses[2].amount}
//       ></ExpenseItem>
//       <ExpenseItem
//         date={expenses[3].date}
//         title={expenses[3].title}
//         amount={expenses[3].amount}
//       ></ExpenseItem>
//     </div>
//   );
// }

// export default App;
