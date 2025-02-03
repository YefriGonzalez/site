import API from "./ApiFunctions";

export const init = async (data) => {
  return API.Post("home", data, false);
};
