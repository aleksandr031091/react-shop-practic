import React from "react";
import { MainStyled } from "./MainStyled";
import { Switch } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import PrivatRoute from "../../routes/privatRoute";
import PublicRoute from "../../routes/publicRoute";
import { useSelector } from "react-redux";

const Main = () => {
  const isAuth = useSelector((state) => state.auth.idToken);

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

export default Main;
