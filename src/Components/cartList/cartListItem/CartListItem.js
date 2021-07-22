import React from "react";
import sprite from "../../../icons/cart-sprite.svg";
import colors from "../../../styles/colors";
import { CartListItemStyled } from "./CartListItemStyled";

const CartListItem = ({
  id,
  name,
  price,
  productQuantity,
  removeFromCart,
  addItem,
  removeItem,
}) => {
  const onAddItem = () => {
    addItem(id);
  };

  const onRemoveItem = () => {
    removeItem(id);
  };

  const remove = () => {
    removeFromCart(id);
  };

  return (
    <CartListItemStyled colors={colors} key={id}>
      <h3 className="cartItemTitle">{name}</h3>
      <p className="cartItemPrice">{price}</p>

      <div className="options">
        <button
          disabled={productQuantity === 1}
          type="button"
          onClick={onRemoveItem}
        >
          <svg className="buttonIcon">
            <use href={sprite + "#icon-minus"} />
          </svg>
        </button>

        <p className="cartItemQuantity">{productQuantity}</p>

        <button type="button" onClick={onAddItem}>
          <svg className="buttonIcon">
            <use href={sprite + "#icon-plus"} />
          </svg>
        </button>

        <button type="button" onClick={remove}>
          <svg className="buttonIcon">
            <use href={sprite + "#icon-cross"} />
          </svg>
        </button>
      </div>
    </CartListItemStyled>
  );
};

export default CartListItem;
