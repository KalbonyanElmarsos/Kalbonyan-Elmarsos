import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <>
      <h1>Products page</h1>
      <ul>
        <li>
          <Link to="/products/1"> Books section</Link>
        </li>
        <li>
          <Link to="/products/2"> About stories</Link>
        </li>
        <li>
          <Link to="/products/3"> Her you can find any food</Link>
        </li>
      </ul>
    </>
  );
}
