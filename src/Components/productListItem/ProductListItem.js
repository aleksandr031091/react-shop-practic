import React from "react";
import colors from "../../styles/color";
import { ProductListItemStyled } from "./ProductListItemStyled";

const ProductListItem = ({ name, image, description, price, isSale }) => {
  return (
    <ProductListItemStyled colors={colors}>
      <div className="productListItemWrapper">
        <h3 className="productListItemTitle">{name}</h3>
        <img src={image} alt={name} className="productListItemImg" />
        <p className="productListItemSale">
          <span className="productListItemName">Sale: </span>{" "}
          {isSale ? "Действует акционная цена" : "В акции не участвует"}
        </p>
        <p className="productListItemDescription">
          <span className="productListItemName">Description: </span>
          {description}
        </p>
        <p className="productListItemPrice">
          Price: <span className="productListItemName">{price}</span>
        </p>
        <div className="productListItemButtonGroup">
          <button type="button" className="addToCartBtn">
            Add to Cart
          </button>
          <button type="button" className="detailsBtn">
            Details
          </button>
        </div>
      </div>
    </ProductListItemStyled>
  );
};

export default ProductListItem;
