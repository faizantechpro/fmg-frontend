import * as actions from "../../store/types/wishList.type";

export const getWishListUser = (payload) => {
  return {
    type: actions.GET_ALL_WISH_LIST.SIMPLE,
    payload,
  };
};
export const addWishListUser = (payload) => {
  return {
    type: actions.ADD_WISH_LIST.SIMPLE,
    payload,
  };
};
export const deleteWishListUser = (payload) => {
  return {
    type: actions.DELETE_WISH_LIST.SIMPLE,
    payload,
  };
};
