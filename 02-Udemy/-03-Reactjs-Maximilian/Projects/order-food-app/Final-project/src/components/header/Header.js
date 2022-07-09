import React from "react";

import headerStyles from "./Header.module.css";
import mainImg from "../../assets/meals.jpg";
import CartBtn from "../usableCompnents/cartBtn/CartBtn";

export default function Header(props) {
  return (
    <>
      <header className={`${headerStyles.header} `}>
        {" "}
        <h1>online Restorant</h1>
        {/* <button>Cart</button> */}
        <CartBtn onClick={props.onShow} />
      </header>
      <div className={`${headerStyles["main-image"]} `}>
        <img src={mainImg} alt="meals main content"></img>
      </div>
    </>
  );
}
