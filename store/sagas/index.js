import { all, spawn } from "redux-saga/effects";
import authSaga from "./auth.saga";
import homeSagas from "./home.saga";
import userSagas from "./user.saga";
import courseSagas from "./course.saga";
import feedBackSagas from "./feedback.saga";
import aboutCardSagas from "./aboutCard.saga";
import wishListSagas from "./wishList.saga";

export default function* rootSaga() {
  yield all([
    spawn(authSaga),
    spawn(courseSagas),
    spawn(homeSagas),
    spawn(userSagas),
    spawn(feedBackSagas),
    spawn(aboutCardSagas),
    spawn(wishListSagas),
  ]);
}
