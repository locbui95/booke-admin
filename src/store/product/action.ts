import { Dispatch } from "redux";
import ProductApi from "apis/product";
import Product from "types/product";
import {
  PENDING,
  GET_PRODUCTS,
  REJECTED,
  ActionTypes,
  ADD_PRODUCTS
} from "./constant";

export const getProducts = () => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({ type: PENDING });
  try {
    const response = await ProductApi.getAll();
    dispatch({ type: GET_PRODUCTS, payload: response.data });
  } catch (error) {
    dispatch({ type: REJECTED });
  }
};
export const addProducts =
  (item: Product) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      const response = await ProductApi.add(item);
      dispatch({ type: ADD_PRODUCTS, payload: response.data });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };
