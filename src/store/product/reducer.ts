import Product from "types/product";
import { PENDING, GET_PRODUCTS, REJECTED, ActionTypes } from "./constant";

interface InitialStateType {
  Products: Product[];
  loading: boolean;
}

const initialState: InitialStateType = {
  Products: [],
  loading: false
};

const productsReducer = (
  state: InitialStateType = initialState,
  action: ActionTypes
) => {
  switch (action.type) {
    case PENDING:
      return {
        ...state,
        loading: true
      };
    case GET_PRODUCTS:
      return {
        ...state,
        Products: action.payload,
        loading: false
      };
    case REJECTED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default productsReducer;
