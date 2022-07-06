import React, { useContext } from "react";
import Todo from "../../models/todo";
import { TodosContext } from "../../store/todos-context";
import TodoItem from "./todoItem/TodoItem";

import styles from "./Todos.module.css";

const Todos: React.FC<{}> = (props) => {
  const { todos: items, removeTodo } = useContext(TodosContext);

  return (
    <>
      <ul className={styles.todos}>
        {items.map((item, index) => (
          <TodoItem
            key={index}
            text={item.text}
            id={item.id}
            onRemove={removeTodo.bind(null, item.id)}
          />
        ))}
      </ul>
    </>
  );
};
export default Todos;

// import React from "react";
// import Todo from "../../models/todo";
// import TodoItem from "./todoItem/TodoItem";

// import styles from "./Todos.module.css";

// const Todos: React.FC<{ items: Todo[]; onRemove: (id: string) => void }> = (
//   props
// ) => {
//   // const Todos: React.FC<{ items: string[] }> = (props) => {
//   return (
//     <>
//       <ul className={styles.todos}>
//         {props.items.map((item, index) => (
//           <TodoItem
//             key={index}
//             text={item.text}
//             id={item.id}
//             onRemove={props.onRemove.bind(null, item.id)}
//           />
//           // <li key={item.id}>{item.text}</li>
//           // <li>{item}</li>
//         ))}
//       </ul>
//     </>
//   );
// };
// export default Todos;
