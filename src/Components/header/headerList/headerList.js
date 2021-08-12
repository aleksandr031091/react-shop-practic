import React from "react";
import { connect } from "react-redux";

import { logOut } from "../../../redux/auth/authActions";
import { mainRoutes } from "../../../routes/mainRoutes";
import colors from "../../../styles/colors";
import { HeaderListStyled } from "./HeaderListStyled";
import HeaderListItem from "../HeaderListItem/HeaderListItem";

const HeaderList = ({ language = "en", logOut, isAuth }) => {
  const exet = () => {
    logOut();
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

const mstp = (state) => {
  return {
    isAuth: state.auth.idToken,
  };
};

export default connect(mstp, { logOut })(HeaderList);
