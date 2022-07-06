import React from "react";
import cardStyles from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={`${cardStyles.card} ${props.className}`}>
      {props.children}
    </div>
  );
}
