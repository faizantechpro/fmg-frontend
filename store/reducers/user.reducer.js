import * as actionTypes from "../types/auth.type";

const initialState = {
  userId: "",
  error: "",
  isVerified: false,
  isLoading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_CODE.PENDING: {
      return { ...state, isLoading: false };
    }

    case actionTypes.SAVE_CODE.SUCCESS: {
      return {
        ...state,
        isVerified: action.payload.isVerified,
        userId: action.payload.user,
        isLoading: false,
      };
    }

    case actionTypes.SAVE_CODE.ERROR: {
      return { ...state, error: action.payload, isLoading: false };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
