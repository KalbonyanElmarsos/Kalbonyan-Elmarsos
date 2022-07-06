import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../contextAPI/auth-context";
import Input from "../UI/input/Input";

// its automatically after the dispatchFun executed
const emailReducer = (prevState, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.payload, isValid: action.payload.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: prevState.value, isValid: prevState.value.includes("@") };
  }
  return { value: "", isValid: false };
};

// its automatically after the dispatchFun executed
const passwordReducer = (prevState, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.payload, isValid: action.payload.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: prevState.value,
      isValid: prevState.value.trim().length > 6,
    };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  const context = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();

  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();

  const [formIsValid, setFormIsValid] = useState(false);

  const [email, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });

  const [password, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });

  // 1) runs after every rerendering and after the first rendering
  // useEffect(()=>{})

  // 2)  with empty dependency it runs only after the first rendering
  // useEffect(()=>{},[])

  // 3) with dependency runs only if one of them changed
  // useEffect(()=>{},[enteredEmail])
  const { isValid: emailIsValid } = email;
  const { isValid: passwordIsValid } = password;
  useEffect(() => {
    // console.log("inside useEffect");
    const address = setTimeout(() => {
      // console.log("time out");
      setFormIsValid(
        // enteredEmail.includes("@") && enteredPassword.trim().length > 6
        // email.isValid && password.isValid
        emailIsValid && passwordIsValid
      );
    }, 300);
    return () => {
      // console.log("clean up");
      clearTimeout(address);
    };
    // }, [enteredEmail, enteredPassword]);
    // }, [email.isValid, password.isValid]);
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({ type: "USER_INPUT", payload: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({ type: "USER_INPUT", payload: event.target.value });
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes("@"));
    // setEmailIsValid(email.isValid);
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    // setPasswordIsValid(password.isValid);
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // props.onLogin(enteredEmail, enteredPassword);
    // props.onLogin(email.value, password.value);
    if (formIsValid) {
      context.onLogin(email.value, password.value);
    } else if (!email.value) {
      console.log("email not valid");
      console.log(emailRef.current.activate());
    } else {
      console.log(passwordRef.current.activate());
      console.log("password not valid");
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailRef}
          id="email"
          label=" E-mail"
          type="email"
          value={email.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordRef}
          id="password"
          label="Password"
          type="password"
          value={password.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
