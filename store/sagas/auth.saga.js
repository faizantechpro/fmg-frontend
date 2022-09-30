import Router from "next/router";
import { notification } from "antd";
import { takeLatest, all, call, put } from "redux-saga/effects";
import * as actionTypes from "../types/auth.type";
import { doSignIn, resetPassword, doSignOut } from "../services/auth.service";
import {
  updateUser,
  generateOTP,
  checkCode,
  forgotPassword,
} from "../services/user.service";
import { language } from "../services/home.service";
import {
  defaultActionSuccess,
  defaultActionFailure,
  defaultActionLoading,
} from "../utils/app.actions";

function* doSignInSaga({ payload }) {
  try {
    yield put(defaultActionLoading(actionTypes.SIGN_IN));
    const { data } = yield call(doSignIn, payload);
    yield put(defaultActionSuccess(actionTypes.SIGN_IN, data));
    if (data.token) {
      Router.push("/my-learnings");
      notification.success({
        message: "LogIn Successfully",
      });
    }
    if (data.message) {
      notification.error({
        message: data.message,
      });
    }
  } catch (err) {
    yield put(defaultActionFailure(actionTypes.SIGN_IN, err));
  }
}

function* doSignOutSaga() {
  try {
    yield put(defaultActionLoading(actionTypes.LOG_OUT));
    const user = yield call(doSignOut);
    yield put(defaultActionSuccess(actionTypes.LOG_OUT, user));
    Router.push("/");
    notification.success({
      message: "Logout successfully",
    });
  } catch (err) {
    yield put(defaultActionFailure(actionTypes.LOG_OUT, err));
  }
}

function* doGenerateOTPSaga({ payload }) {
  try {
    yield put(defaultActionLoading(actionTypes.OTP_CODE));
    const { data } = yield call(generateOTP, payload);
    yield put(defaultActionSuccess(actionTypes.OTP_CODE, data));
    if (data.userId) {
      notification.success({
        message: "Generate OTP Successfully",
      });
    }
    if (data.message) {
      notification.error({
        message: data.message,
      });
    }
  } catch (err) {
    yield put(defaultActionFailure(actionTypes.OTP_CODE, err));
  }
}

function* doForgotPasswordSaga({ payload }) {
  try {
    yield put(defaultActionLoading(actionTypes.FORGOT_PASSWORD));
    const { data } = yield call(forgotPassword, payload);
    yield put(defaultActionSuccess(actionTypes.FORGOT_PASSWORD, data));
    if (data.userId) {
      notification.success({
        message: "Generate OTP Successfully",
      });
    }
    if (data.message) {
      notification.error({
        message: data.message,
      });
    }
  } catch (err) {
    yield put(defaultActionFailure(actionTypes.FORGOT_PASSWORD, err));
  }
}

function* doActiveOTPSaga({ payload }) {
  try {
    yield put(defaultActionLoading(actionTypes.SAVE_CODE));
    const { data } = yield call(checkCode, payload);
    yield put(defaultActionSuccess(actionTypes.SAVE_CODE, data));
    if (data.message) {
      notification.error({
        message: data.message,
      });
    }
  } catch (err) {
    yield put(defaultActionFailure(actionTypes.SAVE_CODE, err));
  }
}

function* resetPasswordSaga({ payload }) {
  try {
    yield put(defaultActionLoading(actionTypes.RESET_PASSWORD));
    const { data } = yield call(resetPassword, payload);
    yield put(defaultActionSuccess(actionTypes.RESET_PASSWORD, data));
    if (!data.message) {
      notification.success({
        message: "Password changed successfully",
      });
    } else {
      notification.error({
        message: data.message,
      });
    }
  } catch (err) {
    yield put(defaultActionFailure(actionTypes.RESET_PASSWORD, err));
  }
}

function* updateProfileSaga({ payload }) {
  try {
    yield put(defaultActionLoading(actionTypes.UPDATE_PROFILE));
    const { data } = yield call(updateUser, payload);
    yield put(defaultActionSuccess(actionTypes.UPDATE_PROFILE, data));
    if (!data.message) {
      notification.success({
        message: "Profile updated successfully",
      });
    } else {
      notification.error({
        message: data.message,
      });
    }
  } catch (err) {
    yield put(defaultActionFailure(actionTypes.UPDATE_PROFILE, err));
  }
}

function* getLanguageSaga() {
  try {
    yield put(defaultActionLoading(actionTypes.GET_LANGUAGE));
    const { data } = yield call(language);
    yield put(defaultActionSuccess(actionTypes.GET_LANGUAGE, data));
  } catch (err) {
    yield put(defaultActionFailure(actionTypes.GET_LANGUAGE, err));
  }
}

export default function* authSagas() {
  yield all([
    takeLatest(actionTypes.SIGN_IN.SIMPLE, doSignInSaga),
    takeLatest(actionTypes.OTP_CODE.SIMPLE, doGenerateOTPSaga),
    takeLatest(actionTypes.SAVE_CODE.SIMPLE, doActiveOTPSaga),
    takeLatest(actionTypes.LOG_OUT.SIMPLE, doSignOutSaga),
    takeLatest(actionTypes.FORGOT_PASSWORD.SIMPLE, doForgotPasswordSaga),
    takeLatest(actionTypes.RESET_PASSWORD.SIMPLE, resetPasswordSaga),
    takeLatest(actionTypes.UPDATE_PROFILE.SIMPLE, updateProfileSaga),
    takeLatest(actionTypes.GET_LANGUAGE.SIMPLE, getLanguageSaga),
  ]);
}
