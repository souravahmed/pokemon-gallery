import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_FAILURE,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "./userActionType";

const initialState = {
  loading: false,
  loggedUser: {},
  error: "",
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
    case USER_REGISTER_REQUEST:
    case USER_LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedUser: action.payload,
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedUser: {},
      };
    case USER_LOGIN_FAILURE:
    case USER_LOGIN_FAILURE:
    case USER_LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
