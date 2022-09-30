import { notification } from "antd";
import { takeLatest, all, call, put } from "redux-saga/effects";
import * as actionTypes from "../types/wishList.type";
import {
  createWishList,
  getWishList,
  deleteWishList,
} from "../services/wishList.service";
import {
  defaultActionSuccess,
  defaultActionFailure,
  defaultActionLoading,
} from "../utils/app.actions";

function* addWishListSaga({ payload }) {
  try {
    yield put(defaultActionLoading(actionTypes.ADD_WISH_LIST));
    const { data } = yield call(createWishList, payload);
    yield put(defaultActionSuccess(actionTypes.ADD_WISH_LIST, data));
    notification.success({
      message: "Add To Wish List Successfully",
    });
  } catch (err) {
    yield put(defaultActionFailure(actionTypes.ADD_WISH_LIST, err));
  }
}

function* deleteWishListSaga({ payload }) {
  try {
    yield put(defaultActionLoading(actionTypes.DELETE_WISH_LIST));
    const { data } = yield call(deleteWishList, payload);
    yield put(defaultActionSuccess(actionTypes.DELETE_WISH_LIST, data));
    notification.success({
      message: "Delete Wish List Successfully",
    });
  } catch (err) {
    yield put(defaultActionFailure(actionTypes.DELETE_WISH_LIST, err));
  }
}

function* getWishListSaga({ payload }) {
  try {
    yield put(defaultActionLoading(actionTypes.GET_ALL_WISH_LIST));
    const { data } = yield call(getWishList, payload);
    yield put(defaultActionSuccess(actionTypes.GET_ALL_WISH_LIST, data));
  } catch (err) {
    yield put(defaultActionFailure(actionTypes.GET_ALL_WISH_LIST, err));
  }
}

export default function* wishListSagas() {
  yield all([
    takeLatest(actionTypes.GET_ALL_WISH_LIST.SIMPLE, getWishListSaga),
    takeLatest(actionTypes.ADD_WISH_LIST.SIMPLE, addWishListSaga),
    takeLatest(actionTypes.DELETE_WISH_LIST.SIMPLE, deleteWishListSaga),
  ]);
}
