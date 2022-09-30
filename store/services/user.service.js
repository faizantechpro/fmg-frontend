import API from "./base.service";
import {
  USER_API,
  SING_UP_API,
  CODE_API,
  ACTIVE_CODE_API,
  FORGOT_API,
} from "./api";

export const getAllUsers = (params) => {
  return API.get(USER_API, { params });
};

export const addUser = (payload) => {
  return API.patch(`${SING_UP_API}/${payload.userId}`, payload);
};
export const generateOTP = (payload) => {
  return API.post(CODE_API, payload);
};
export const forgotPassword = (payload) => {
  return API.post(FORGOT_API, payload);
};
export const checkCode = (payload) => {
  return API.post(ACTIVE_CODE_API, payload);
};
export const updateUser = (user) => {
  return API.patch(`${USER_API}/${user.userId}`, user);
};

export const deleteUser = (id) => {
  return API.delete(`${USER_API}/${id}`);
};

export const updateProfile = (formData) => {
  return API({
    method: "post",
    url: `${USER_API}/updateProfile`,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });
};
