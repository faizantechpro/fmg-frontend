import * as actions from "../../../../store/types/course.type";

export const saveWeek = (payload) => {
  return {
    type: actions.GET_COURSE_WEEK_DATA.SIMPLE,
    payload,
  };
};

export const addStep = (payload) => {
  return {
    type: actions.STEP_UPDATE.SIMPLE,
    payload,
  };
};
