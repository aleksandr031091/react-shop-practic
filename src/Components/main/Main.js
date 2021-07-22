import React, { Component } from "react";
import data from "../../data";
import ProductList from "../productList/ProductList";
import Section from "../section/Section";
import { MainStyled } from "./MainStyled";
import CartList from "../cartList/CartList";

class Main extends Component {
  state = {
    cart: [],
  };

  addToCart = (product) => {
    if (this.state.cart.some((cartItem) => cartItem.id === product.id)) {
      this.setState((prev) => ({
        cart: prev.cart.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, productQuantity: cartItem.productQuantity + 1 }
            : cartItem
        ),
      }));
      return;
    }
    this.setState((prev) => ({
      cart: [...prev.cart, product],
    }));
  };

  removeFromCart = (id) => {
    this.setState((prev) => ({
      cart: prev.cart.filter((product) => product.id !== id),
    }));
  };

  removeAllFromCart = () => {
    this.setState({ cart: [] });
  };

  addItem = (id) => {
    this.setState((prev) => ({
      cart: prev.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, productQuantity: cartItem.productQuantity + 1 }
          : cartItem
      ),
    }));
  };

  removeItem = (id) => {
    this.setState((prev) => ({
      cart: prev.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, productQuantity: cartItem.productQuantity - 1 }
          : cartItem
      ),
    }));
  };

  render() {
    return (
      <MainStyled>
        <Section title="Корзина">
          <CartList
            cart={this.state.cart}
            addItem={this.addItem}
            removeItem={this.removeItem}
            removeFromCart={this.removeFromCart}
            removeAllFromCart={this.removeAllFromCart}
          />
        </Section>

        <Section title="Мобильные телефоны">
          <ProductList products={data.phones} addToCart={this.addToCart} />
        </Section>

        <Section title="Ноутбуки">
          <ProductList products={data.laptops} addToCart={this.addToCart} />
        </Section>
      </MainStyled>
    );
  }
}

export default Main;
