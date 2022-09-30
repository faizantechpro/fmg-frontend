import API from "./base.service";
import { CONTACT_API, HOME_API, LANGUAGE_API } from "./api";

export const home = () => {
  return API.get(HOME_API);
};

export const addContact = (payload) => {
  return API.post(CONTACT_API, payload);
};

export const language = () => {
  return API.get(LANGUAGE_API);
};
