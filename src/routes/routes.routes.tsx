import { ComponentType } from "react";

import { Dashboard, Categories, Products } from "pages";
import { PATH_CATEGORIES, PATH_PRODUCTS } from "./routes.paths";

interface RouteModel {
  exact: boolean;
  path: string;
  component: ComponentType;
}

export const appRoutes: RouteModel[] = [
  {
    exact: true,
    path: "/",
    component: Dashboard
  },
  {
    exact: true,
    path: PATH_CATEGORIES,
    component: Categories
  },
  {
    exact: true,
    path: PATH_PRODUCTS,
    component: Products
  }
];
