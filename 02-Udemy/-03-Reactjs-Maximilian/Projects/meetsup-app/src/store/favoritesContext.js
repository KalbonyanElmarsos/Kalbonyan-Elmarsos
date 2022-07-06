import React, { useState } from "react";

export const FavoriteContext = React.createContext({
  favorites: [],
  total: 0,
  addToFavorite: (newItem) => {},
  removeFromFavorite: (id) => {},
  isFavorite: (id) => {},
});

const FavoriteProvider = (props) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavoritesHandler = (newItem) => {
    setFavorites((prevState) => prevState.concat(newItem));
  };

  const removeFromFavoritesHandler = (id) => {
    setFavorites((presState) => presState.filter((item) => item.id !== id));
  };

  const isFavoriteHandler = (id) => {
    return favorites.some((item) => item.id === id);
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        total: favorites.length,
        addToFavorite: addToFavoritesHandler,
        removeFromFavorite: removeFromFavoritesHandler,
        isFavorite: isFavoriteHandler,
      }}
    >
      {props.children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
