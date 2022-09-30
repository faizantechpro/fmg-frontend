import * as actions from "../../store/types/auth.type";

export const doSignUp = (payload) => {
  return {
    type: actions.SIGN_UP.SIMPLE,
    payload,
  };
};
export const saveEmail = (payload) => {
  return {
    type: actions.SAVE_CODE.SIMPLE,
    payload,
  };
};
export const generateOTP = (payload) => {
  return {
    type: actions.OTP_CODE.SIMPLE,
    payload,
  };
};

export const forgotPassword = (payload) => {
  return {
    type: actions.FORGOT_PASSWORD.SIMPLE,
    payload,
  };
};
