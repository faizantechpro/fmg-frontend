import { asyncActionType } from "../utils/reduxActions";

//auth related
export const SIGN_IN = asyncActionType("SIGN_IN");
export const SIGN_UP = asyncActionType("SIGN_UP");
export const LOG_OUT = asyncActionType("LOG_OUT");
export const RESET_PASSWORD = asyncActionType("RESET_PASSWORD");

export const OTP_CODE = asyncActionType("OTP_CODE");
export const SAVE_CODE = asyncActionType("SAVE_CODE");

// USER related

export const UPDATE_PROFILE = asyncActionType("UPDATE_PROFILE");
export const FORGOT_PASSWORD = asyncActionType("FORGOT_PASSWORD");
export const DELETE_ACCOUNT = asyncActionType("DELETE_ACCOUNT");

export const GET_LANGUAGE = asyncActionType("GET_LANGUAGE");
export const NEXT_PAGE = "NEXT_PAGE";
export const PREV_PAGE = "PREV_PAGE";
export const NEXT = "NEXT";
