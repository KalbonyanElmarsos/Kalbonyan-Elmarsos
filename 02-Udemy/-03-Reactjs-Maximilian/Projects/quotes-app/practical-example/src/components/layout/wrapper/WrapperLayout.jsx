import React from "react";
import MainNavigation from "../header/MainNavigation";
import wrapperStyles from "./WrapperLayout.module.css";

export default function WrapperLayout(props) {
  return (
    <>
      <MainNavigation />
      <main className={wrapperStyles.main}>{props.children}</main>
    </>
  );
}
