import React, { useContext, useRef } from "react";
import { TodosContext } from "../../store/todos-context";

import styles from "./NewTodo.module.css";

const NewTodo: React.FC<{}> = (props) => {
  const { addTodo } = useContext(TodosContext);

  const textRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const textValue = textRef.current!.value; // value maybe null or string
    // const textValue = textRef.current!.value; // value  100% will be a  string

    if (textValue.trim().length === 0) {
      return;
    }
    addTodo(textValue);
    textRef.current!.value = "";
  };
  return (
    <>
      <form className={styles.form} onSubmit={submitHandler}>
        <label htmlFor="text">Enter a text</label>
        <input id="text" type="text" ref={textRef} />
        <br />
        <button>Submit New todo</button>
      </form>
    </>
  );
};

export default NewTodo;

// import React, { useRef } from "react";

// import styles from "./NewTodo.module.css";

// const NewTodo: React.FC<{ onAddNewTodo: (text: string) => void }> = (props) => {
//   const textRef = useRef<HTMLInputElement>(null);
//   const submitHandler = (event: React.FormEvent) => {
//     event.preventDefault();

//     const textValue = textRef.current!.value; // value maybe null or string
//     // const textValue = textRef.current!.value; // value  100% will be a  string

//     if (textValue.trim().length === 0) {
//       return;
//     }
//     props.onAddNewTodo(textValue);
//     textRef.current!.value = "";
//   };
//   return (
//     <>
//       <form className={styles.form} onSubmit={submitHandler}>
//         <label htmlFor="text">Enter a text</label>
//         <input id="text" type="text" ref={textRef} />
//         <br />
//         <button>Submit New todo</button>
//       </form>
//     </>
//   );
// };

// export default NewTodo;
