import Product from "types/product";
import {
  PENDING,
  GET_PRODUCTS,
  DELETE_PRODUCT,
  REJECTED,
  ActionTypes
} from "./constant";

interface InitialStateType {
  products: Product[];
  productDetail: Product;
  loading: boolean;
}

const initialState: InitialStateType = {
  products: [],
  productDetail: {
    id: 0,
    name: "",
    price: 0,
    import_price: 0,
    tax: 0,
    status: false,
    image: "",
    description: "",
    categoryID: 0,
    author: "",
    publishing_year: "",
    date_submitted: ""
  },
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
    case DELETE_PRODUCT:
      return {
        ...state,
        productDetail: action.payload,
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
