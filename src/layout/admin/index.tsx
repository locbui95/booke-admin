import React from "react";
import { Switch, Route } from "react-router-dom";
import { adminRouter } from "router/routes.routes";

function AdminLayout() {
  const renderRoutes = (routes: typeof adminRouter) =>
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
      <Switch>{renderRoutes(adminRouter)}</Switch>
    </>
  );
}

export default AdminLayout;
