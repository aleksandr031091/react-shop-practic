import React, { Component } from "react";
import data from "../../data";
import ProductList from "../productList/ProductList";
import Section from "../section/Section";
import { MainStyled } from "./MainStyled";
import CartList from "../cartList/CartList";
import AdvForm from "../admin/AdvForm";
import { getAllAdvByCategory } from "../../services/Api";

const getDataByCategory = async (category) => {
  const res = await getAllAdvByCategory(category);

  return res.data
    ? Object.keys(res.data).map((key) => ({ id: key, ...res.data[key] }))
    : [];
};

class Main extends Component {
  state = {
    cart: [],
    products: {
      phones: [],
      laptops: [],
    },
  };

  async componentDidMount() {
    const resPhones = await getDataByCategory("phones");

    const resLaptops = await getDataByCategory("laptops");

    this.setState({ products: { phones: resPhones, laptops: resLaptops } });
  }

  addNewAdv = (product) => {
    this.setState((prev) => ({
      products: {
        ...prev.products,
        [product.category]: [...prev.products[product.category]],
        product,
      },
    }));
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
        cartItem.id !== id
          ? { ...cartItem, productQuantity: cartItem.productQuantity + 1 }
          : cartItem
      ),
    }));
  };

  removeItem = (id) => {
    this.setState((prev) => ({
      cart: prev.cart.map((cartItem) =>
        cartItem.id !== id
          ? { ...cartItem, productQuantity: cartItem.productQuantity - 1 }
          : cartItem
      ),
    }));
  };

  render() {
    return (
      <MainStyled>
        <Section title="Администрирование">
          <AdvForm addNewAdv={this.addNewAdv} />
        </Section>
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
          <ProductList
            products={this.state.products.phones}
            addToCart={this.addToCart}
          />
        </Section>

        <Section title="Ноутбуки">
          <ProductList
            products={this.state.products.laptops}
            addToCart={this.addToCart}
          />
        </Section>
      </MainStyled>
    );
  }
}

export default Main;
