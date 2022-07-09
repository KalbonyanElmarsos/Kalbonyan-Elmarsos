import React, { useState } from "react";

import Card from "../card/Card";
import ExpenseChart from "../expenseChart/ExpenseChart";
import ExpenseItem from "../expenseItem/ExpenseItem";
import ExpensesFilter from "../expensesFilter/ExpensesFilter.js";
import ExpensesList from "../expensesList/ExpensesList";
import "./AllExpenses.css";
function AllExpenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const filterHandler = (value) => {
    setFilterYear(value);
  };

  const filteredItems = props.expenses.filter((item) => {
    // console.log(item.date.getFullYear().toString());
    return item.date.getFullYear().toString() === filterYear;
  });

  let expensesContent = <p>No Expenses found </p>;

  if (filteredItems.length > 0) {
    expensesContent = filteredItems.map((expense, index) => (
      <ExpenseItem
        key={index}
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      />
    ));
  }
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter selectedValue={filterYear} onFilter={filterHandler} />
        {/* {expensesContent} */}
        <ExpenseChart expenses={filteredItems} />
        <ExpensesList expenses={filteredItems} />
      </Card>
    </>
  );
}

export default AllExpenses;

// import React, { useState } from "react";

// import Card from "../card/Card";
// import ExpenseItem from "../expenseItem/ExpenseItem";
// import ExpensesFilter from "../expensesFilter/ExpensesFilter.js";
// import "./AllExpenses.css";
// function AllExpenses(props) {
//   const [filterYear, setFilterYear] = useState("2020");

//   const filterHandler = (value) => {
//     console.log(value);
//     setFilterYear(value);
//   };

//   const filteredItems = props.expenses.filter((item) => {
//     // console.log(item.date.getFullYear().toString());
//     return item.date.getFullYear().toString() === filterYear;
//   });

//   let expensesContent = <p>No Expenses found </p>;

//   if (filteredItems.length > 0) {
//     expensesContent = filteredItems.map((expense, index) => (
//       <ExpenseItem
//         key={index}
//         date={expense.date}
//         title={expense.title}
//         amount={expense.amount}
//       />
//     ));
//   }
//   return (
//     <>
//       <Card className="expenses">
//         <ExpensesFilter selectedValue={filterYear} onFilter={filterHandler} />

//         {expensesContent}

//         {/* {filteredItems.length === 0 && <p>No Expenses found </p>}
//         {filteredItems.length > 0 &&
//           filteredItems.map((expense, index) => (
//             <ExpenseItem
//               key={index}
//               date={expense.date}
//               title={expense.title}
//               amount={expense.amount}
//             />
//           ))} */}

//         {/* {filteredItems.length === 0 ? (
//           <p>No Expenses found </p>
//         ) : (
//           filteredItems.map((expense, index) => (
//             <ExpenseItem
//               key={index}
//               date={expense.date}
//               title={expense.title}
//               amount={expense.amount}
//             />
//           ))
//         )} */}

//         {/* {filteredItems.map((expense, index) => (
//           <ExpenseItem
//             key={index}
//             date={expense.date}
//             title={expense.title}
//             amount={expense.amount}
//           />
//         ))} */}
//       </Card>
//     </>
//   );
// }

// export default AllExpenses;
