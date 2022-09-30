import * as actionTypes from "../types/home.type";

const initialState = {
  isLoading: false,
  home: [],
  contact: {},
  error: "",
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_HOME_DATA.PENDING:
      return { ...state, isLoading: true };

    case actionTypes.GET_HOME_DATA.SUCCESS: {
      return { ...state, isLoading: false, home: action.payload };
    }

    case actionTypes.GET_HOME_DATA.ERROR:
      return { ...state, isLoading: false, error: action.payload };

    case actionTypes.CONTACT_US.PENDING:
      return { ...state, isLoading: true };

    case actionTypes.CONTACT_US.SUCCESS: {
      return { ...state, isLoading: false, contact: action.payload };
    }

    case actionTypes.CONTACT_US.ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default homeReducer;
