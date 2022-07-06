import React, { useContext } from "react";
import MeetupList from "../../components/mettups/meetupList/MeetupList";
import { FavoriteContext } from "../../store/favoritesContext";

const Favorites = () => {
  const { favorites } = useContext(FavoriteContext);

  let content;

  if (favorites.length === 0) {
    content = <h3>You have no favorites</h3>;
  } else {
    content = <MeetupList meetups={favorites} />;
  }
  return (
    <>
      <h1>Favorites</h1>
      {content}
    </>
  );
};

export default Favorites;
