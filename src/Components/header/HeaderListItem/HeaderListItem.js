import React from "react";
import { NavLink } from "react-router-dom";
const HeaderListItem = ({
  path,
  exact,
  name,
  language,
  isAuth,
  isPrivat,
  isResticted,
}) => {
  return (
    <>
      {!isPrivat && !isResticted && (
        <li className="headerListItem">
          <NavLink
            to={path}
            className="headerListLink"
            activeClassName="activeHeaderListLink"
            exact={exact}
          >
            {name[language]}
          </NavLink>
        </li>
      )}
      {isAuth && isPrivat && !isResticted && (
        <li className="headerListItem">
          <NavLink
            to={path}
            className="headerListLink"
            activeClassName="activeHeaderListLink"
            exact={exact}
          >
            {name[language]}
          </NavLink>
        </li>
      )}
      {!isAuth && !isPrivat && isResticted && (
        <li className="headerListItem">
          <NavLink
            to={path}
            className="headerListLink"
            activeClassName="activeHeaderListLink"
            exact={exact}
          >
            {name[language]}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default HeaderListItem;
