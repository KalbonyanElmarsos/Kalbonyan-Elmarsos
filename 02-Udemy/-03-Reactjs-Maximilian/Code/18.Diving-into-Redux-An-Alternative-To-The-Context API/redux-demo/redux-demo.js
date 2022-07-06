const redux = require("redux");

// reducer responsible about generate new state
const reducer = (prevState = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") return { counter: prevState.counter + 1 };
  if (action.type === "DECREMENT") return { counter: prevState.counter - 1 };
  // Default state
  return prevState;
};

//  store holds all states in your app
const store = redux.createStore(reducer);

const subscribe = () => {
  console.log(store.getState());
};
console.log(store.getState());
store.subscribe(subscribe);
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
