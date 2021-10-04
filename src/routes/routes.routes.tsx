import { ComponentType } from "react";

import { Dashboard, Categories, Product } from "pages";
import FormProps from "modules/products/form";
import {
  PATH_CATEGORIES,
  PATH_PRODUCTS,
  PATH_PRODUCTS_ADD
} from "./routes.paths";

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
    component: Product
  },
  {
    exact: true,
    path: PATH_PRODUCTS_ADD,
    component: FormProps
  }
];
