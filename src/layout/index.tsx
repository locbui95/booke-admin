import React from "react";
import { Switch, Route } from "react-router-dom";
import { productManagementRouter } from "router/routes.routes";

function ProductManagementLayout() {
  const renderRoutes = (routes: typeof productManagementRouter) =>
    routes.map((route) => (
      <Route
        key={route.path}
        exact={route.exact}
        path={route.path}
        component={route.component}
      />
    ));
  return (
    <>
      <Switch>{renderRoutes(productManagementRouter)}</Switch>
    </>
  );
}

export default ProductManagementLayout;
