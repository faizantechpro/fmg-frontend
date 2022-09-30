import React from "react";
import ProductDetail from "./ProductDetail";

const AllProducts = ({ items }) => {
  return (
    <div>
      <ProductDetail items={items} />
    </div>
  );
};

export default AllProducts;
