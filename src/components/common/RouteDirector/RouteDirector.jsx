import React from "react";
import { Route } from "react-router-dom";
import { PageTitle } from "../PageTitle";

const RouteDirector = ({ path, title, children, ...rest }) => {
  return (
    <Route
      {...rest}
      exact={true}
      path={path}
      render={() => <PageTitle title={title}>{children}</PageTitle>}
    />
  );
};

export { RouteDirector };
