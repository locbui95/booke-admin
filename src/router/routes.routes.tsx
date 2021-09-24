import { ComponentType } from "react";

import { Dashboard, Categories, Products } from "pages/admin";
import {
  PATH_ADMIN,
  PATH_ADMIN_CATEGORIES,
  PATH_ADMIN_PRODUCTS
} from "./routes.paths";

interface RouteModel {
  exact: boolean;
  path: string;
  component: ComponentType;
}

export const adminRouter: RouteModel[] = [
  {
    exact: true,
    path: PATH_ADMIN,
    component: Dashboard
  },
  {
    exact: true,
    path: PATH_ADMIN_CATEGORIES,
    component: Categories
  },
  {
    exact: true,
    path: PATH_ADMIN_PRODUCTS,
    component: Products
  }
];
