import * as actionTypes from "../types/feedback.type";

const initialState = {
  feedBack: {},
  error: "",
  CourseFeedBack: [],
  isLoading: false,
};

const feedBackReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COURSE_FEEDBACK.PENDING:
    case actionTypes.UPDATE_FEEDBACK.PENDING:
    case actionTypes.DELETE_FEEDBACK.PENDING:
    case actionTypes.FEEDBACK.PENDING: {
      return { ...state, isLoading: false };
    }
    case actionTypes.COURSE_FEEDBACK.SUCCESS:
    case actionTypes.UPDATE_FEEDBACK.SUCCESS:
    case actionTypes.DELETE_FEEDBACK.SUCCESS:
    case actionTypes.FEEDBACK.SUCCESS: {
      return {
        ...state,
        CourseFeedBack: action.payload,
        isLoading: false,
      };
    }
    case actionTypes.COURSE_FEEDBACK.ERROR:
    case actionTypes.UPDATE_FEEDBACK.ERROR:
    case actionTypes.DELETE_FEEDBACK.ERROR:
    case actionTypes.FEEDBACK.ERROR: {
      return { ...state, error: action.payload, isLoading: false };
    }

    default: {
      return state;
    }
  }
};

export default feedBackReducer;
