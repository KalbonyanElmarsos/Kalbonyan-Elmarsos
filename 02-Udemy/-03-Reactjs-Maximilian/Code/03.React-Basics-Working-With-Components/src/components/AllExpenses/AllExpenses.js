import Card from "../card/Card";
import ExpenseItem from "../expenseItem/ExpenseItem";
import "./AllExpenses.css";
function AllExpenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        date={props.expenses[0].date}
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.expenses[1].date}
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.expenses[2].date}
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.expenses[3].date}
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
      ></ExpenseItem>
    </Card>
  );
}

export default AllExpenses;
