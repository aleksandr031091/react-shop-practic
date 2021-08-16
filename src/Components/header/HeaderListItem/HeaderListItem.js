import React from "react";
import { NavLink } from "react-router-dom";
const HeaderListItem = ({
  path,
  exact,
  name,
  language,
  isAuth,
  isPrivat,
  isRestricted,
}) => {
  return (
    <>
      {!isPrivat && !isRestricted && (
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
      {isAuth && isPrivat && !isRestricted && (
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
      {!isAuth && !isPrivat && isRestricted && (
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
