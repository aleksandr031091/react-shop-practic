import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import Productspage from "../pages/Productspage";

const mainRoutes = [
  {
    name: {
      en: "Home",
      ru: "Главная",
      ua: "Головна",
    },
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    name: {
      en: "Products",
      ru: "Продукти",
      ua: "Продукты",
    },
    path: "/products",
    component: Productspage,
    exact: false,
  },
  {
    name: {
      en: "Cart",
      ru: "корзина",
      ua: "кошик",
    },
    path: "/cart",
    component: CartPage,
    exact: true,
  },
  {
    name: {
      en: "Administration",
      ru: "администрирования",
      ua: "администрування",
    },
    path: "/admin",
    component: AdminPage,
    exact: true,
  },
  {
    name: {
      en: "Registration",
      ru: "регистрация",
      ua: "регистрация",
    },
    path: "/registration",
    component: AuthPage,
    exact: true,
  },
  {
    name: {
      en: "Login",
      ru: "Войти",
      ua: "Увийти",
    },
    path: "/login",
    component: AuthPage,
    exact: true,
  },
];
export default mainRoutes;
