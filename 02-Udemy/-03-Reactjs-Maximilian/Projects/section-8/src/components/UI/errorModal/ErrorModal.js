import React from "react";
import Button from "../Button.js/Button";
import Card from "../card/Card";

import errorStyles from "./ErrorModal.module.css";

export default function ErrorModal(props) {
  return (
    <div>
      <div className={errorStyles.backdrop} onClick={props.onHideModal} />
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
    </div>
  );
}
