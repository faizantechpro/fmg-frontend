import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import homeReducer from "./home.reducer";
import userReducer from "./user.reducer";
import courseReducer from "./course.reducer";
import stepFormReducer from "./stepForm.reducer";
import feedBackReducer from "./feedBack.reducer";
import modalReducer from "./modal.reducer";
import aboutCardReducer from "./aboutCard.reducer";
import wishListReducer from "./wishList.reducer";
import weekReducer from "./weekData.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  course: courseReducer,
  home: homeReducer,
  user: userReducer,
  modal: modalReducer,
  stepForm: stepFormReducer,
  feedBack: feedBackReducer,
  aboutCard: aboutCardReducer,
  wishList: wishListReducer,
  week: weekReducer,
});

export default rootReducer;
