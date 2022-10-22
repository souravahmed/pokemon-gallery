import { put, takeLatest } from "redux-saga/effects";
import {
  userLoginFailure,
  userLoginSuccess,
  userLogoutFailure,
  userLogoutSuccess,
  userRegisterSuccess,
} from "./userAction";
import {
  USER_LOGIN_REQUEST,
  USER_LOGOUT_REQUEST,
  USER_REGISTER_REQUEST,
} from "./userActionType";

function* loginSaga(action) {
  const { onSuccessHandler } = action.meta;
  try {
    const { email, password } = action.payload;
    if (email === "admin@gmail.com" && password === "Test12345") {
      yield put(userLoginSuccess({ token: "TOKEN", email }));
      onSuccessHandler();
    } else {
      yield put(userLoginFailure("Login Failed"));
    }
  } catch (error) {
    console.log(error);
  }
}

function* logoutSaga() {
  try {
    yield put(userLogoutSuccess());
  } catch (error) {
    console.log(error);
    yield put(userLogoutFailure(error));
  }
}

function* registerSaga(action) {
  const { onSuccessHandler } = action.meta;
  try {
    yield put(
      userRegisterSuccess({ token: "TOKEN", email: action.payload.email })
    );
    onSuccessHandler();
  } catch (error) {
    yield put(userLoginFailure("Registration Failed"));
    console.log(error);
  }
}

export function* userWatcherSaga() {
  yield takeLatest(USER_LOGIN_REQUEST, loginSaga);
  yield takeLatest(USER_LOGOUT_REQUEST, logoutSaga);
  yield takeLatest(USER_REGISTER_REQUEST, registerSaga);
}
