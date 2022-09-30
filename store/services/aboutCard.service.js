import API from "./base.service";
import { ABOUT_US_API } from "./api";

export const aboutCard = () => {
  return API.get(ABOUT_US_API);
};
