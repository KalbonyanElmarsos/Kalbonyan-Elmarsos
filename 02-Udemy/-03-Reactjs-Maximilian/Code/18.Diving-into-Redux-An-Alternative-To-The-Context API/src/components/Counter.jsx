import { useSelector, useDispatch } from "react-redux";
// import { counterAction } from "../store/index.js";
import { counterAction } from "../store/slices/counter-slice.js";
import classes from "./Counter.module.css";

const Counter = () => {
  //  to access te main redux store states
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle());
  };

  const incrementBtnHandler = () => {
    dispatch(counterAction.increment());
  };
  const decrementBtnHandler = () => {
    dispatch(counterAction.decrement());
  };
  const increaseBy5Handler = () => {
    dispatch(counterAction.increaseBy5(5));
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {state.counter.show && (
        <div className={classes.value}>{state.counter.counter}</div>
      )}
      <button onClick={incrementBtnHandler}>Increment </button>
      <button onClick={increaseBy5Handler}>Increment By 5 </button>
      <button onClick={decrementBtnHandler}>Decrement </button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

//  - How redux works with class-based component
// import React from "react";
// import { connect } from "react-redux";
// import classes from "./Counter.module.css";

// class Counter extends React.Component {
//   toggleCounterHandler() {}
//   incrementBtnHandler() {
//     this.props.increment();
//   }
//   decrementBtnHandler() {
//     this.props.decrement();
//   }
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <button onClick={this.incrementBtnHandler.bind(this)}>
//           Increment{" "}
//         </button>
//         <button onClick={this.decrementBtnHandler.bind(this)}>
//           Decrement{" "}
//         </button>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "INCREMENT" }),
//     decrement: () => dispatch({ type: "DECREMENT" }),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
