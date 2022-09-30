import * as actionTypes from "../types/stepForm.type";

const initialState = {
  currentPageNo: 0,
  next: false,
};

const stepFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NEXT_PAGE:
      return { ...state, currentPageNo: action.payload, next: false };
    case actionTypes.PREV_PAGE:
      return { ...state, currentPageNo: action.payload, next: false };
    default:
      return state;
  }
};

export default stepFormReducer;
