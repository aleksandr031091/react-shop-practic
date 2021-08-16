import { productsRoutes } from "../routes/productsRoutes";
import { NavLink, Switch, Route } from "react-router-dom";
import { ProductPageContainer } from "./ProductPageStyled";
import colors from "../styles/colors";

const Productspage = ({ match }) => {
  return (
    <ProductPageContainer colors={colors}>
      <nav>
        <ul className="navigationList">
          {productsRoutes.map((route) => (
            <li className="navigationListItem" key={route.path}>
              <NavLink
                to={match.url + route.path}
                exact={route.exact}
                className="headerListItemLink"
                activeClassName="activeHeaderListItemLink"
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Switch>
        {productsRoutes.map((route) => (
          <Route
            to={match.path + route.path}
            exact={route.exact}
            component={route.component}
            key={route.path}
          />
        ))}
      </Switch>
    </ProductPageContainer>
  );
};

export default Productspage;
