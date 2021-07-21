import React from "react";
import ProductListItem from "../productListItem/ProductListItem";
import { ProductListStyle } from "./ProductListStyled";

const ProductList = ({ products }) => {
  return (
    <ProductListStyle>
      {products.map((product) => (
        <ProductListItem {...product} key={product.id} />
      ))}
    </ProductListStyle>
  );
};

export default ProductList;
