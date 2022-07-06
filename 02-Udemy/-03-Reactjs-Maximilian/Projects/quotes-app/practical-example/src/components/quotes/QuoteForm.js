import { useRef, useState } from "react";
import { Prompt } from "react-router-dom";
import Card from "../UI/Card.js";
import LoadingSpinner from "../UI/LoadingSpinner.js";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const [isFormEntered, setIsFormEntered] = useState(false);

  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }
  const onBtnSubmitHandler = () => {
    setIsFormEntered(false);
  };
  const onFocusHandler = () => {
    setIsFormEntered(true);
    console.log("form focused");
  };
  return (
    <>
      <Prompt
        when={isFormEntered}
        message={(location) =>
          "You leave the page now and your data will be lost!!"
        }
      />
      <Card>
        <form
          onFocus={onFocusHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={onBtnSubmitHandler} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
