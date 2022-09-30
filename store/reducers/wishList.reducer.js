import * as actionTypes from "../types/wishList.type";

const initialState = {
  isLoading: false,
  wishListCard: [],
  error: "",
};

const wishListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_WISH_LIST.PENDING:
      return { ...state, isLoading: true };

    case actionTypes.GET_ALL_WISH_LIST.SUCCESS: {
      return { ...state, isLoading: false, wishListCard: action.payload };
    }

    case actionTypes.GET_ALL_WISH_LIST.ERROR:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export default wishListReducer;
