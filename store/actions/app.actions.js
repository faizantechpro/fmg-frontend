import * as actions from "../types/auth.type";

export const getLanguageData = () => {
  return {
    type: actions.GET_LANGUAGE.SIMPLE,
  };
};
export const defaultLoadingAction = (action) => ({
  type: action.PENDING,
});

export const defaultActionSuccess = (action, payload) => ({
  type: action.SUCCESS,
  payload,
});

export const defaultActionFailure = (action, payload) => ({
  type: action.ERROR,
  payload,
});
