import API from "./base.service";
import cart from "../../icons/Cart.png";
import { COURSE_API } from "./api";

export const getAllCourses = () => {
  return API.get(COURSE_API);
};

export const getCourseById = (id) => {
  return API.get(`${COURSE_API}/${id}`);
};
