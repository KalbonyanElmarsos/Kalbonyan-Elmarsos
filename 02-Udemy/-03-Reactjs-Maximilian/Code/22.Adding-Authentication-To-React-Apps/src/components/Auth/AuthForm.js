import { useRef, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FIREBASE_KEY } from "../../config/config";
import AuthContext from "../../store/auth-context";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();

  const authContext = useContext(AuthContext);
  const { login } = authContext;
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler = async (event) => {
    event.preventDefault();

    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    // check if cst not exist then create new account
    const ExpireIn = new Date().getTime() + 10000; // 10 minutes
    console.log(ExpireIn);
    setIsLoading(true);
    if (!isLogin) {
      try {
        const res = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_KEY}`,
          {
            method: "POST",
            body: JSON.stringify({
              returnSecureToken: true,
              email: emailValue,
              password: passwordValue,
            }),
            "Content-Type": "application/json",
          }
        );
        const resJSON = await res.json();

        login(resJSON.idToken, ExpireIn);
        localStorage.setItem("token", JSON.stringify(resJSON.idToken));
        if (res.ok) history.replace("/");

        setIsLoading(false);

        if (!res.ok) throw new Error("auth failed");
      } catch (err) {
        setIsLoading(false);

        alert(err);
      }
    } else {
      try {
        const res = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_KEY}`,
          {
            method: "POST",
            body: JSON.stringify({
              returnSecureToken: true,
              email: emailValue,
              password: passwordValue,
            }),
          }
        );
        const resJSON = await res.json();

        login(resJSON.idToken, ExpireIn);
        localStorage.setItem("token", JSON.stringify(resJSON.idToken));

        if (res.ok) history.replace("/");

        setIsLoading(false);

        if (!res.ok) throw new Error("auth failed");
      } catch (err) {
        setIsLoading(false);

        alert(err);
      }
    }
  };
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input ref={emailRef} type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input ref={passwordRef} type="password" id="password" required />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Sending request.....</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
