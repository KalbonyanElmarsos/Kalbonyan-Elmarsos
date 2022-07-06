import React from "react";
import { Link, Route } from "react-router-dom";
import WelcomeMoreInfo from "../components/WelcomeMoreInfo";

export default function Welcome() {
  return (
    <>
      <h1>Welcome page</h1>
      <Link to="/welcome/info">Info</Link>
      <Route path="/welcome/info">
        <WelcomeMoreInfo />
      </Route>
    </>
  );
}
