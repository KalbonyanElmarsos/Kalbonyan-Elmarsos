import React from "react";
import ReactDOM from "react-dom";

import Button from "../Button.js/Button";
import Card from "../card/Card";

import errorStyles from "./ErrorModal.module.css";

const Backdrop = (props) => (
  <div className={errorStyles.backdrop} onClick={props.onHideModal} />
);

const Modal = (props) => (
  <Card className={errorStyles.modal}>
    <header className={errorStyles.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={errorStyles.content}>
      <p>{props.message}</p>
    </div>
    <footer className={errorStyles.actions}>
      <Button onClick={props.onHideModal}>Okay</Button>
    </footer>
  </Card>
);
export default function ErrorModal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHideModal={props.onHideModal} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <Modal
          title={props.title}
          message={props.message}
          onHideModal={props.onHideModal}
        />,
        document.getElementById("modal")
      )}

      {/* <div className={errorStyles.backdrop} onClick={props.onHideModal} /> */}

      {/* <Card className={errorStyles.modal}>
        <header className={errorStyles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={errorStyles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={errorStyles.actions}>
          <Button onClick={props.onHideModal}>Okay</Button>
        </footer>
      </Card> */}
    </React.Fragment>
  );
}
