import API from "./base.service";
import { FEEDBACK_API, COURSE_FEEDBACK_API } from "./api";

export const doFeedBack = (payload) => {
  return API.post(FEEDBACK_API, payload);
};

export const updateFeedBack = (payload) => {
  console.log(payload.id);
  return API.patch(`${FEEDBACK_API}/${payload.id}`, payload);
};

export const deleteFeedBack = (payload) => {
  return API.delete(`${FEEDBACK_API}/${payload.id}`);
};

export const getCourseFeedBack = (payload) => {
  return API.post(COURSE_FEEDBACK_API, payload);
};
