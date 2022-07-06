import React, { useState } from "react";

import "./App.css";
import NewTodo from "./components/newTodo/NewTodo";
import Todos from "./components/todos/Todos";
import Todo from "./models/todo";
import TodoContextProvider from "./store/todos-context";

// const todos = [
//   new Todo("learn typescript"),
//   new Todo("we know react-typescript"),
// ];

function App() {
  return (
    <TodoContextProvider>
      <NewTodo />
      <Todos />
    </TodoContextProvider>
  );
}

export default App;

// import React, { useState } from "react";

// import "./App.css";
// import NewTodo from "./components/newTodo/NewTodo";
// import Todos from "./components/todos/Todos";
// import Todo from "./models/todo";

// // const todos = [
// //   new Todo("learn typescript"),
// //   new Todo("we know react-typescript"),
// // ];

// function App() {
//   const [todos, setTodos] = useState<Todo[]>([]);

//   const addNewTodoHandler = (text: string) => {
//     const newTodo = new Todo(text);

//     setTodos((prevState) => [...prevState, newTodo]);
//   };

//   const removeTodoHandler = (todoId: string) => {
//     setTodos((prevState) => {
//       return prevState.filter((todo) => todo.id !== todoId);
//     });
//   };
//   return (
//     <>
//       <NewTodo onAddNewTodo={addNewTodoHandler} />
//       <Todos items={todos} onRemove={removeTodoHandler} />
//       {/* <Todos items={["type-script", "react, typeScript"]} /> */}
//     </>
//   );
// }

// export default App;
