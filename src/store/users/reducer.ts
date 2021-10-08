import User from "types/user";
import {
  ActionTypes,
  PENDING,
  REJECTED,
  GET_USERS,
  DELETE_USER
} from "./constant";

interface InitialState {
  loading: boolean;
  users: User[];
  error: string;
  userLogin: IUserLogin;
}
const initialState: InitialState = {
  loading: false,
  users: [],
  error: "",
  userLogin: {
    email: "",
    password: ""
  }
};

const UsersReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case PENDING:
      return { ...state, loading: true };
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case DELETE_USER: {
      const filterUsers = state.users.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, users: filterUsers, loading: false };
    }
    case REJECTED:
      return { ...state, loading: false, error: action.payload };
    case LOGIN_USER:
      return {
        ...state,
        userLogin: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default UsersReducer;
