import React, { useState } from "react";

// import styled from "styled-components";

import Button from "../../UI/Button/Button";
import formStyles from "./CourseInput.module.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     color: ${(props) => (props.isValid ? "" : "red")};
//     margin-bottom: 0.5rem;
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.isValid ? "black" : "salmon")};
//     font: inherit;

//     background: ${(props) => (props.isValid ? "transparent" : "salmon")};
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
//   // &.invalid input {
//   //   border-color: salmon;
//   //   background-color: salmon;
//   // }
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) setIsValid(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);

      return;
    }
    props.onAddGoal(enteredValue);
  };

  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     {/* <formControl className="invalid"> */}
  //     <FormControl isValid={isValid}>
  //       <label>Course Goal</label>
  //       <input type="text" onChange={goalInputChangeHandler} />
  //     </FormControl>
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );

  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     <div className="form-control">
  //     {/* <div className="form-control"> */}
  //       {/* <div className={`form-control ${isValid? '':'invalid'}`> */}
  //       <label style={{ color: isValid ? "black" : "red" }}>Course Goal</label>
  //       <input
  //         style={{
  //           borderColor: isValid ? "black" : "salmon",
  //           backgroundColor: isValid ? "transparent" : "salmon",
  //         }}
  //         type="text"
  //         onChange={goalInputChangeHandler}
  //       />
  //     </div>
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${formStyles["form-control"]} ${
          !isValid && formStyles.invalid
        }`}
      >
        <label className={`${!isValid && formStyles.invalid}`}>
          Course Goal
        </label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
