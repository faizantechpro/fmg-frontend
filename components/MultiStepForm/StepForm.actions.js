import * as actions from "../../store/types/auth.type";
export const nextPage = (payload) => {
  return {
    type: actions.NEXT_PAGE,
    payload,
  };
};

export const prevPage = (payload) => ({
  type: actions.PREV_PAGE,
  payload,
});
