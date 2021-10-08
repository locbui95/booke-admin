import User from "types/user";
import { ActionTypes, PENDING, REJECTED, GET_USERS } from "./constant";

interface InitialState {
  loading: boolean;
  users: User[];
}
const initialState: InitialState = {
  loading: false,
  users: []
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
    case REJECTED:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default UsersReducer;
