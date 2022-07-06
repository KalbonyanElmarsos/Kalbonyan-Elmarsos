import React, { useContext } from "react";
import { FavoriteContext } from "../../../store/favoritesContext";
import Card from "../../../UI/card/Card";

import styles from "./MeetupItem.module.css";

const MeetupItem = (props) => {
  const { addToFavorite, removeFromFavorite, isFavorite } =
    useContext(FavoriteContext);

  const itemIsFavorite = isFavorite(props.id);
  console.log(itemIsFavorite);
  const toggleFavoriteStatus = () => {
    if (itemIsFavorite) {
      removeFromFavorite(props.id);
    } else {
      addToFavorite({
        id: props.id,
        title: props.title,
        address: props.address,
        image: props.image,
        description: props.description,
      });
    }
  };

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={props.image} alt="" />
        </div>
        <div className={styles.content}>
          <h2>{props.title}</h2>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={toggleFavoriteStatus}>
            {itemIsFavorite ? "Remove from favorites" : "Add to Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
