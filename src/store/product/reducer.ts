import Product from "types/product";
import { PENDING, GET_PRODUCTS, REJECTED, ActionTypes, ADD_PRODUCTS } from "./constant";

interface InitialStateType {
  products: Product[];
  loading: boolean;
}

const initialState: InitialStateType = {
  products: [],
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
        products: action.payload,
        loading: false
      };
    case ADD_PRODUCTS:
      return {
        ...state,
        products: action.payload,
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
