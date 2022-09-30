import * as actionTypes from "../types/auth.type";

const initialState = {
  user: {},
  error: "",
  currentPageNo: 0,
  userId: "",
  password: {},
  disable: true,
  next: false,
  isVerified: false,
  isLoading: false,
  token: null,
  language: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN.PENDING:
    case actionTypes.DELETE_ACCOUNT.PENDING:
    case actionTypes.SIGN_UP.PENDING: {
      return { ...state, isLoading: true };
    }

    case actionTypes.SIGN_IN.SUCCESS:
    case actionTypes.DELETE_ACCOUNT.SUCCESS:
    case actionTypes.SIGN_UP.SUCCESS: {
      return {
        ...state,
        isLoading: false,
        user: action.payload.result,
        token: action.payload.token,
        isVerified: false,
      };
    }

    case actionTypes.SIGN_IN.ERROR:
    case actionTypes.DELETE_ACCOUNT.ERROR:
    case actionTypes.SIGN_UP.ERROR: {
      return { ...state, error: action.payload, isLoading: false };
    }

    case actionTypes.RESET_PASSWORD.PENDING: {
      return { ...state, isLoading: true, error: "" };
    }

    case actionTypes.RESET_PASSWORD.SUCCESS: {
      return { ...state, password: action.payload, isLoading: false };
    }

    case actionTypes.RESET_PASSWORD.ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }

    case actionTypes.LOG_OUT.PENDING: {
      return { ...state, error: action.payload, isLoading: false };
    }

    case actionTypes.LOG_OUT.SUCCESS: {
      return {
        ...state,
        user: {},
        token: null,
        isVerified: false,
        disable: true,
      };
    }

    case actionTypes.LOG_OUT.ERROR: {
      return { ...state, error: action.payload, isLoading: false };
    }
    case actionTypes.UPDATE_PROFILE.PENDING: {
      return { ...state, isLoading: false };
    }
    case actionTypes.UPDATE_PROFILE.SUCCESS: {
      return { ...state, user: action.payload, isLoading: false };
    }

    case actionTypes.UPDATE_PROFILE.ERROR: {
      return { ...state, error: action.payload, isLoading: false };
    }
    case actionTypes.NEXT_PAGE:
      return { ...state, currentPageNo: action.payload, next: false };

    case actionTypes.PREV_PAGE:
      return {
        ...state,
        currentPageNo: action.payload,
        next: false,
        user: {},
        disable: true,
        isVerified: false,
      };
    case actionTypes.FORGOT_PASSWORD.PENDING:
    case actionTypes.OTP_CODE.PENDING: {
      return { ...state, isLoading: false };
    }
    case actionTypes.FORGOT_PASSWORD.SUCCESS:
    case actionTypes.OTP_CODE.SUCCESS: {
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        disable: action.payload.disable,
      };
    }
    case actionTypes.FORGOT_PASSWORD.ERROR:
    case actionTypes.OTP_CODE.ERROR: {
      return { ...state, error: action.payload, isLoading: false };
    }

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
    case actionTypes.GET_LANGUAGE.PENDING:
      return { ...state, isLoading: true };

    case actionTypes.GET_LANGUAGE.SUCCESS: {
      return { ...state, isLoading: false, language: action.payload };
    }

    case actionTypes.GET_LANGUAGE.ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default: {
      return state;
    }
  }
};

export default authReducer;
