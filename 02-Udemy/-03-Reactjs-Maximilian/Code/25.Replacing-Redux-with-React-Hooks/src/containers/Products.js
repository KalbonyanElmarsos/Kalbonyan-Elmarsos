import React, { useContext } from "react";

import ProductItem from "../components/Products/ProductItem";
import { ProductsContext } from "../contextAPI/products-context";
import { useStore } from "../hooks-store/store";
import "./Products.css";

const Products = (props) => {
  const { products: productsList } = useContext(ProductsContext);
  const [state, dispatch] = useStore();
  return (
    <ul className="products-list">
      {state.products.map((prod) => (
        // {productsList.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
