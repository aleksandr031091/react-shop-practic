import React from "react";
import ProductListItem from "../productListItem/ProductListItem";
import { ProductListStyle } from "./ProductListStyled";

const ProductList = ({ products = [], addToCart }) => {
  return (
    <ProductListStyle>
      {products.map((product) => (
        <ProductListItem {...product} key={product.id} addToCart={addToCart} />
      ))}
    </ProductListStyle>
  );
};

export default ProductList;
