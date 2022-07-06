import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../store/slices/auth-slice.js";
// import { authAction } from "../store";
import classes from "./Auth.module.css";

const Auth = () => {
  // const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(authAction.login());
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
