import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import { FIREBASE_KEY } from "../../config/config";
import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const history = useHistory();

  const newPasswordRef = useRef();

  const authContext = useContext(AuthContext);
  const { token, logout } = authContext;
  const submitHandler = (event) => {
    event.preventDefault();
    //  5482 7435 6469 6384  / 628
    const newPasswordValue = newPasswordRef.current.value;

    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${FIREBASE_KEY}`,
      {
        method: "POST",
        body: JSON.stringify({
          password: newPasswordValue,
          returnSecureToken: true,
          idToken: token,
        }),
        headers: { "Content-type": "application/json" },
      }
    )
      .then((res) => {
        console.log(res);
        history.replace("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          ref={newPasswordRef}
          type="password"
          minLength="8"
          id="new-password"
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
