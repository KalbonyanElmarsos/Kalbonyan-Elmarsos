//   -----------------39. Splitting Components Into Multiple Components---------------
import Card from "../card/Card";
import ExpenseDate from "../expenseDate/ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>

        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;

//   -----------------36. Outputting Dynamic Data & Working with Expressions in JSX---------------
//   -----------------37. Passing Data via "props"---------------
//   -----------------38. Adding "normal" JavaScript Logic to Components---------------
// import "./ExpenseItem.css";

// function ExpenseItem(props) {
//   /*const dateExp = new Date(2022, 4, 17);
//   const titleExp = "Car Insurance";
//   const priceExp = "$3000";*/
//   const month = props.date.toLocaleString("en-US", { month: "long" });
//   const day = props.date.toLocaleString("en-US", { day: "2-digit" });
//   const year = props.date.getFullYear();
//   return (
//     <div className="expense-item">
//       {/* <div>{dateExp.toISOString()}</div> */}
//       {/* <div>{props.date.toISOString()}</div> */}
//       <div>
//         <div>{month}</div>
//         <div>{day}</div>
//         <div>{year}</div>
//       </div>
//       <div className="expense-item__description">
//         {/* <h2>{titleExp}</h2> */}
//         <h2>{props.title}</h2>
//         {/* <div className="expense-item__price">{priceExp}</div> */}
//         <div className="expense-item__price">{props.amount}</div>
//       </div>
//     </div>
//   );
// }

// export default ExpenseItem;
