import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_FAILURE,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "./userActionType";

export const userLoginRequest = (payload, onSuccessLoginHandler) => {
  return {
    type: USER_LOGIN_REQUEST,
    payload,
    meta: {
      onSuccessHandler: onSuccessLoginHandler,
    },
  };
};

export const userLoginSuccess = (payload) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload,
  };
};

export const userLoginFailure = (error) => {
  return {
    type: USER_LOGIN_FAILURE,
    error,
  };
};

export const userLogoutRequest = () => {
  return {
    type: USER_LOGOUT_REQUEST,
  };
};

export const userLogoutSuccess = () => {
  return {
    type: USER_LOGOUT_SUCCESS,
  };
};

export const userLogoutFailure = (error) => {
  return {
    type: USER_LOGOUT_FAILURE,
    error,
  };
};

export const userRegisterRequest = (data, onSuccessRegisterHandler) => {
  return {
    type: USER_REGISTER_REQUEST,
    payload: data,
    meta: {
      onSuccessHandler: onSuccessRegisterHandler,
    },
  };
};

export const userRegisterSuccess = (data) => {
  return {
    type: USER_REGISTER_SUCCESS,
    payload: data,
  };
};

export const userRegisterFailure = (error) => {
  return {
    type: USER_REGISTER_FAILURE,
    error: error,
  };
};
