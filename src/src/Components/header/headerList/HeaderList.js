import React from "react";
import { NavLink } from "react-router-dom";
import mainRoutes from "../../../routes/mainRoutes";
import colors from "../../../styles/colors";
import { HeaderListStyled } from "./HeaderListStyled";

const HeaderList = ({ language = "en" }) => {
  return (
    <HeaderListStyled colors={colors}>
      <ul className="navigationList">
        {mainRoutes.map((item) => (
          <li key={item.name[language]} className="navigationListItem">
            <NavLink
              to={item.path}
              className="headerListItemLink"
              activeClassName="activeHeaderListItemLink"
              exact={item.exact}
            >
              {item.name[language]}
            </NavLink>
          </li>
        ))}
      </ul>
    </HeaderListStyled>
  );
};

export default HeaderList;
