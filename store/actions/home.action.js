import * as actions from "../types/home.type";

export const getHomeData = () => {
  return {
    type: actions.GET_HOME_DATA.SIMPLE,
  };
};
export const addContact = (payload) => {
  return {
    type: actions.CONTACT_US.SIMPLE,
    payload,
  };
};
