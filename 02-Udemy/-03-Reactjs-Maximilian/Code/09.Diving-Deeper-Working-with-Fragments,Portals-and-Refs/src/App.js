import React, { useState } from "react";
import AddUser from "./components/addUser/AddUser";
import Wrapper from "./components/UI/wrapper/Wrapper";
import UsersList from "./components/usersList/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const usersListHandler = (userName, age) => {
    setUsersList((prevState) => {
      return [...prevState, { userName, age, _id: Math.random().toString() }];
    });
  };

  return (
    <Wrapper>
      <AddUser onUsersList={usersListHandler} />
      <UsersList usersList={usersList} />
    </Wrapper>
  );
}

export default App;
