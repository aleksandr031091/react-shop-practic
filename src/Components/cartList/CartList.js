import React from "react";
import CartListItem from "./cartListItem/CartListItem";
import colors from "../../styles/colors";
import { CartListStyled } from "./CartListStyled";

const CartList = ({
  cart,
  removeFromCart,
  removeAllFromCart,
  addItem,
  removeItem,
}) => {
  const getTotalPrice = () => {
    return cart.reduce(
      (acc, product) => (acc += product.price * product.productQuantity),
      0
    );
  };

  return (
    <CartListStyled colors={colors}>
      {cart.length ? (
        <>
          <ul className="cartList">
            {cart.map((product) => (
              <CartListItem
                {...product}
                key={product.id}
                removeFromCart={removeFromCart}
                addItem={addItem}
                removeItem={removeItem}
              />
            ))}
          </ul>

          <p className="totalCount">
            <span>Сумма:</span>
            <span>{getTotalPrice()} UAH</span>
          </p>

          <button className="byBtn" type="button" onClick={removeAllFromCart}>
            Оформить заказ
          </button>
        </>
      ) : (
        <p className="addProduct">Добавьте товар</p>
      )}
    </CartListStyled>
  );
};

export default CartList;
