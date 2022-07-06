import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ProviderContext from "./contextAPI/products-context";
import "./index.css";
import App from "./App";
import configureStore from "./hooks-store/products-store";
configureStore();
ReactDOM.render(
  <ProviderContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProviderContext>,
  document.getElementById("root")
);
