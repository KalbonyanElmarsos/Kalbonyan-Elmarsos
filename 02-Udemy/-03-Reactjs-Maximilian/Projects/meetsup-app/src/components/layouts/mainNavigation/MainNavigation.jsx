import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoriteContext } from "../../../store/favoritesContext";

import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  const { total: totalFavorites } = useContext(FavoriteContext);

  return (
    <header className={styles.header}>
      <p className={styles.logo}>Logo</p>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>

          <li>
            <Link to="/new-meetups">New Meetup</Link>
          </li>

          <li>
            <Link to="/favorites">
              Favorites<span className={styles.badge}>{totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
