import React from "react";
import ReactDOM from "react-dom";

import modalStyles from "./Modal.module.css";

const BackDrop = (props) => (
  <div className={modalStyles.backdrop} onClick={props.onClose}></div>
);

const Overlay = (props) => (
  <div className={modalStyles.modal}>
    <div className={modalStyles.content}>{props.children}</div>
  </div>
);

export default function Modal(props) {
  return (
    <>
      {/* <BackDrop />
      <Overlay /> */}
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onClose} />,
        document.getElementById("modal")
      )}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        document.getElementById("modal")
      )}
    </>
  );
}
