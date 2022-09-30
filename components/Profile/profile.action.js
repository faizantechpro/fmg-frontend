import * as actions from "../../store/types/auth.type";

export const resetPassword = (payload) => {
  return {
    type: actions.RESET_PASSWORD.SIMPLE,
    payload,
  };
};
export const updateProfile = (payload) => {
  return {
    type: actions.UPDATE_PROFILE.SIMPLE,
    payload,
  };
};
export const deleteAccount = (payload) => {
  
  return {
    type: actions.DELETE_ACCOUNT.SIMPLE,
    payload,
  };
};
