import Category from "types/category";
import {
  PENDING,
  GET_CATEGORIES,
  REJECTED,
  ActionTypes,
  DELETE_CATEGORY
} from "./constant";

interface InitialState {
  loading: boolean;
  categories: Category[];
}

const initialState: InitialState = {
  loading: false,
  categories: []
};

const reducer = (state = initialState, action: ActionTypes) => {
  const { type, payload } = action;
  switch (type) {
    case PENDING:
      return { ...state, loading: true };
    case GET_CATEGORIES:
      return { ...state, categories: payload, loading: false };
    case REJECTED:
      return { ...state, loading: false };
    default:
      return state;
  }
};
export default reducer;
