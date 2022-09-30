import * as actionTypes from "../types/course.type";

const initialState = {
  isLoading: false,
  error: "",
  week: [],
  step: 0,
};

const weekReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_COURSE_WEEK_DATA.SIMPLE:
      return { ...state, isLoading: false, week: action.payload };

    case actionTypes.STEP_UPDATE.SIMPLE:
      return { ...state, isLoading: false, step: action.payload };

    default:
      return state;
  }
};

export default weekReducer;
