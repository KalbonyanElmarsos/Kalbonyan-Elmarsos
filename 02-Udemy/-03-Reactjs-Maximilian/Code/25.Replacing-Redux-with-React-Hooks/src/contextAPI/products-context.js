import React, { useState } from "react";

export const ProductsContext = React.createContext({
  products: [],
  toggleFav: (id) => {},
});

const ProviderContext = (props) => {
  const [productsList, setProductsList] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  const toggleFavoriteHandler = (id) => {
    setProductsList((prevState) => {
      const prodIndex = productsList.findIndex((p) => p.id === id);

      const newFavStatus = !prevState[prodIndex].isFavorite;
      const updatedProducts = [...prevState];
      updatedProducts[prodIndex] = {
        ...prevState[prodIndex],
        isFavorite: newFavStatus,
      };

      return updatedProducts;
    });
  };

  return (
    <ProductsContext.Provider
      value={{ products: productsList, toggleFav: toggleFavoriteHandler }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};
export default ProviderContext;
