import React, { useContext } from "react";

import Ingredients from "./components/Ingredients/Ingredients";
import { AuthContext } from "./context/store";
import Auth from "./components/Auth.js";
const App = (props) => {
  const { isAuth } = useContext(AuthContext);

  let content = <Auth />;

  if (isAuth) content = <Ingredients />;
  return content;
};

export default App;
