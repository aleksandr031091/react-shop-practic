import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { logOut } from "../../../redux/auth/authActions";
import { mainRoutes } from "../../../routes/mainRoutes";
import colors from "../../../styles/colors";
import { HeaderListStyled } from "./HeaderListStyled";
import HeaderListItem from "../HeaderListItem/HeaderListItem";

const HeaderList = ({ language = "en" }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.idToken);

  const exet = () => {
    dispatch(logOut());
  };
  return (
    <HeaderListStyled colors={colors}>
      {mainRoutes.map((item) => (
        <HeaderListItem
          {...item}
          language={language}
          isAuth={isAuth}
          key={item.path}
        />
      ))}

      {isAuth && <li onClick={exet}>LOGOUT</li>}
    </HeaderListStyled>
  );
};

export default HeaderList;
