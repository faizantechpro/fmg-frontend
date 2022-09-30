import * as actions from "../../store/types/feedback.type";

export const addFeedback = (payload) => {
  return {
    type: actions.FEEDBACK.SIMPLE,
    payload,
  };
};

export const getCourseRate = (payload) => {
  return {
    type: actions.COURSE_FEEDBACK.SIMPLE,
    payload,
  };
};

export const updateFeedback = (payload) => {
  return {
    type: actions.UPDATE_FEEDBACK.SIMPLE,
    payload,
  };
};

export const deleteFeedback = (payload) => {
  return {
    type: actions.DELETE_FEEDBACK.SIMPLE,
    payload,
  };
};
