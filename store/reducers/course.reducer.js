import * as actionTypes from "../types/course.type";

const initialState = {
  isLoading: false,
  courses: [],
  course: {},
  error: "",
  rate: 0,
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_COURSES.PENDING:
      return { ...state, isLoading: true };

    case actionTypes.GET_ALL_COURSES.SUCCESS: {
      return { ...state, isLoading: false, courses: action.payload };
    }

    case actionTypes.GET_ALL_COURSES.ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case actionTypes.GET_COURSE.PENDING:
      return { ...state, isLoading: true };

    case actionTypes.GET_COURSE.SUCCESS: {
      return {
        ...state,
        isLoading: false,
        course: action.payload.result,
        rate: action.payload.rate,
      };
    }

    case actionTypes.GET_COURSE.ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default courseReducer;
