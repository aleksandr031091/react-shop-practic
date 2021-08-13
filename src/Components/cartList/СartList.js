import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAllFromCart } from "../../redux/cart/cartActions";
import { cartItemsSelectors } from "../../redux/cart/cartSelectors";
import CartListItem from "./cartListItem/CartListItem";

const СartList = () => {
  const cart = useSelector(cartItemsSelectors);
  const dispatch = useDispatch();

  return (
    <>
      {cart.length ? (
        <>
          <ul className="cartList">
            {cart.map((product) => (
              <CartListItem {...product} key={product.id} />
            ))}
          </ul>
          <button type="button" onClick={() => dispatch(removeAllFromCart())}>
            Оформить заказ
          </button>{" "}
        </>
      ) : (
        <p>Добавьте товар</p>
      )}
    </>
  );
};

export default СartList;
