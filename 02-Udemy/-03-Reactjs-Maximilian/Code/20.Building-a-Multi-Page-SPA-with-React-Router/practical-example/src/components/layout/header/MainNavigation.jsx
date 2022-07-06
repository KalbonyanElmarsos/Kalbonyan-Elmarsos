import React from "react";
import { NavLink } from "react-router-dom";

import headerStyles from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <>
      <header className={headerStyles.header}>
        <p className={headerStyles.logo}>Logo</p>
        <nav className={headerStyles.nav}>
          <ul>
            <li>
              <NavLink activeClassName={headerStyles.active} to="/quotes">
                All Quotes{" "}
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={headerStyles.active} to="/new-quote">
                Create Quote
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
