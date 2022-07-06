import React, { useContext } from "react";

import Card from "./UI/Card";
import "./Auth.css";
import { AuthContext } from "../context/store";

const Auth = (props) => {
  const { login } = useContext(AuthContext);

  const loginHandler = () => {
    login();
  };

  return (
    <div className="auth">
      <Card>
        <h2>You are not authenticated!</h2>
        <p>Please log in to continue.</p>
        <button onClick={loginHandler}>Log In</button>
      </Card>
    </div>
  );
};

export default Auth;
