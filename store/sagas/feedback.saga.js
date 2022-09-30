import { notification } from "antd";
import { takeLatest, all, call, put } from "redux-saga/effects";
import * as actionTypes from "../types/feedback.type";
import {
  doFeedBack,
  getCourseFeedBack,
  updateFeedBack,
  deleteFeedBack,
} from "../services/feedback.service";
import {
  defaultActionSuccess,
  defaultActionFailure,
  defaultActionLoading,
} from "../utils/app.actions";

function* addFeedBackSaga({ payload }) {
  try {
    yield put(defaultActionLoading(actionTypes.FEEDBACK));
    const { data } = yield call(doFeedBack, payload);
    yield put(defaultActionSuccess(actionTypes.FEEDBACK, data));
    notification.success({
      message: "Send FeedBack Successfully",
    });
  } catch (err) {
    yield put(defaultActionFailure(actionTypes.FEEDBACK, err));
  }
}
function* updateFeedBackSaga({ payload }) {
  try {
    yield put(defaultActionLoading(actionTypes.UPDATE_FEEDBACK));
    const { data } = yield call(updateFeedBack, payload);
    yield put(defaultActionSuccess(actionTypes.UPDATE_FEEDBACK, data));
    notification.success({
      message: "Update FeedBack Successfully",
    });
  } catch (err) {
    yield put(defaultActionFailure(actionTypes.UPDATE_FEEDBACK, err));
  }
}

function* deleteFeedBackSaga({ payload }) {
  try {
    yield put(defaultActionLoading(actionTypes.DELETE_FEEDBACK));
    const { data } = yield call(deleteFeedBack, payload);
    yield put(defaultActionSuccess(actionTypes.DELETE_FEEDBACK, data));
    notification.success({
      message: "DELETE FeedBack Successfully",
    });
  } catch (err) {
    yield put(defaultActionFailure(actionTypes.DELETE_FEEDBACK, err));
  }
}

function* getCourseFeedBackSaga({ payload }) {
  try {
    yield put(defaultActionLoading(actionTypes.COURSE_FEEDBACK));
    const { data } = yield call(getCourseFeedBack, payload);
    yield put(defaultActionSuccess(actionTypes.COURSE_FEEDBACK, data));
  } catch (err) {
    yield put(defaultActionFailure(actionTypes.COURSE_FEEDBACK, err));
  }
}

export default function* feedBackSagas() {
  yield all([
    takeLatest(actionTypes.FEEDBACK.SIMPLE, addFeedBackSaga),
    takeLatest(actionTypes.UPDATE_FEEDBACK.SIMPLE, updateFeedBackSaga),
    takeLatest(actionTypes.DELETE_FEEDBACK.SIMPLE, deleteFeedBackSaga),
    takeLatest(actionTypes.COURSE_FEEDBACK.SIMPLE, getCourseFeedBackSaga),
  ]);
}
