import { registration, login } from "../../services/authApi";
import {
  registration as registrationActionCreator,
  login as loginActionCreator,
} from "./authActions";

export const registrOperation = (user) => async (dispatch) => {
  try {
    const response = await registration(user);

    dispatch(registrationActionCreator(response));
  } catch (error) {}
};

export const loginOperation = (user) => async (dispatch) => {
  try {
    const response = await login(user);

    dispatch(loginActionCreator(response));
  } catch (error) {}
};
