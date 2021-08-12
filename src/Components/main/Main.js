import React from "react";
import { MainStyled } from "./MainStyled";
import { Route, Switch } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import PrivatRoute from "../../routes/privatRoute";
import PublicRoute from "../../routes/publicRoute";
import { connect } from "react-redux";

const Main = ({ isAuth }) => {
  return (
    <MainStyled>
      <Switch>
        {mainRoutes.map((route) =>
          route.isPrivat ? (
            <PrivatRoute {...route} key={route.path} isAuth={isAuth} />
          ) : (
            <PublicRoute {...route} key={route.path} isAuth={isAuth} />
          )
        )}
      </Switch>
    </MainStyled>
  );
};

const mstp = (state) => {
  return {
    isAuth: state.auth.idToken,
  };
};
export default connect(mstp)(Main);
