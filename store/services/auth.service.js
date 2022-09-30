import API from "./base.service";
import { SING_IN_API, USER_API, LOGOUT_API } from "./api";

export const doSignIn = (credentials) => {
  return API.post(SING_IN_API, credentials);
};

export const doSignOut = () => {
  return API.get(LOGOUT_API);
};

export const resetPassword = (payload) => {
  return API.put(`${USER_API}/${payload.userId}`, payload);
};
