import useInput from "../custom-hooks/useInput";
import Input from "../reusable-components/Input";
const validate = (input) => input.trim().length > 0;
const emailValidate = (emailInput) => emailInput.includes("@");

const BasicForm = (props) => {
  //  Custom user Hook
  const {
    value: firstNameInput,
    isValid: firstNameIsValid,
    isTouched: firstNameIsTouched,
    valueHandler: firstNameHandler,
    blurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput(validate);
  const {
    value: lastNameInput,
    isValid: lastNameIsValid,
    isTouched: lastNameIsTouched,
    valueHandler: lastNameHandler,
    blurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput(validate);

  const {
    value: emailInput,
    isValid: emailIsValid,
    isTouched: emailIsTouched,
    valueHandler: emailHandler,
    blurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput(emailValidate);

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) formIsValid = true;

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    firstNameReset();
    lastNameReset();
    emailReset();
  };
  return (
    <form onSubmit={submitHandler}>
      <Input
        valueIsValid={emailIsValid}
        valueIsTouched={emailIsTouched}
        id="email"
        type="email"
        title="Your Email"
        value={emailInput}
        valueHandler={emailHandler}
        blurHandler={emailBlurHandler}
        errorMesg="Email not valid"
      />

      <Input
        valueIsValid={firstNameIsValid}
        valueIsTouched={firstNameIsTouched}
        id="name"
        type="text"
        title="First Name"
        value={firstNameInput}
        valueHandler={firstNameHandler}
        blurHandler={firstNameBlurHandler}
        errorMesg="First Name can not be empty"
      />

      <Input
        valueIsValid={lastNameIsValid}
        valueIsTouched={lastNameIsTouched}
        id="name"
        type="text"
        title="Last Name"
        value={lastNameInput}
        valueHandler={lastNameHandler}
        blurHandler={lastNameBlurHandler}
        errorMesg="Last Name can not be empty"
      />

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
