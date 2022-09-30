import * as actions from "../../store/types/aboutCard.type";

export const getAllAboutCard = () => {
  return {
    type: actions.GET_ALL_ABOUT_US.SIMPLE,
  };
};
