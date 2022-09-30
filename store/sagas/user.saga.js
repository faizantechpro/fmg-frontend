import Router from "next/router";
import { notification } from "antd";
import { takeLatest, all, call, put } from "redux-saga/effects";
import * as actionTypes from "../types/auth.type";
import { addUser, deleteUser } from "../services/user.service";
import {
  defaultActionSuccess,
  defaultActionFailure,
  defaultActionLoading,
} from "../utils/app.actions";

function* doSignUpSaga({ payload }) {
  try {
    yield put(defaultActionLoading(actionTypes.SIGN_UP));
    const { data } = yield call(addUser, payload);
    yield put(defaultActionSuccess(actionTypes.SIGN_UP, data));
    Router.push("/my-learnings");
    notification.success({
      message: "Welcome to FMG",
    });
  } catch (err) {
    yield put(defaultActionFailure(actionTypes.SIGN_UP, err));
  }
}
function* deleteAccountSaga({ payload }) {
  try {
    yield put(defaultActionLoading(actionTypes.DELETE_ACCOUNT));
    const { data } = yield call(deleteUser, payload);
    yield put(defaultActionSuccess(actionTypes.DELETE_ACCOUNT, data));
    if (data.message) {
      Router.push("/");
      notification.success({
        message: data.message,
      });
    }
  } catch (err) {
    yield put(defaultActionFailure(actionTypes.DELETE_ACCOUNT, err));
  }
}
export default function* userSagas() {
  yield all([
    takeLatest(actionTypes.SIGN_UP.SIMPLE, doSignUpSaga),
    takeLatest(actionTypes.DELETE_ACCOUNT.SIMPLE, deleteAccountSaga),
  ]);
}
