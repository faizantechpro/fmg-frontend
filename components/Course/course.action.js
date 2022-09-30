import * as actions from "../../store/types/course.type";

export const getAllCourses = () => {
  return {
    type: actions.GET_ALL_COURSES.SIMPLE,
  };
};

export const getCourse = (payload) => {
  return {
    type: actions.GET_COURSE.SIMPLE,
    payload,
  };
};
