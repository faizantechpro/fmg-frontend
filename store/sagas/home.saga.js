import { notification } from "antd";
import { takeLatest, all, call, put } from "redux-saga/effects";
import * as actionTypes from "../types/home.type";
import { home, addContact } from "../services/home.service";
import {
  defaultActionSuccess,
  defaultActionFailure,
  defaultActionLoading,
} from "../utils/app.actions";

function* getHomeDataSaga() {
  try {
    yield put(defaultActionLoading(actionTypes.GET_HOME_DATA));
    const { data } = yield call(home);
    yield put(defaultActionSuccess(actionTypes.GET_HOME_DATA, data));
  } catch (err) {
    yield put(defaultActionFailure(actionTypes.GET_HOME_DATA, err));
  }
}
function* addContactUsSaga({ payload }) {
  try {
    yield put(defaultActionLoading(actionTypes.CONTACT_US));
    const data = yield call(addContact, payload);
    yield put(defaultActionSuccess(actionTypes.CONTACT_US, data));
    notification.success({
      message: "Send message Successfully",
    });
  } catch (err) {
    yield put(defaultActionFailure(actionTypes.CONTACT_US, err));
  }
}

export default function* homeSagas() {
  yield all([
    takeLatest(actionTypes.GET_HOME_DATA.SIMPLE, getHomeDataSaga),
    takeLatest(actionTypes.CONTACT_US.SIMPLE, addContactUsSaga),
  ]);
}
