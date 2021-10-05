import Product from "types/product";

export const PENDING = "PENDING";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const DELETE_PRODUCT = "DELETE_PRODUCTS";
export const REJECTED = "REJECTED";

export type ActionTypes =
  | { type: typeof PENDING }
  | { type: typeof GET_PRODUCTS; payload: Product[] }
  | { type: typeof DELETE_PRODUCT; payload: Product }
  | { type: typeof REJECTED };
