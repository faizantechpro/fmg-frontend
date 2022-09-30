import * as actions from "../../store/types/auth.type";

export const doSignIn = (payload) => {
  return {
    type: actions.SIGN_IN.SIMPLE,
    payload,
  };
};

export const doLogOut = () => {
  return {
    type: actions.LOG_OUT.SIMPLE,
  };
};
