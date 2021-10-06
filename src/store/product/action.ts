import { Dispatch } from "redux";
import ProductApi from "apis/product";
import {
  PENDING,
  GET_PRODUCTS,
  DELETE_PRODUCT,
  REJECTED,
  ActionTypes
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

export const deleteProduct =
  (id: number) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      const response = await ProductApi.remove(id);
      dispatch({ type: DELETE_PRODUCT, payload: response.data });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };
