import * as actionTypes from "../types/aboutCard.type";

const initialState = {
  isLoading: false,
  aboutCard: [],
  error: "",
};

const aboutCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_ABOUT_US.PENDING:
      return { ...state, isLoading: true };

    case actionTypes.GET_ALL_ABOUT_US.SUCCESS: {
      return { ...state, isLoading: false, aboutCard: action.payload };
    }

    case actionTypes.GET_ALL_ABOUT_US.ERROR:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export default aboutCardReducer;
