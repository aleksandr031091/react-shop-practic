import React from "react";
import { Route, Redirect } from "react-router-dom";
const PrivatRoute = ({ path, exact, component, isAuth }) =>
  !isAuth ? (
    <Redirect to="/login" />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );

export default PrivatRoute;
