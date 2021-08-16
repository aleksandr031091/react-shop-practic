import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";

export const mainRoutes = [
  {
    name: "Home",
    path: "/",
    icon: "",
    component: HomePage,
    exact: true,
    isPrivat: false,
    isRestricted: false,
  },
  {
    name: "Products",
    path: "/products",
    icon: "",
    component: ProductsPage,
    exact: false,
    isPrivat: false,
    isRestricted: false,
  },
  {
    name: "Cart",
    path: "/cart",
    icon: "",
    component: CartPage,
    exact: true,
    isPrivat: false,
    isRestricted: false,
  },
  {
    name: "Administration",
    path: "/admin",
    icon: "",
    component: AdminPage,
    exact: true,
    isPrivat: true,
    isRestricted: false,
  },
  {
    name: "Registration",
    path: "/register",
    icon: "",
    component: AuthPage,
    exact: true,
    isPrivat: false,
    isRestricted: true,
  },
  {
    name: "login",
    path: "/login",
    icon: "",
    component: AuthPage,
    exact: true,
    isPrivat: false,
    isRestricted: true,
  },
];
