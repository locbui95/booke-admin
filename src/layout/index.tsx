import React from "react";
import { Switch, Route } from "react-router-dom";
import { appRoutes } from "routes/routes.routes";

function Layout() {
  const renderRoutes = (routes: typeof appRoutes) =>
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
      <Switch>{renderRoutes(appRoutes)}</Switch>
    </>
  );
}

export default Layout;
