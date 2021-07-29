import React, { Component } from "react";
import { MainStyled } from "./MainStyled";
import { getAllAdvByCategory } from "../../services/Api";
import { Switch, Route } from "react-router-dom";
import mainRoutes from "../../routes/mainRoutes";

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
        <Switch>
          {mainRoutes.map(({ path, component, exact }) => (
            <Route path={path} component={component} exact={exact} key={path} />
          ))}
        </Switch>
      </MainStyled>
    );
  }
}

export default Main;
