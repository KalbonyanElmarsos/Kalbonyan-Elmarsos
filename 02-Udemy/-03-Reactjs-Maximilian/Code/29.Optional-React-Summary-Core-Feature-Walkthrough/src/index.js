import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import FavoriteProvider from "./store/favoritesContext.js";

ReactDOM.render(
  <Router>
    <FavoriteProvider>
      <App />
    </FavoriteProvider>
  </Router>,
  document.getElementById("root")
);
