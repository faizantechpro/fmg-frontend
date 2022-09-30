import { notification } from "antd";
import { takeLatest, all, call, put } from "redux-saga/effects";
import * as actionTypes from "../types/aboutCard.type";
import { aboutCard } from "../services/aboutCard.service";
import {
  defaultActionSuccess,
  defaultActionFailure,
  defaultActionLoading,
} from "../utils/app.actions";

function* getAboutCardDataSaga() {
  try {
    yield put(defaultActionLoading(actionTypes.GET_ALL_ABOUT_US));
    const { data } = yield call(aboutCard);
    yield put(defaultActionSuccess(actionTypes.GET_ALL_ABOUT_US, data));
  } catch (err) {
    yield put(defaultActionFailure(actionTypes.GET_ALL_ABOUT_US, err));
  }
}

export default function* aboutCardSagas() {
  yield all([
    takeLatest(actionTypes.GET_ALL_ABOUT_US.SIMPLE, getAboutCardDataSaga),
  ]);
}
