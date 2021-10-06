import Product from "types/product";
import {
  PENDING,
  GET_PRODUCTS,
  REJECTED,
  ActionTypes,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT_DETAIL,
  UPDATE_PRODUCT_DETAIL
} from "./constant";

interface InitialStateType {
  products: Product[];
  loading: boolean;
  productDetail: Product;
}

const initialState: InitialStateType = {
  products: [],
  loading: false,
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
  }
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
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
        loading: false
      };
    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.payload,
        loading: false
      };
    case UPDATE_PRODUCT_DETAIL:
      return {
        ...state,
        products: [...state.products, action.payload],
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
