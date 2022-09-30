export const defaultActionLoading = (action) => ({
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

export const MODAL_ACTIONS = {
  UPDATE: "UPDATE",
};

export const MODAL_IDS = {
  FEEDBACK: "Feedback",
};
