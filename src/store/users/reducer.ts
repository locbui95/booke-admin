import User, { IInfoUser } from "types/user";
import {
  ActionTypes,
  PENDING,
  REJECTED,
  GET_USERS,
  DELETE_USER,
  ADD_USER,
  UPDATE_USER,
  LOGIN_USER
} from "./constant";

interface InitialState {
  loading: boolean;
  users: User[];
  infoUser: IInfoUser;
  error: string;
}
const initialState: InitialState = {
  loading: false,
  users: [],
  infoUser: {
    email: "",
    id: 0,
    name: "",
    phone: "",
    address: ""
  },
  error: ""
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
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
        loading: false
      };
    case UPDATE_USER: {
      const { payload } = action;
      const newUser = state.users.map((item: User) => {
        if (item.id === payload.id) {
          return payload;
        }
        return item;
      });
      return {
        ...state,
        users: newUser,
        loading: false
      };
    }
    case REJECTED:
      return { ...state, loading: false, error: action.payload };
    case LOGIN_USER: {
      return { ...state, loading: false, infoUser: action.payload };
    }

    default:
      return state;
  }
};

export default UsersReducer;
