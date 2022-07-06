import React, { useState } from "react";
import Button from "../UI/Button.js/Button";
import Card from "../UI/card/Card";
import ErrorModal from "../UI/errorModal/ErrorModal";
import styles from "./AddUser.module.css";

export default function AddUser(props) {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    if (age.trim().length === 0 || userName.trim().length === 0) {
      setError({
        title: "Error---> attention please",
        message: "name and age fields can not be empty",
      });
      return;
    }
    if (+age < 0) {
      setError({
        title: "error---> negative age",
        message: "the age can not be a negative value",
      });
      return;
    }
    props.onUsersList(userName, age);
    setAge("");
    setUserName("");
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          onHideModal={errorHandler}
          title={error.title}
          message={error.message}
        ></ErrorModal>
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={userName}
            onChange={userNameHandler}
          />{" "}
          <label htmlFor="age">Age</label>
          <input id="age" type="number" value={age} onChange={ageHandler} />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
}
