import { Switch, Route } from "react-router-dom";
import { appRoutes } from "routes/routes.routes";

import Header from "components/header";
import Sidebar from "components/sidebar";
import "./layout.styles.css";

export default function Layout() {
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
      <div className="w-full min-h-screen bg-gray-100">
        <Sidebar />
        <div className=" min-h-screen ml-80 content">
          <Header />
          <div className="mt-32 h-screen p-10">
            <Switch>{renderRoutes(appRoutes)}</Switch>
          </div>
        </div>
      </div>
    </>
  );
}
