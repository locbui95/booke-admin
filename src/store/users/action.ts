import { Dispatch } from "redux";

import UserApi from "apis/user";
import User, { IUserLogin } from "types/user";

import {
  PENDING,
  GET_USERS,
  REJECTED,
  ActionTypes,
  DELETE_USER,
  ADD_USER,
  UPDATE_USER,
  GET_USER_DETAIL,
  LOGIN_USER
} from "./constant";

export const getUsers = () => async (dispatch: Dispatch<ActionTypes>) => {
  dispatch({ type: PENDING });
  try {
    const { data: user } = await UserApi.getAll();
    dispatch({ type: GET_USERS, payload: user });
  } catch (error) {
    dispatch({ type: REJECTED });
  }
};

export const deleteUser =
  (id: number) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      await UserApi.remove(id);
      dispatch({ type: DELETE_USER, payload: id });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };

export const addUser =
  (item: User) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      const response = await UserApi.add(item);
      dispatch({ type: ADD_USER, payload: response.data });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };
export const getProductDetail =
  (id: number) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      const response = await UserApi.get(id);
      dispatch({ type: GET_USER_DETAIL, payload: response.data });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };
export const updateUser =
  (id: number, item: User) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      const response = await UserApi.update(id, item);
      dispatch({ type: UPDATE_USER, payload: response.data });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };
export const loginUser =
  (user: IUserLogin) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      const { data } = await UserApi.login(user);
      dispatch({ type: LOGIN_USER, payload: data });
    } catch (err) {
      dispatch({ type: REJECTED, payload: Object(err).response.data });
    }
  };
