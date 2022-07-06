import React from "react";
import { Link, NavLink } from "react-router-dom";

import headerStyles from "./Header.module.css";

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <nav>
        <ul>
          <li>
            {/* <a href="/welcome">welcome</a> */}
            {/* <Link to="/welcome">welcome</Link> */}
            <NavLink activeClassName={headerStyles.active} to="/welcome">
              welcome
            </NavLink>
          </li>
          <li>
            {/* <a href="/products">products</a> */}
            {/* <Link to="/products">products</Link> */}
            <NavLink activeClassName={headerStyles.active} to="/products">
              products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
