import React, { useState } from "react";

import Card from "../UI/Card";
import LoadingIndicator from "../UI/LoadingIndicator";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
  const inputsState = useState({ title: "", amount: "" });

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      inputsState[0].title.trim() !== 0 &&
      inputsState[0].amount.trim() !== 0
    ) {
      props.onAddOne({
        title: inputsState[0].title,
        amount: inputsState[0].amount,
      });
    }
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={inputsState[0].title}
              onChange={(event) => {
                const title = event.target.value;
                inputsState[1]((prevState) => {
                  return { ...prevState, title };
                });
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={inputsState[0].amount}
              onChange={(event) => {
                const amount = event.target.value;
                inputsState[1]((prevState) => {
                  return { ...prevState, amount };
                });
              }}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {props.onLoading && <LoadingIndicator />}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
