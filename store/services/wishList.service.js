import API from "./base.service";
import { WISH_LIST_API } from "./api";

export const getWishList = (userId) => {
  return API.get(`${WISH_LIST_API}/${userId}`);
};

export const createWishList = (payload) => {
  return API.post(WISH_LIST_API, payload);
};

export const deleteWishList = (id) => {
  return API.delete(`${WISH_LIST_API}/${id}`);
};
