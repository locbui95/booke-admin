import { Dispatch } from "redux";
import ProductApi from "apis/product";
import { PENDING, GET_PRODUCTS, REJECTED, ActionTypes } from "./constant";

export const getProducts = () => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({ type: PENDING });
  try {
    const response = await ProductApi.getAll();
    dispatch({ type: GET_PRODUCTS, payload: response.data });
  } catch (error) {
    dispatch({ type: REJECTED });
  }
};
