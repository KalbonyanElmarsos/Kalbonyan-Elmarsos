import React, { MouseEventHandler } from "react";

import styles from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  id: string;
  onRemove: () => void;
}> = (props) => {
  return (
    <li className={styles.item} onClick={props.onRemove}>
      {props.text}
    </li>
  );
};

export default TodoItem;

// import React, { MouseEventHandler } from "react";

// import styles from "./TodoItem.module.css";

// const TodoItem: React.FC<{
//   text: string;
//   id: string;
//   onRemove: () => void;
// }> = (props) => {
//   return (
//     <li className={styles.item} onClick={props.onRemove}>
//       {props.text}
//     </li>
//   );
// };

// export default TodoItem;
