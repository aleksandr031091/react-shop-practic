import React from "react";
import { Route, Redirect } from "react-router-dom";
const PublicRoute = ({ path, exact, component, isAuth, isRestricted }) =>
  isAuth && isRestricted ? (
    <Redirect to="/" />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );

export default PublicRoute;
