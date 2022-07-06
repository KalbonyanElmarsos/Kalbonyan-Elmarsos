import React, { useState } from "react";
import AddUser from "./components/addUser/AddUser";
import UsersList from "./components/usersList/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const usersListHandler = (userName, age) => {
    setUsersList((prevState) => {
      return [...prevState, { userName, age, _id: Math.random().toString() }];
    });
  };

  return (
    <div>
      <AddUser onUsersList={usersListHandler} />
      <UsersList usersList={usersList} />
    </div>
  );
}

export default App;
