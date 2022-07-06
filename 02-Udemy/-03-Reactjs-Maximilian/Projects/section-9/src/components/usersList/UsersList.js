import React from "react";

import listStyles from "./UsersList.module.css";

import Card from "../UI/card/Card";

export default function UsersList(props) {
  return (
    <Card className={listStyles.users}>
      <ul>
        {props.usersList.length > 0 &&
          props.usersList.map((user) => (
            <li key={user._id}>
              {user.userName} ({user.age} years old)
            </li>
          ))}
        {props.usersList.length === 0 && <h2>No users till now</h2>}
      </ul>
    </Card>
  );
}
