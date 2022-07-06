import { Link, useParams } from "react-router-dom";
import React from "react";

export default function ProductDetails() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <h1>product details</h1>
      <h2>product-id: {params.id}</h2>
    </>
  );
}
