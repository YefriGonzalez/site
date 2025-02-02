import API from "./ApiFunctions";

export const SendEmail = async (data) => {
  return API.Post("sendEmail", data, false);
};
