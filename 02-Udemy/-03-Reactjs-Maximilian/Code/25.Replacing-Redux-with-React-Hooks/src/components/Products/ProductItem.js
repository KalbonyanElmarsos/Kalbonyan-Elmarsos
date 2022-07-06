import React, { useContext } from "react";
import { ProductsContext } from "../../contextAPI/products-context";
import { useStore } from "../../hooks-store/store";

import Card from "../UI/Card";
import "./ProductItem.css";

const ProductItem = React.memo((props) => {
  const [state, dispatch] = useStore(false);

  // const { toggleFav } = useContext(ProductsContext);

  const toggleFavHandler = () => {
    // toggleFav(props.id);
    dispatch("TOGGLE_FAV", props.id);
  };
  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? "button-outline" : ""}
          onClick={toggleFavHandler}
        >
          {props.isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;
