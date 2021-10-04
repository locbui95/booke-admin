import CategoryAPI from "apis/category";
import { Dispatch } from "redux";
import {
  ActionTypes,
  GET_CATEGORIES,
  PENDING,
  REJECTED,
  DELETE_CATEGORY
} from "./constant";

const getCategories = () => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({ type: PENDING });
  try {
    const { data: categories } = await CategoryAPI.getAll();
    dispatch({ type: GET_CATEGORIES, payload: categories });
  } catch (error) {
    dispatch({ type: REJECTED });
  }
};

export { getCategories };
