import * as actionTypes from "../actions/modal.actions";

const initialState = {
  modalId: "",
  data: {},
  isOpen: false,
  action: "",
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_MODAL_POPUP: {
      return { ...state, isOpen: true, ...action.payload };
    }

    case actionTypes.CLOSE_MODAL_POPUP: {
      return { ...state, ...action.payload, isOpen: false };
    }

    default: {
      return state;
    }
  }
};

export default modalReducer;
