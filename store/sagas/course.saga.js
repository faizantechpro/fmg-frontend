import { takeLatest, all, call, put } from "redux-saga/effects";
import * as actionTypes from "../types/course.type";
import { getAllCourses, getCourseById } from "../services/course.service";
import {
  defaultActionSuccess,
  defaultActionFailure,
  defaultActionLoading,
} from "../utils/app.actions";

function* getAllCoursesSaga() {
  try {
    yield put(defaultActionLoading(actionTypes.GET_ALL_COURSES));
    const { data } = yield call(getAllCourses);
    yield put(defaultActionSuccess(actionTypes.GET_ALL_COURSES, data));
  } catch (err) {
    yield put(defaultActionFailure(actionTypes.GET_ALL_COURSES, err));
  }
}
function* getCourseSaga({ payload }) {
  try {
    yield put(defaultActionLoading(actionTypes.GET_COURSE));
    const { data } = yield call(getCourseById, payload);
    yield put(defaultActionSuccess(actionTypes.GET_COURSE, data));
  } catch (err) {
    yield put(defaultActionFailure(actionTypes.GET_COURSE, err));
  }
}

export default function* courseSagas() {
  yield all([
    takeLatest(actionTypes.GET_ALL_COURSES.SIMPLE, getAllCoursesSaga),
    takeLatest(actionTypes.GET_COURSE.SIMPLE, getCourseSaga),
  ]);
}
