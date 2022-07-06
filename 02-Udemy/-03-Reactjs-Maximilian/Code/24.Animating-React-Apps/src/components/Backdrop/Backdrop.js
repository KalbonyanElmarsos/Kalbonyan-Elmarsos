import React from "react";

import "./Backdrop.css";

const backdrop = (props) => (
  <div
    className={`Backdrop  ${props.show ? "open-backdrop" : "close-backdrop"}`}
  ></div>
);

export default backdrop;
