import { LOGIN_USER, ADD_PRODUCT, LOGOUT_USER } from "./actionTypes";

export const login_user = (data) => (dispatch) => {
  console.log(data)
  dispatch({
    type: LOGIN_USER,
    payload: data,
  });
};
export const add_product = (data) => (dispatch) => {
  dispatch({
    type: ADD_PRODUCT,
    payload: data,
  });
};
export const logout_user = () => (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
};
