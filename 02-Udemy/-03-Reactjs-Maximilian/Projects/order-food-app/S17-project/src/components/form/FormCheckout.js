import React, { useRef, useState } from "react";
import FormStyles from "./FormCheckout.js.module.css";

const checkValidity = (value) => value.trim() !== "";
const checkPostalValidity = (value) => value.trim() === 5;

const FormCheckout = (props) => {
  const [inputIsValid, setInputIsValid] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });
  const nameInput = useRef();
  const streetInput = useRef();
  const postalInput = useRef();
  const cityInput = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const nameValue = nameInput.current.value;
    const streetValue = streetInput.current.value;
    const cityValue = cityInput.current.value;
    const postalValue = postalInput.current.value;
    console.log(nameValue);
    const nameIsValid = checkValidity(nameValue);
    const streetIsValid = checkValidity(streetValue);
    const cityValid = checkValidity(cityValue);
    const postalValid = !checkPostalValidity(postalValue);
    console.log(inputIsValid);

    setInputIsValid({
      name: nameIsValid,
      street: streetIsValid,
      postal: postalValid,
      city: cityValid,
    });

    console.log(inputIsValid);
    if (!nameIsValid || !streetIsValid || !cityValid || !postalValid) return;

    // submit the order
    props.onOrder({
      name: nameValue,
      street: streetValue,
      postal: postalValue,
      city: cityValue,
    });
  };

  return (
    <form className={FormStyles.form} onSubmit={submitHandler}>
      <div
        className={`${FormStyles.control} ${
          !inputIsValid.name ? FormStyles.invalid : ""
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input ref={nameInput} type="text" id="name" />
        {!inputIsValid.name && <p>Name can not be empty</p>}
      </div>
      <div
        className={`${FormStyles.control} ${
          !inputIsValid.street ? FormStyles.invalid : ""
        }`}
      >
        <label htmlFor="street">Street</label>
        <input ref={streetInput} type="text" id="street" />
        {!inputIsValid.street && <p>Street can not be empty</p>}
      </div>
      <div
        className={`${FormStyles.control} ${
          !inputIsValid.postal ? FormStyles.invalid : ""
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalInput} type="text" id="postal" />
        {!inputIsValid.postal && <p>Postal must be 5 numbers</p>}
      </div>
      <div
        className={`${FormStyles.control} ${
          !inputIsValid.city ? FormStyles.invalid : ""
        }`}
      >
        <label htmlFor="city">City</label>
        <input ref={cityInput} type="text" id="city" />
        {!inputIsValid.city && <p>City can not be empty</p>}
      </div>
      <div className={FormStyles.actions}>
        <button type="button" onClick={props.onCloseForm}>
          Cancel
        </button>
        <button className={FormStyles.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default FormCheckout;
